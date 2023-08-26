import InteractionButton from '@/UI/buttons/interactions/InteractionButton'
import HeartIcon from '@/assets/svgs/icons/heart.svg'
import styles from './gallery-grid.module.css'

const GalleryHoverMenu = ({ cellIsActive, catId }) => {
    return (
        <div
            className={`${styles.hiddenContent} ${
                cellIsActive === catId ? styles.isActive : ''
            }`}
        >
            <div className={styles.textBox}>
                <InteractionButton
                    icon={<HeartIcon />}
                    size={20}
                    padding={10}
                    bigButton
                />
            </div>
        </div>
    )
}

export default GalleryHoverMenu
