'use client'
import useVotingCats from '@/hooks/queries/useVotingCats'
import styles from './cat-screen.module.css'
import Image from 'next/image'

const CatScreen = () => {
    const { getCat } = useVotingCats()

    if (getCat.isLoading) {
        return null
    }
    console.log(getCat.data)
    return (
        <div className={styles.container}>
            <div className={styles.picture}>
                <Image
                    alt='Kitty'
                    priority={true}
                    src={getCat?.data[0].url}
                    width={getCat.data[0].width}
                    height={getCat.data[0].height}
                />
            </div>
            <div className={styles.actions}></div>
        </div>
    )
}

export default CatScreen
