import Interactions from '@/components/common/interactions/Interactions'
import styles from './layout.module.css'

const DynamicLayout = ({ children }) => {
    return (
        <div>
            <div className='interactions'>
                <Interactions />
            </div>
            <div className={styles.container}>{children}</div>
        </div>
    )
}

export default DynamicLayout
