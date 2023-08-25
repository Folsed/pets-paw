'use client'
import useBreeds from '@/hooks/queries/useBreeds'
import Image from 'next/image'
import styles from './breeds-grid.module.css'
import Loader from '@/UI/loaders/Loader'
import React, { useState } from 'react'
import Link from 'next/link'

const BreedsGrid = ({ breed, allBreeds, gridLimit, orderBy }) => {
    const { getCatsByBreed } = useBreeds(breed, 20)
    const [cellIsActive, setCellIsActive] = useState('')

    const cats = allBreeds ? allBreeds : getCatsByBreed

    if (cats.isLoading) {
        return (
            <div className={styles.contentIsLoading}>
                <Loader size={50} />
            </div>
        )
    }

    const sortedCats = [...cats.data].sort((a, b) => {
        return orderBy === 'asc'
            ? a.name?.localeCompare(b.name)
            : b.name?.localeCompare(a.name)
    })

    return (
        <div className={styles.gridContainer}>
            {sortedCats.slice(0, gridLimit?.value).map((item) => (
                <React.Fragment key={item.id}>
                    {item.image?.url || item.url ? (
                        <div
                            className={`${styles.gridCell}`}
                            onMouseEnter={() => setCellIsActive(item.id)}
                            onMouseLeave={() => setCellIsActive('')}
                        >
                            <Image
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
                            <div
                                className={`${styles.hiddenContent} ${
                                    cellIsActive === item.id
                                        ? styles.isActive
                                        : ''
                                }`}
                            >
                                <Link href={`/breeds/${item.id}`} className={styles.textBox}>
                                    <span>
                                        {item.name ||
                                            item.breeds.name ||
                                            'Just a kitty'}
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}

export default BreedsGrid
