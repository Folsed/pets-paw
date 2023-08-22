import styles from './interaction-button.module.css'

const InteractionButton = ({ icon, size, padding }) => {
    const finishedSize = { width: size, height: size }

    return (
        <button className={styles.container} style={{padding: `${padding}px`}}>
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
