import styles from './loader.module.css'

const UploadLoader = ({ size }) => {
    const finishedSize = { width: size, height: size }

    return (
        <span
            className={styles.uploadLoader}
            style={{
                width: `${finishedSize.width}px`,
                height: `${finishedSize.height}px`,
            }}
        ></span>
    )
}

export default UploadLoader
