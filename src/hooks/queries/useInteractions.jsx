import axiosClient from '@/axios'
import React from 'react'
import { useMutation, useQuery } from 'react-query'

const useInteractions = () => {
    // const getFavourites = useQuery(
    //     ['get-favourites'],
    //     () => axiosClient.get(`/favourites?order=DESC`),
    //     {
    //         select: ({ data }) => data,
    //     }
    // )

    const favourites = useMutation(
        ['favourites-cats-v2'],
        (formData) => {
            return axiosClient.post('/favourites', formData)
        },
        {
            onSuccess: ({ data }) => {
                getFavourites.refetch()
            },
        }
    )

    const favouritesDelete = useMutation(
        ['favourites-cats-delete-v2', favourites?.data?.id],
        () => {
            return axiosClient.delete(`/favourites/${favourites?.data?.id}`)
        },
        {
            onSuccess: ({ data }) => {
                favourites.reset()
            },
        }
    )

    return {   favourites, favouritesDelete }
}

export default useInteractions
