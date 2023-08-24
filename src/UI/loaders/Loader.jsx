import styles from './loader.module.css'

const Loader = ({ size }) => {
    const finishedSize = { width: size, height: size }

    return (
        <div
            class={styles.loader}
            style={{
                width: `${finishedSize.width}px`,
                height: `${finishedSize.height}px`,
            }}
        ></div>
    )
}

export default Loader
