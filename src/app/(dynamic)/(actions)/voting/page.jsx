import Backward from '@/components/voting/backward/Backward'
import styles from './page.module.css'

const VotingPage = () => {
  return (
    <div className={styles.container}>
        <Backward currentPath={'voting'} />
    </div>
  )
}

export default VotingPage