import styles from './interaction-button.module.css'

const InteractionButton = ({ icon, size, padding, radius, bigButton }) => {
    const finishedSize = { width: size, height: size }

    return (
        <button className={`${styles.container} ${bigButton ? styles.bigButton: ''}`} style={{padding: `${padding}px`, borderRadius: `${radius ? radius : 10}px`}}>
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
