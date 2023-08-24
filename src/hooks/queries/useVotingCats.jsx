import axiosClient from '@/axios'
import LogsContext from '@/providers/LogsProvider'
import { useContext, useState } from 'react'
import { useMutation, useQueries, useQuery } from 'react-query'

const useVotingCats = (image_id) => {
    const [favId, setFavId] = useState()
    const { userLogs, setUserLogs } = useContext(LogsContext)

    const hours = String(new Date().getHours()).padStart(2, '0')
    const minutes = String(new Date().getMinutes()).padStart(2, '0')
    const time = hours + ':' + minutes

    const getCat = useQuery(
        ['get-cat'],
        () => axiosClient.get('/images/search'),
        {
            select: ({ data }) => data,
        }
    )

    const likeOrDislike = useMutation(
        ['like-or-dislike-cat'],
        (formData) => {
            return axiosClient.post('/votes', formData)
        },
        {
            onSuccess: ({ data }) => {
                getCat.refetch()
                favourites.reset()
                setUserLogs((prevLogs) => [
                    {
                        time: time,
                        image_id: data.image_id,
                        action: 'added',
                        point: data.value === 1 ? 'Likes' : 'Dislikes',
                    },
                    ...prevLogs,
                ])
            },
        }
    )

    const favourites = useMutation(
        ['favourites-cats'],
        (formData) => {
            return axiosClient.post('/favourites', formData)
        },
        {
            onSuccess: ({ data }) => {
                setFavId(data.id)
                setUserLogs((prevLogs) => [
                    {
                        time: time,
                        image_id: image_id,
                        action: 'added',
                        point: 'Favourites',
                    },
                    ...prevLogs,
                ])
            },
        }
    )

    const favouritesDelete = useMutation(
        ['favourites-cats-delete', favId],
        () => {
            return axiosClient.delete(`/favourites/${favId}`)
        },
        {
            onSuccess: ({ data }) => {
                favourites.reset()
                setUserLogs((prevLogs) => [
                    {
                        time: time,
                        image_id: image_id,
                        action: 'removed',
                        point: 'Favourites',
                    },
                    ...prevLogs,
                ])
            },
        }
    )

    const getMyCats = useQueries([
        {
            queryKey: ['get-like-or-dislike-cats'],
            queryFn: async () =>
                await axiosClient.get(`/votes?order=DESC&limit=4`),
            select: ({ data }) => data,
        },
        {
            queryKey: ['get-favourites-cats'],
            queryFn: async () =>
                await axiosClient.get(`/favourites?order=DESC&limit=4`),
            select: ({ data }) => data,
        },
    ])

    return {
        getCat,
        likeOrDislike,
        favourites,
        favouritesDelete,
        getMyCats,
    }
}

export default useVotingCats
