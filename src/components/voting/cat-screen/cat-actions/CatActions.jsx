'use client'
import styles from './cat-actions.module.css'
import LikeIcon from '@/assets/svgs/icons/like.svg'
import HeartIcon from '@/assets/svgs/icons/heart.svg'
import FullHeartIcon from '@/assets/svgs/icons/fullHeart.svg'
import DislikeIcon from '@/assets/svgs/icons/dislike.svg'
import useVotingCats from '@/hooks/queries/useVotingCats'
import { useContext, useEffect, useState } from 'react'
import LogsContext from '@/providers/LogsProvider'

const CatActions = ({ data }) => {
    const { likeOrDislike, favourites, favouritesDelete } = useVotingCats(
        data.id
    )
    const { setUserLogs } = useContext(LogsContext)

    const hours = String(new Date().getHours()).padStart(2, '0')
    const minutes = String(new Date().getMinutes()).padStart(2, '0')
    const time = hours + ':' + minutes

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

    useEffect(() => {
        if (likeOrDislike.data && likeOrDislike?.isSuccess) {
            setUserLogs((prevLogs) => [
                {
                    time: time,
                    image_id: likeOrDislike.data.data.image_id,
                    action: 'added',
                    point:
                        likeOrDislike.data.data.value === 1
                            ? 'Likes'
                            : 'Dislikes',
                },
                ...prevLogs,
            ])
        }
    }, [likeOrDislike.data, likeOrDislike.isSuccess, setUserLogs, time])

    useEffect(() => {
        if (favourites.data && favourites.isSuccess) {
            setUserLogs((prevLogs) => [
                {
                    time: time,
                    image_id: data.id,
                    action: 'added',
                    point: 'Favourites',
                },
                ...prevLogs,
            ])
        } else if (favouritesDelete.data && favouritesDelete.isSuccess) {
            setUserLogs((prevLogs) => [
                {
                    time: time,
                    image_id: data.id,
                    action: 'removed',
                    point: 'Favourites',
                },
                ...prevLogs,
            ])
        }
    }, [
        favourites.data,
        favourites.isSuccess,
        time,
        setUserLogs,
        data,
        favouritesDelete.data,
        favouritesDelete.isSuccess,
    ])


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
