import axiosClient from '@/axios'
import React from 'react'
import { useMutation, useQuery } from 'react-query'

const useVotingCats = () => {
    const getCat = useQuery(
        ['get-cat'],
        async () => await axiosClient.get('/images/search'),
        {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            select: ({data}) => data
        }
    )

    const likeOrDislike = useMutation(
        ['like-or-dislike-cat'],
        async (formData) => await axiosClient.post('/votes', formData)
        .then(() => {
            getCat.refetch()
            favourites.reset()
        })
    )

    const favourites = useMutation(
        ['favourites-cats'],
        async (formData) => await axiosClient.post('/favourites', formData)
    )

    return { getCat, likeOrDislike, favourites }
}

export default useVotingCats
