'use client'
import React, { useState } from 'react'
import Backward from '../modules/backward/Backward'
import styles from './breeds-screen.module.css'
import useBreeds from '@/hooks/queries/useBreeds'
import SelectInput from '@/UI/inputs/select/SelectInput'
import BreedsGrid from './breeds-grid/BreedsGrid'
import SortingUpIcon from '@/assets/svgs/icons/sortingUp.svg'
import SortingDownIcon from '@/assets/svgs/icons/sortingDown.svg'

const BreedsScreen = () => {
    const { getBreeds } = useBreeds()
    const [breed, setBreed] = useState({ value: '', label: 'All breeds' })
    const [gridItems, setGridItems] = useState({ value: 10, label: 'Limit 10' })
    const [orderBy, setOrderBy] = useState('asc')

    const breedsOptions = [
        {
            value: '',
            label: 'All breeds',
        },
        ...(getBreeds?.data?.map((breed) => ({
            value: breed.id,
            label: breed.name,
        })) || []),
    ]

    const gridLimit = [
        { value: 5, label: 'Limit 5' },
        { value: 10, label: 'Limit 10' },
        { value: 15, label: 'Limit 15' },
        { value: 20, label: 'Limit 20' },
    ]

    const handleOrder = (order) => {
        setOrderBy(order)
    }

    return (
        <>
            <div className={styles.tools}>
                <Backward to='/' />
                <SelectInput
                    options={getBreeds.isLoading ? [] : breedsOptions}
                    isLoading={getBreeds.isLoading}
                    value={breed}
                    setValue={setBreed}
                    defaultValue={breedsOptions[0]}
                    styles={{ width: '226px' }}
                    title='Sorting by breeds'
                />
                <SelectInput
                    options={gridLimit}
                    value={gridItems}
                    setValue={setGridItems}
                    defaultValue={gridLimit[3]}
                    styles={{ width: '101px' }}
                    title='Limit for items grid'
                />
                <button
                    className={styles.sortingButton}
                    onClick={() => handleOrder('desc')}
                    title='Sorting from Z to A'
                >
                    <SortingUpIcon />
                </button>

                <button
                    className={styles.sortingButton}
                    onClick={() => handleOrder('asc')}
                    title='Sorting from A to Z'
                >
                    <SortingDownIcon />
                </button>
            </div>
            <div className={styles.content}>
                <BreedsGrid
                    allBreeds={!breed?.value ? getBreeds : ''}
                    breed={breed?.value}
                    gridLimit={gridItems}
                    orderBy={orderBy}
                />
            </div>
        </>
    )
}

export default BreedsScreen
