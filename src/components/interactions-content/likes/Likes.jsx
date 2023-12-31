'use client'
import GridPattern from '@/components/modules/grid-pattern/GridPattern'
import useMyCats from '@/hooks/queries/useMyCats'
import GridCell from '@/components/modules/grid-pattern/GridCell'
import Image from 'next/image'
import Loader from '@/UI/loaders/Loader'
import styles from '../interactions.module.css'

const Likes = () => {
    const { myCats } = useMyCats()

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
