import axiosClient from '@/axios'
import React from 'react'
import { useMutation } from 'react-query'

const useCatUpload = () => {
    const catUpload = useMutation(
        ['cat-upload'],
        (formData) => {
            return axiosClient.post('/images/upload', formData)
        },
    )

    return { catUpload }
}

export default useCatUpload
