'use client'
import InteractionButton from '@/UI/buttons/interactions/InteractionButton'
import styles from './backward.module.css'
import LeftArrowIcon from '@/assets/svgs/icons/leftArrow.svg'
import { useRouter } from 'next/navigation'

const Backward = ({ currentPath }) => {
    const router = useRouter()

    const handleClick = () => {
        router.push('/')
    }

    return (
        <div className={styles.container}>
            <InteractionButton
                icon={<LeftArrowIcon />}
                size={20}
                padding={10}
                onClick={handleClick}
            />
            <div className={styles.currentPath}>
                <span>{currentPath}</span>
            </div>
        </div>
    )
}

export default Backward
