'use client'
import useVotingCats from '@/hooks/queries/useVotingCats'
import styles from './cat-screen.module.css'
import Image from 'next/image'
import CatActions from './cat-actions/CatActions'
import Loader from '@/UI/loaders/Loader'

const CatScreen = ({ setUserLogs, userLogs }) => {
    const { getCat } = useVotingCats()

    return (
        <div className={styles.container}>
            {getCat.isLoading ? (
                <Loader size={50} />
            ) : (
                <>
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
                    <CatActions
                        data={getCat.data[0]}
                        setUserLogs={setUserLogs}
                        userLogs={userLogs}
                    />
                </>
            )}
        </div>
    )
}

export default CatScreen
