import Backward from '@/components/modules/backward/Backward'
import styles from './page.module.css'
import BreedsScreen from '@/components/breeds/BreedsScreen'

const BreedsPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.tools}>
                <BreedsScreen/>
            </div>
        </div>
    )
}

export default BreedsPage
