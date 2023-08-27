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
            onSuccess: () => {
                getCat.refetch()
                favourites.reset()
            },
        }
    )

    const getFavourites = useQuery(
        ['get-favourites'],
        () => axiosClient.get(`/favourites?order=DESC`),
        {
            select: ({ data }) => data,
            refetchOnMount: true,
        }
    )

    const favourites = useMutation(
        ['favourites-cats'],
        (formData) => {
            return axiosClient.post('/favourites', formData)
        },
        {
            onSuccess: ({ data }) => {
                getFavourites.refetch()
                setFavId(data.id)
                favouritesDelete.reset()
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
                getFavourites.refetch()
                favourites.reset()
            },
        }
    )

    return {
        getCat,
        likeOrDislike,
        getFavourites,
        favourites,
        favouritesDelete,
    }
}

export default useVotingCats
