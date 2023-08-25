import axiosClient from '@/axios'
import React from 'react'
import { useQuery } from 'react-query'

const useBreeds = (breed, limit) => {
    const getBreeds = useQuery(
        ['get-breeds'],
        () => axiosClient.get(`breeds`),
        {
            select: ({ data }) => data,
        }
    )

    const getCatsByBreed = useQuery(
        ['get-cats-by-breed', breed],
        () =>
            axiosClient.get(`/images/search?breed_ids=${breed}&limit=${limit}`),
        {
            select: ({ data }) => data,
            enabled: !!breed,
        }
    )

    return { getBreeds, getCatsByBreed }
}

export default useBreeds
