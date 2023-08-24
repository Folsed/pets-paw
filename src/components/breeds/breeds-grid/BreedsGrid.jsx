'use client'
import useBreeds from '@/hooks/queries/useBreeds'
import Image from 'next/image'
import styles from './breeds-grid.module.css'
import Loader from '@/UI/loaders/Loader'
import React from 'react'

const BreedsGrid = ({ breed, allBreeds }) => {
    const { getCatsByBreed } = useBreeds(breed)

    const cats = allBreeds ? allBreeds : getCatsByBreed

    return (
        <>
            {cats.isLoading ? (
                <div className={styles.contentIsLoading}>
                    <Loader size={50} />
                </div>
            ) : (
                <div className={styles.gridContainer}>
                    {cats.data.map((item) => (
                        <React.Fragment key={item.id}>
                            {item.image?.url || item.url ? (
                                <div
                                    className={`${styles.gridCell}`}
                                >
                                    <Image
                                        // quality={50}
                                        src={item.image?.url || item.url || ''}
                                        alt={
                                            item.name ||
                                            item.breeds.name ||
                                            'Just a kitty'
                                        }
                                        width={500}
                                        height={500}
                                        priority
                                    />
                                </div>
                            ) : (
                                ''
                            )}
                        </React.Fragment>
                    ))}
                </div>
            )}
        </>
    )
}

export default BreedsGrid
