import Backward from '@/components/modules/backward/Backward'
import styles from './page.module.css'
import CatScreen from '@/components/voting/cat-screen/CatScreen'

const VotingPage = () => {
  return (
    <div className={styles.container}>
        <Backward currentPath={'voting'} />
        <CatScreen/>
    </div>
  )
}

export default VotingPage