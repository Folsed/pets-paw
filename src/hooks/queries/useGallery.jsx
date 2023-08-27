import axiosClient from '@/axios'
import { useQuery } from 'react-query'

const useGallery = () => {
    const searchParams = new URLSearchParams({
        has_breeds: 1,
        limit: 20,
    })

    const getCats = useQuery(
        ['cats-gallery'],
        () => axiosClient.get(`/images/search?${searchParams}`),
        {
            select: ({ data }) => data,
        }
    )

    return { getCats }
}

export default useGallery
