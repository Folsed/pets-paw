import styles from './navigation.module.css'
import LogoIcon from '@/assets/svgs/logoIcon.svg'
import LogoText from '@/assets/svgs/logoText.svg'
import VotingImg from '@/assets/img/links-cards/voting.png'
import BreedsImg from '@/assets/img/links-cards/breeds.png'
import GalleryImg from '@/assets/img/links-cards/gallery.png'
import LinkCard from '@/UI/link-card/LinkCard'
import ThemeIndicator from '@/UI/theme/ThemeIndicator'

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

const Navigation = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <div className={styles.logo}>
                    <LogoIcon />
                    <LogoText />
                </div>
                <ThemeIndicator/>
            </div>
            <div className={styles.helloContainer}>
                <div className={styles.heading}>
                    <h1>Hi!👋</h1>
                    <span>Welcome to MacPaw Bootcamp 2023</span>
                </div>

                <div className={styles.actions}>
                    <div className={styles.actionsHeading}>
                        <h3>Lets start using The Cat API</h3>
                    </div>
                    <div className={styles.cards}>
                        {links.map((item, index) => (
                            <LinkCard key={index} props={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation
