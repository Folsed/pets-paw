import styles from './breed-info.module.css'

const BreedInfo = ({ data }) => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <span>{data.name}</span>
            </div>
            <div className={styles.catInfoBox}>
                <div className={styles.catDescription}>
                    <p>{data.description}</p>
                </div>
                <div className={styles.catProperties}>
                    <div className={styles.leftSection}>
                        <strong>Temperament: </strong>
                        <span>{data.temperament}</span>
                    </div>

                    <div className={styles.rightSection}>
                        <div className={styles.catProp}>
                            <strong>Origin: </strong>
                            <span>{data.origin}</span>
                        </div>

                        <div className={styles.catProp}>
                            <strong>Weight: </strong>
                            <span>{data.weight.metric}</span>
                        </div>

                        <div className={styles.catProp}>
                            <strong>Life Span: </strong>
                            <span>{data.life_span}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreedInfo
