'use client'
import Image from 'next/image'
import styles from './link-card.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LinkCard = ({ props }) => {
    const pathname = usePathname()
    const isActive = pathname === props.link

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.picture}
                style={{ backgroundColor: props.color }}
            >
                <Image
                    src={props.picture}
                    alt={`Cats ${props.title}`}
                    quality={100}
                />
            </div>
            <div>
                <Link href={props.link} className={`${styles.cardLink} ${isActive ? styles.activeLink : ''}`} >
                    <span>{props.title}</span>
                </Link>
            </div>
        </div>
    )
}

export default LinkCard
