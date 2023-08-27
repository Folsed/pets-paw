'use client'
import GridPattern from '@/components/modules/grid-pattern/GridPattern'
import styles from './likes.module.css'
import useMyCats from '@/hooks/queries/useMyCats'
import GridCell from '@/components/modules/grid-pattern/GridCell'
import Image from 'next/image'
import Loader from '@/UI/loaders/Loader'

const Likes = () => {
    const { myCats } = useMyCats()

    if (myCats.isLoading) {
        return <Loader size={50} withContainer/>
    }

    return (
        <GridPattern>
            {myCats.data
                .filter((item) => item.value === 1)
                .map((item) => (
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
    )
}

export default Likes
