import Backward from '@/components/modules/backward/Backward'
import styles from './layout.module.css'

const layout = ({ children }) => {
    return (
        <>
            <Backward />
            <div className={styles.content}>{children} </div>
        </>
    )
}

export default layout
