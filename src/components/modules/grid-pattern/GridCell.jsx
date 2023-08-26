import styles from './grid-pattern.module.css'

const GridCell = ({ children, onMouseEnter, onMouseLeave}) => {
    return (
        <div
            className={`${styles.gridCell}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </div>
    )
}

export default GridCell
