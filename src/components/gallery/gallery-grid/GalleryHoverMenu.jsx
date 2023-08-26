import InteractionButton from '@/UI/buttons/interactions/InteractionButton'
import HeartIcon from '@/assets/svgs/icons/heart.svg'
import FullHeartIcon from '@/assets/svgs/icons/fullHeart.svg'

import styles from './gallery-grid.module.css'
import useVotingCats from '@/hooks/queries/useVotingCats'
import { useEffect, useState } from 'react'

const GalleryHoverMenu = ({ cellIsActive, catId }) => {
    const { getFavourites, favourites, favouritesDelete } = useVotingCats()
    const [isFavourited, setIsFavourited] = useState(false)

    const imageId = getFavourites?.data?.map((item) => item.image_id)

    useEffect(() => {
        if (getFavourites.data) {
            if (imageId.includes(catId)) {
                setIsFavourited(true)
            } else {
                setIsFavourited(false)
            }
        }
    }, [catId, imageId, getFavourites.data])

    const handleFavourites = () => {
        if (isFavourited) {
            favouritesDelete.mutate()
        } else {
            favourites.mutate({
                image_id: catId,
            })
        }
    }

    if (getFavourites.isLoading) {
        return null
    }
    return (
        <div
            className={`${styles.hiddenContent} ${
                cellIsActive === catId ? styles.isActive : ''
            }`}
        >
            <div className={styles.textBox}>
                <InteractionButton
                    icon={isFavourited ? <FullHeartIcon /> : <HeartIcon />}
                    size={20}
                    padding={10}
                    bigButton
                    onClick={handleFavourites}
                />
            </div>
        </div>
    )
}

export default GalleryHoverMenu
