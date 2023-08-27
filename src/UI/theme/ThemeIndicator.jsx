"use client"
import styles from './theme-indicator.module.css'
import DayIcon from '@/assets/svgs/theme/day.svg'
import NightIcon from '@/assets/svgs/theme/night.svg'
import DotIcon from '@/assets/svgs/theme/dot.svg'
import { useState } from 'react'

const ThemeIndicator = () => {
    const [nightIsActive, setNightIsActive] = useState(false)
    return (
        <div className={styles.container}>
            <div className={styles.eye}>
                <DayIcon />
            </div>
            <button className={`${styles.slider} ${styles.day}`}>
                <DotIcon className={styles.dot} />
            </button>
        </div>
    )
}

export default ThemeIndicator
