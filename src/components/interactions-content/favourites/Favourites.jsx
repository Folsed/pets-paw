import Loader from '@/UI/loaders/Loader'
import GridCell from '@/components/modules/grid-pattern/GridCell'
import GridPattern from '@/components/modules/grid-pattern/GridPattern'
import useVotingCats from '@/hooks/queries/useVotingCats'
import Image from 'next/image'
import React from 'react'
import styles from './favourites.module.css'

const Likes = () => {
    const { getFavourites } = useVotingCats()

    const filteredCats = myCats?.data?.filter((item) => item.value === 1)

    if (myCats.isLoading) {
        return <Loader size={50} withContainer />
    }

    return (
        <>
            {filteredCats.length === 0 ? (
                <div className={styles.notFoundItems}>No item found</div>
            ) : (
                <GridPattern>
                    {filteredCats.map((item) => (
                        <GridCell key={item.id}>
                            <Image
                                src={item.image.url}
                                alt='My like cat'
                                width={500}
                                height={500}
                            />
                        </GridCell>
                    ))}
                </GridPattern>
            )}
        </>
    )
}

export default Likes
