import axiosClient from '@/axios'
import React from 'react'
import { useQuery } from 'react-query'

const useSearch = (breed) => {
    const searchParams = new URLSearchParams({
        limit: 20,
        breed_ids: breed,
    })

    const searchByBreed = useQuery(
        ['search-by-breed', breed],
        () => {
            return axiosClient.get(`/images/search?${searchParams}`)
        },
        {
            select: ({ data }) => data,
            enabled: !!breed
        }
    )

    return { searchByBreed }
}

export default useSearch
