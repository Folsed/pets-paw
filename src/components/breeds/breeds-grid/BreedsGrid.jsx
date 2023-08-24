'use client'
import useBreeds from '@/hooks/queries/useBreeds'
import React from 'react'

const BreedsGrid = ({ breed, allBreeds }) => {
    const { getCatsByBreed } = useBreeds(breed)

    const cats = allBreeds ? allBreeds : getCatsByBreed
    console.log(cats)

    return <div>
        {cats?.data?.map((item) => (
            <div key={item.id}>
                
            </div>
        ))}
    </div>
}

export default BreedsGrid
