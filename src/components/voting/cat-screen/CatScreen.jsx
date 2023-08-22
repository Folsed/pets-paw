'use client'
import useVotingCats from '@/hooks/queries/useVotingCats'
import styles from './cat-screen.module.css'
import Image from 'next/image'
import CatActions from './cat-actions/CatActions'

const CatScreen = () => {
    const { getCat } = useVotingCats()

    if (getCat.isLoading) {
        return null
    }

    return (
        <div className={styles.container}>
            <div className={styles.picture}>
                <Image
                    alt='Kitty'
                    priority={true}
                    src={getCat?.data[0].url}
                    width={getCat.data[0].width}
                    height={getCat.data[0].height}
                    quality={100}
                />
            </div>
            <CatActions data={getCat.data[0]} />
        </div>
    )
}

export default CatScreen
