import styles from './interactions.module.css'
import InteractionButton from '@/UI/buttons/interactions/InteractionButton'
import LikeIcon from '@/assets/svgs/icons/like.svg'
import HeartIcon from '@/assets/svgs/icons/heart.svg'
import DislikeIcon from '@/assets/svgs/icons/dislike.svg'
import Search from '@/components/search/Search'

const Interactions = () => {
    return (
        <div className={styles.container}>
            <Search/>
            <InteractionButton
                icon={<LikeIcon />}
                size={30}
                padding={15}
                radius={20}
                bigButton
                linkTo={'/likes'}
            />
            <InteractionButton
                icon={<HeartIcon />}
                size={30}
                padding={15}
                radius={20}
                bigButton
                linkTo={'/favourites'}
            />
            <InteractionButton
                icon={<DislikeIcon />}
                size={30}
                padding={15}
                radius={20}
                bigButton
                linkTo={'/dislikes'}
            />
        </div>
    )
}

export default Interactions
