'use client'
import useBreeds from '@/hooks/queries/useBreeds'
import Image from 'next/image'
import styles from './breeds-grid.module.css'

const BreedsGrid = ({ breed, allBreeds }) => {
    const { getCatsByBreed } = useBreeds(breed)

    const cats = allBreeds ? allBreeds : getCatsByBreed
    console.log(cats)

    if (cats.isLoading) {
        return null
    }

    return (
        <div className={styles.gridContainer}>
            {cats.data.map((item, index) => (
                <div
                    key={item.id}
                    className={`${styles.gridCell}`}
                >
                    {item.image?.url || item.url ? (
                        <Image
                            src={item.image?.url || item.url || ''}
                            alt={
                                item.name || item.breeds.name || 'Just a kitty'
                            }
                            width={item.image?.width || item.width}
                            height={item.image?.height || item.height}
                            priority
                        />
                    ) : (
                        ''
                    )}
                </div>
            ))}
            {/* {cats.data.map((item, index) => (
                <div
                    key={item.id}
                    className={`${styles.item} ${
                        styles[`cell_${(index % 10) + 1}`]
                    }`}
                >
                    {item.image?.url || item.url ? (
                        <Image
                            src={item.image?.url || item.url || ''}
                            alt={
                                item.name || item.breeds.name || 'Just a kitty'
                            }
                            width={item.image?.width}
                            height={item.image?.height}
                            priority
                        />
                    ) : (
                        ''
                    )}
                </div>
            ))} */}
        </div>
    )
}

export default BreedsGrid
