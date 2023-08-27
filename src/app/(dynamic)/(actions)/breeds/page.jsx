import styles from './page.module.css'
import BreedsScreen from '@/components/breeds/BreedsScreen'

const BreedsPage = () => {
    return (
        <div className={styles.tools}>
            <BreedsScreen />
        </div>
    )
}

export default BreedsPage
