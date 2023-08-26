import Backward from '@/components/modules/backward/Backward'
import styles from './page.module.css'
import GalleryScreen from '@/components/gallery/GalleryScreen'

const GalleryPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.tools}>
                <Backward to={'/'} />
            </div>
            <div className={styles.content}>
                <GalleryScreen />
            </div>
        </div>
    )
}

export default GalleryPage
