import axios from 'axios'

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})

axiosClient.interceptors.request.use((config) => {
    config.headers['x-api-key'] = process.env.NEXT_PUBLIC_ACCESS_KEY
    return config
})

axiosClient.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            return error
        }
        throw error
    }
)

export default axiosClient
