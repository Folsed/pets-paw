'use client'
import styles from './cat-logging.module.css'
import LikeIcon from '@/assets/svgs/icons/like.svg'
import HeartIcon from '@/assets/svgs/icons/heart.svg'
import DislikeIcon from '@/assets/svgs/icons/dislike.svg'
import useVotingCats from '@/hooks/queries/useVotingCats'
import { useContext, useEffect, useState } from 'react'
import LogsContext from '@/providers/LogsProvider'

const CatLogging = () => {
    const { userLogs } = useContext(LogsContext)
    console.log(userLogs)

    return (
        <div className={styles.container}>
            {userLogs.slice(0, 4).map((item, index) => (
                <div className={styles.log} key={index}>
                    <div className={styles.leftText}>
                        <div className={styles.time}>
                            <span>{item.time}</span>
                        </div>
                        <div className={styles.text}>
                            <span>Image ID: </span>
                            <strong>{item.image_id}</strong>
                            <span>
                                {' '}
                                was{' '}
                                {item.action === 'added'
                                    ? `added to ${item.point}`
                                    : `removed from ${item.point}`}
                            </span>
                        </div>
                    </div>
                    <div className={styles.icon}>
                        {item.action === 'added' ? (
                            item.point === 'Likes' ? (
                                <LikeIcon fill='#97EAB9' />
                            ) : item.point === 'Dislikes' ? (
                                <DislikeIcon fill='#FFD280' />
                            ) : (
                                <HeartIcon fill='#FF868E' />
                            )
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CatLogging
