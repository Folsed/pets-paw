import Backward from '@/components/modules/backward/Backward'
import styles from './page.module.css'
import BreedScreen from '@/components/cat-by-breed/BreedScreen'

const BreedPage = ({ params }) => {
    return (
        <>
            <div className={styles.tools}>
                <Backward />
            </div>
            <div className={styles.content}>
                <BreedScreen breedId={params.id} />
            </div>
        </>
    )
}

export default BreedPage
