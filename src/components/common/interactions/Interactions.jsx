import SearchInput from '@/UI/inputs/search/SearchInput'
import styles from './interactions.module.css'
import InteractionButton from '@/UI/buttons/interactions/InteractionButton'
import LikeIcon from '@/assets/svgs/icons/like.svg'
import HeartIcon from '@/assets/svgs/icons/heart.svg'
import DislikeIcon from '@/assets/svgs/icons/dislike.svg'

const Interactions = () => {
    return (
        <div className={styles.container}>
            <SearchInput />
            <InteractionButton
                icon={<LikeIcon />}
                size={30}
                padding={15}
                radius={20}
                bigButton
            />
            <InteractionButton
                icon={<HeartIcon />}
                size={30}
                padding={15}
                radius={20}
                bigButton
            />
            <InteractionButton
                icon={<DislikeIcon />}
                size={30}
                padding={15}
                radius={20}
                bigButton
            />
        </div>
    )
}

export default Interactions
