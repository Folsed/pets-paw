import Image from 'next/image'
import styles from './page.module.css'
import GirlAndPet from '@/assets/svgs/girl-and-pet.svg'

export default function Home() {
    return (
        <main className={styles.homePageWrapper}>
            <div className={styles.canvas}></div>
            <div className={styles.girlAndPet}>
                <GirlAndPet/>
            </div>
        </main>
    )
}
