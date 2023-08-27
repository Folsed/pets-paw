'use client'
import Loader from '@/UI/loaders/Loader'
import useSearch from '@/hooks/queries/useSearch'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import styles from './search.module.css'
import GridPattern from '../modules/grid-pattern/GridPattern'
import GridCell from '../modules/grid-pattern/GridCell'
import Image from 'next/image'
import Link from 'next/link'

const SearchResult = () => {
    const searchParams = useSearchParams()
    const breed = searchParams.get('q')
    const { searchByBreed } = useSearch(breed)
    const [cellIsActive, setCellIsActive] = useState('')

    if (searchByBreed.isLoading) {
        return <Loader size={50} withContainer />
    }

    return (
        <div className={styles.searchedContent}>
            <div className={styles.query}>
                <span>Search result for: </span>
                <strong>{breed}</strong>
            </div>
            <GridPattern>
                {searchByBreed.data.map((item) => (
                    <GridCell
                        key={item.id}
                        onMouseEnter={() => setCellIsActive(item.id)}
                        onMouseLeave={() => setCellIsActive('')}
                    >
                        <Image
                            src={item.url}
                            alt={item.breeds[0].name}
                            title={item.breeds[0].name}
                            width={500}
                            height={500}
                        />
                        <div
                            className={`${styles.hiddenContent} ${
                                cellIsActive === item.id ? styles.isActive : ''
                            }`}
                        >
                            <Link
                                href={`/breeds/${item.breeds[0].id}`}
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
                ))}
            </GridPattern>
        </div>
    )
}

export default SearchResult
