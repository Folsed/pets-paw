import styles from './interaction-button.module.css'

const InteractionButton = ({
    icon,
    size,
    padding,
    radius,
    bigButton,
    onClick,
}) => {
    const finishedSize = { width: size, height: size }

    return (
        <button
            className={`${styles.container} ${
                bigButton ? styles.bigButton : ''
            }`}
            style={{
                padding: `${padding}px`,
                borderRadius: `${radius ? radius : 10}px`,
            }}
            onClick={onClick}
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
        </button>
    )
}

export default InteractionButton
