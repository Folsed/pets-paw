import styles from './loader.module.css'

const Loader = ({ size, withContainer }) => {
    const finishedSize = { width: size, height: size }

    return (
        <div className={withContainer ? styles.container : ''}>
            <div
                className={styles.loader}
                style={{
                    width: `${finishedSize.width}px`,
                    height: `${finishedSize.height}px`,
                }}
            ></div>
        </div>
    )
}

export default Loader
