import styles from './grid-pattern.module.css'

const GridPattern = ({children}) => {
    return (
        <div className={styles.gridContainer}>
            {children}
        </div>
    )
}

export default GridPattern
