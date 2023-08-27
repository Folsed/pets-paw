'use client'
import Loader from '@/UI/loaders/Loader'
import GridCell from '@/components/modules/grid-pattern/GridCell'
import GridPattern from '@/components/modules/grid-pattern/GridPattern'
import useVotingCats from '@/hooks/queries/useVotingCats'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './favourites.module.css'
import FullHeartIcon from '@/assets/svgs/icons/fullHeart.svg'
import InteractionButton from '@/UI/buttons/interactions/InteractionButton'
import useMyCats from '@/hooks/queries/useMyCats'

const Favourites = () => {
    const { getFavourites } = useVotingCats()
    const { favouritesDelete } = useMyCats()
    const [cellIsActive, setCellIsActive] = useState('')

    if (getFavourites.isLoading) {
        return <Loader size={50} withContainer />
    }

    const handleDelete = (id) => {
        favouritesDelete.mutate(id)
    }

    return (
        <>
            {getFavourites.data.length === 0 ? (
                <div className={styles.notFoundItems}>No item found</div>
            ) : (
                <GridPattern>
                    {getFavourites.data.map((item) => (
                        <GridCell
                            key={item.id}
                            onMouseEnter={() => setCellIsActive(item.id)}
                            onMouseLeave={() => setCellIsActive('')}
                        >
                            <Image
                                src={item.image.url}
                                alt='My favourite cat'
                                width={500}
                                height={500}
                            />
                            <div
                                className={`${styles.hiddenContent} ${
                                    cellIsActive === item.id
                                        ? styles.isActive
                                        : ''
                                }`}
                            >
                                <div className={styles.textBox}>
                                    <InteractionButton
                                        icon={<FullHeartIcon />}
                                        size={20}
                                        padding={10}
                                        bigButton
                                        onClick={() => handleDelete(item.id)}
                                    />
                                </div>
                            </div>
                        </GridCell>
                    ))}
                </GridPattern>
            )}
        </>
    )
}

export default Favourites
