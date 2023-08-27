import axiosClient from '@/axios'
import { useMutation, useQuery } from 'react-query'
import useVotingCats from './useVotingCats'

const useMyCats = () => {
    const { getFavourites } = useVotingCats()

    const myCats = useQuery(
        ['my-likes'],
        () => {
            return axiosClient.get('/votes?order=DESC')
        },
        {
            select: ({ data }) => data,
            refetchOnMount: true,
        }
    )

    const favouritesDelete = useMutation(
        ['favourites-delete'],
        (formData) => {
            return axiosClient.delete(`/favourites/${formData}`)
        },
        {
            onSuccess: () => {
                getFavourites.refetch()
            },
        }
    )

    return { myCats, favouritesDelete }
}

export default useMyCats
