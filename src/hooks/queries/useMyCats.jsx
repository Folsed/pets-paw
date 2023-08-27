import axiosClient from '@/axios'
import React from 'react'
import { useQuery } from 'react-query'

const useMyCats = () => {
    const myCats = useQuery(
        ['my-likes'],
        () => {
            return axiosClient.get('/votes?order=DESC')
        },
        {
            select: ({ data }) => data,
            refetchOnMount: true
        }
    )

    return { myCats }
}

export default useMyCats
