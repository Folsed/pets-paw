'use client'
import InteractionButton from '@/UI/buttons/interactions/InteractionButton'
import styles from './backward.module.css'
import LeftArrowIcon from '@/assets/svgs/icons/leftArrow.svg'
import { usePathname, useRouter } from 'next/navigation'

const Backward = ({ to }) => {
    const router = useRouter()
    const pathname = usePathname()

    const segments = pathname.split('/')

    const handleClick = () => {
        if (to) {
            router.push(to)
        } else {
            router.back()
        }
    }

    return (
        <div className={styles.container}>
            <InteractionButton
                icon={<LeftArrowIcon />}
                size={20}
                padding={10}
                onClick={handleClick}
            />
            {segments.slice(1).map((item, i) => (
                <div className={styles.segment} key={i}>
                    <span>{item}</span>
                </div>
            ))}{' '}
        </div>
    )
}

export default Backward
