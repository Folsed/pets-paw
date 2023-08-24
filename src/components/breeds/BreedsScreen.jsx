'use client'
import React, { useState } from 'react'
import Backward from '../modules/backward/Backward'
import styles from './breeds-screen.module.css'
import useBreeds from '@/hooks/queries/useBreeds'
import SelectInput from '@/UI/inputs/select/SelectInput'
import BreedsGrid from './breeds-grid/BreedsGrid'

const BreedsScreen = () => {
    const [breed, setBreed] = useState()
    const { getBreeds } = useBreeds()

    // if (getBreeds.isLoading) {
    //     return null
    // }

    return (
        <React.Fragment>
            <div className={styles.tools}>
                <Backward currentPath='breeds' />
                <SelectInput
                    options={getBreeds.isLoading ? [] : getBreeds.data}
                    isLoading={getBreeds.isLoading}
                    value={breed}
                    setValue={setBreed}
                />
            </div>
            <div className={styles.content}>
                <BreedsGrid
                    allBreeds={!breed?.value ? getBreeds : ''}
                    breed={breed?.value}
                />
            </div>
        </React.Fragment>
    )
}

export default BreedsScreen
