import axiosClient from '@/axios'
import React from 'react'
import { useQuery } from 'react-query'

const useVotingCats = () => {
    const getCat = useQuery(
        ['get-cat'],
        async () => await axiosClient('/images/search'),
        {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            select: ({data}) => data
        }
    )

    return { getCat }
}

export default useVotingCats
