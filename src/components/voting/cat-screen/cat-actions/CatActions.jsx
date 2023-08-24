'use client'
import styles from './cat-actions.module.css'
import LikeIcon from '@/assets/svgs/icons/like.svg'
import HeartIcon from '@/assets/svgs/icons/heart.svg'
import FullHeartIcon from '@/assets/svgs/icons/fullHeart.svg'
import DislikeIcon from '@/assets/svgs/icons/dislike.svg'
import useVotingCats from '@/hooks/queries/useVotingCats'
import { useState } from 'react'

const CatActions = ({ data }) => {
    const { likeOrDislike, favourites, favouritesDelete } = useVotingCats(data.id)

    const handleLikeOrDis = (value) => {
        const formData = {
            image_id: data.id,
            value: value,
        }
        likeOrDislike.mutate(formData)
    }

    const handleFavourites = () => {
        if (favourites.status === 'success') {
            favouritesDelete.mutate()
        } else {
            favourites.mutate({
                image_id: data.id,
            })
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.splitBlock}>
                <button
                    className={`${styles.actionButton} ${styles.like}`}
                    onClick={() => handleLikeOrDis(1)}
                >
                    <LikeIcon />
                </button>
                <button
                    className={`${styles.actionButton} ${styles.heart}`}
                    onClick={handleFavourites}
                >
                    {favourites.status === 'success' ? (
                        <FullHeartIcon />
                    ) : (
                        <HeartIcon />
                    )}
                </button>
                <button
                    className={`${styles.actionButton} ${styles.dislike}`}
                    onClick={() => handleLikeOrDis(-1)}
                >
                    <DislikeIcon />
                </button>
            </div>
        </div>
    )
}

export default CatActions
