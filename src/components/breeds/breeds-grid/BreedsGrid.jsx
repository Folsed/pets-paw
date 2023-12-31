'use client'
import useBreeds from '@/hooks/queries/useBreeds'
import Image from 'next/image'
import styles from './breeds-grid.module.css'
import Loader from '@/UI/loaders/Loader'
import React, { useState } from 'react'
import Link from 'next/link'
import GridPattern from '@/components/modules/grid-pattern/GridPattern'
import GridCell from '@/components/modules/grid-pattern/GridCell'

const BreedsGrid = ({ breed, allBreeds, gridLimit, orderBy }) => {
    const { getCatsByBreed } = useBreeds(breed, 20)
    const [cellIsActive, setCellIsActive] = useState('')

    const cats = allBreeds ? allBreeds : getCatsByBreed

    if (cats.isLoading) {
        return <Loader size={50} withContainer />
    }

    const sortedCats = [...cats.data]
        .slice(0, gridLimit?.value)
        .sort((a, b) => {
            return orderBy === 'asc'
                ? a.name?.localeCompare(b.name)
                : b.name?.localeCompare(a.name)
        })

    return (
        <GridPattern>
            {sortedCats.map((item) => (
                <React.Fragment key={item.id}>
                    {item.image?.url || item.url ? (
                        <GridCell
                            onMouseEnter={() => setCellIsActive(item.id)}
                            onMouseLeave={() => setCellIsActive('')}
                        >
                            <Image
                                src={item.image?.url || item.url || ''}
                                alt={
                                    item.name ||
                                    item.breeds[0].name ||
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
                                <Link
                                    href={`/breeds/${
                                        allBreeds ? item.id : item.breeds[0].id
                                    }`}
                                    className={styles.textBox}
                                >
                                    <span>
                                        {item.name ||
                                            item.breeds[0].name ||
                                            'Just a kitty'}
                                    </span>
                                </Link>
                            </div>
                        </GridCell>
                    ) : (
                        ''
                    )}
                </React.Fragment>
            ))}
        </GridPattern>
    )
}

export default BreedsGrid
