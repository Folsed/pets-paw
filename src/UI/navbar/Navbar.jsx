'use client'
import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
import NavbarIcon from '@/assets/svgs/icons/navbar.svg'
import InteractionButton from '../buttons/interactions/InteractionButton'
import LinkCard from '../link-card/LinkCard'
import VotingImg from '@/assets/img/links-cards/voting.png'
import BreedsImg from '@/assets/img/links-cards/breeds.png'
import GalleryImg from '@/assets/img/links-cards/gallery.png'
import CrossIcom from '@/assets/svgs/icons/cross.svg'
import { usePathname } from 'next/navigation'

const links = [
    { title: 'voting', picture: VotingImg, color: '#B4B7FF', link: '/voting' },
    { title: 'breeds', picture: BreedsImg, color: '#97EAB9', link: '/breeds' },
    {
        title: 'gallery',
        picture: GalleryImg,
        color: '#FFD280',
        link: '/gallery',
    },
]

const Navbar = () => {
    const [active, setIsActive] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setIsActive(false)
    }, [pathname])

    return (
        <div className={styles.container}>
            <div className={styles.navbarButton}>
                <InteractionButton
                    icon={<NavbarIcon />}
                    padding={15}
                    bigButton
                    radius={20}
                    className={styles.navButton}
                    onClick={() => setIsActive(true)}
                />
            </div>
            <div className={`${styles.menu} ${active ? styles.active : ''}`}>
                <div className={styles.closeButton}>
                    <InteractionButton
                        icon={<CrossIcom />}
                        size={26}
                        padding={15}
                        radius={20}
                        bigButton
                        onClick={() => setIsActive(false)}
                    />
                </div>
                <div className={styles.cards}>
                    {links.map((item, index) => (
                        <LinkCard key={index} props={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar
