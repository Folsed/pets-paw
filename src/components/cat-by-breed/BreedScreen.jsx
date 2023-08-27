'use client'
import useBreeds from '@/hooks/queries/useBreeds'
import styles from './breed-screen.module.css'
import BreedInfo from './breed-info/BreedInfo'
import CatsCarousel from './cats-carousel/CatsCarousel'
import Loader from '@/UI/loaders/Loader'

const BreedScreen = ({ breedId }) => {
    const { getCatsByBreed } = useBreeds(breedId, 5)

    if (getCatsByBreed.isLoading) {
        return (
            <div className={styles.contentIsLoading}>
                <Loader size={50} />
            </div>
        )
    }

    const catsImages = [
        ...(getCatsByBreed.data.map((image) => ({
            id: image.id,
            image: image.url,
            width: image.width,
            height: image.height,
        })) || []),
    ]

    return (
        <div className={styles.container}>
            <CatsCarousel images={catsImages} />
            <BreedInfo data={getCatsByBreed.data[0].breeds[0]} />
        </div>
    )
}

export default BreedScreen
