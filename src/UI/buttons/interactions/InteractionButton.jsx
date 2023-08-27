'use client'
import Link from 'next/link'
import styles from './interaction-button.module.css'
import { usePathname } from 'next/navigation'

const InteractionButton = ({
    icon,
    size,
    padding,
    radius,
    bigButton,
    onClick,
    linkTo,
    type,
}) => {
    const pathname = usePathname()
    const isActive = pathname === linkTo
    const finishedSize = { width: size, height: size }
    const ButtonComponent = linkTo ? Link : 'button'
    const buttonProps = linkTo
        ? { href: linkTo }
        : { onClick: onClick, type: type }

    return (
        <ButtonComponent
            className={`${styles.container} ${
                bigButton ? styles.bigButton : ''
            } ${isActive ? styles.activeLink : ''}`}
            style={{
                padding: `${padding}px`,
                borderRadius: `${radius ? radius : 10}px`,
            }}
            onClick={onClick}
            {...buttonProps}
        >
            <div
                className={styles.icon}
                style={{
                    width: `${finishedSize.width}px`,
                    height: `${finishedSize.height}px`,
                }}
            >
                {icon}
            </div>
        </ButtonComponent>
    )
}

export default InteractionButton
