'use client'
import { useState } from 'react'
import GalleryGrid from './gallery-grid/GalleryGrid'
import styles from './gallery-screen.module.css'
import useGallery from '@/hooks/queries/useGallery'
import SelectInput from '@/UI/inputs/select/SelectInput'
import useBreeds from '@/hooks/queries/useBreeds'

const GalleryScreen = () => {
    const [orderBy, setOrderBy] = useState({ value: 'random', label: 'Random' })
    const [mime, setMime] = useState({ value: '', label: 'All' })
    const [breed, setBreed] = useState({ value: '', label: 'None' })
    const [gridLimit, setGridLimit] = useState({
        value: 15,
        label: '15 items per page',
    })

    const { getCats } = useGallery()
    const { getBreeds } = useBreeds()

    const orderOptions = [
        { value: 'random', label: 'Random' },
        { value: 'asc', label: 'Asc' },
        { value: 'desc', label: 'Desc' },
    ]

    const gridLimitOptions = [
        { value: 5, label: '5 items per page' },
        { value: 10, label: '10 items per page' },
        { value: 15, label: '15 items per page' },
        { value: 20, label: '20 items per page' },
    ]

    const breedOptions = [
        { value: '', label: 'None' },
        ...(getBreeds?.data?.map((breed) => ({
            value: breed.id,
            label: breed.name,
        })) || []),
    ]

    const mimeOptions = [
        { value: '', label: 'All' },
        { value: 'gif', label: 'Animated' },
        { value: 'jpg.png.webp.jpeg', label: 'Static' },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.sortingBox}>
                <SelectInput
                    options={orderOptions}
                    value={orderBy}
                    setValue={setOrderBy}
                    defaultValue={orderOptions[0]}
                />
                <SelectInput
                    options={gridLimitOptions}
                    value={gridLimit}
                    setValue={setGridLimit}
                    defaultValue={gridLimitOptions[2]}
                />
                <SelectInput
                    options={breedOptions}
                    value={breed}
                    setValue={setBreed}
                    defaultValue={breedOptions[0]}
                />
                <SelectInput
                    options={mimeOptions}
                    value={mime}
                    setValue={setMime}
                    defaultValue={mimeOptions[0]}
                />
            </div>

            <div className={styles.cats}>
                <GalleryGrid
                    cats={getCats}
                    orderBy={orderBy.value}
                    gridLimit={gridLimit.value}
                    breed={breed.value}
                    mime={mime.value}
                />
            </div>
        </div>
    )
}

export default GalleryScreen