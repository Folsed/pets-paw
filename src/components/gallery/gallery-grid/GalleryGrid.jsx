import Loader from '@/UI/loaders/Loader'
import styles from './gallery-grid.module.css'
import GridPattern from '@/components/modules/grid-pattern/GridPattern'
import GridCell from '@/components/modules/grid-pattern/GridCell'
import Image from 'next/image'

const GalleryGrid = ({ cats, gridLimit, orderBy, breed, mime }) => {
    if (cats.isLoading) {
        return <Loader size={50} withContainer />
    }

    
    const sortedCats = [...cats.data]
    .slice(0, gridLimit)
    .filter((item) => {
        return breed ? item.breeds[0].id === breed : item
    })
    .filter((item) => {
        const mimeExtensions = mime.split('.')
        return mime ? mimeExtensions.some((extension) => item.url.endsWith(extension)) : item
    })
    .sort((a, b) => {
        return orderBy === 'asc'
        ? a.breeds[0].name.localeCompare(b.breeds[0].name)
        : orderBy === 'desc'
        ? b.breeds[0].name.localeCompare(a.breeds[0].name)
        : Math.random() - 0.5
    })
    
    console.log(sortedCats)
    return (
        <GridPattern>
            {sortedCats.map((item) => (
                <GridCell key={item.id}>
                    <Image
                        src={item.url}
                        alt='Just a kitty'
                        width={500}
                        height={500}
                        title={item.breeds[0]?.name}
                    />
                </GridCell>
            ))}
        </GridPattern>
    )
}

export default GalleryGrid
