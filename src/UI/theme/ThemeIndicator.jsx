'use client'
import styles from './theme-indicator.module.css'
import DayIcon from '@/assets/svgs/theme/day.svg'
import NightIcon from '@/assets/svgs/theme/night.svg'
import DotIcon from '@/assets/svgs/theme/dot.svg'
import { useEffect, useState } from 'react'

const ThemeIndicator = () => {
    const [nightIsActive, setNightIsActive] = useState(false)

    const setDarkMode = () => {
        document.body.setAttribute('data-theme', 'dark')
    }

    const setLightMode = () => {
        document.body.setAttribute('data-theme', 'light')
    }

    useEffect(() => {
        if (nightIsActive) setDarkMode()
        else setLightMode()
    }, [nightIsActive])

    const handleToggleTheme = (e) => {
        setNightIsActive((prevState) => !prevState)
    }

    return (
        <div className={styles.container}>
            <div className={styles.eye}>
                {nightIsActive ? <NightIcon /> : <DayIcon />}
            </div>
            <button
                className={`${styles.slider} ${
                    nightIsActive ? styles.night : ''
                }`}
                onClick={handleToggleTheme}
            >
                <DotIcon className={styles.dot} />
            </button>
        </div>
    )
}

export default ThemeIndicator
