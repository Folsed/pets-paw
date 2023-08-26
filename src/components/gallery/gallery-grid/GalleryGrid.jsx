import Loader from '@/UI/loaders/Loader'
import styles from './gallery-grid.module.css'
import GridPattern from '@/components/modules/grid-pattern/GridPattern'
import GridCell from '@/components/modules/grid-pattern/GridCell'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import GalleryHoverMenu from './GalleryHoverMenu'

const GalleryGrid = ({ cats, gridLimit, orderBy, breed, mime }) => {
    const [cellIsActive, setCellIsActive] = useState('')
    const [sortedCats, setSortedCats] = useState([])

    useEffect(() => {
        if (Array.isArray(cats.data)) {
            const filteredCats = cats.data
                .slice(0, gridLimit)
                .filter((item) => {
                    return breed ? item.breeds[0]?.id === breed : true
                })
                .filter((item) => {
                    const mimeExtensions = mime.split('.')
                    return mime
                        ? mimeExtensions.some((extension) =>
                              item.url.endsWith(extension)
                          )
                        : true
                })
                .sort((a, b) => {
                    return orderBy === 'asc'
                        ? a.breeds[0]?.name.localeCompare(b.breeds[0]?.name)
                        : orderBy === 'desc'
                        ? b.breeds[0]?.name.localeCompare(a.breeds[0]?.name)
                        : Math.random() - 0.5
                })
            setSortedCats(filteredCats)
        }
    }, [orderBy, cats, gridLimit, breed, mime])

    if (cats.isLoading) {
        return <Loader size={50} withContainer />
    }

    return (
        <GridPattern>
            {sortedCats.map((item) => (
                <GridCell
                    key={item.id}
                    onMouseEnter={() => setCellIsActive(item.id)}
                    onMouseLeave={() => setCellIsActive('')}
                >
                    <Image
                        src={item.url}
                        alt='Just a kitty'
                        width={500}
                        height={500}
                        title={item.breeds[0]?.name}
                    />
                    <GalleryHoverMenu cellIsActive={cellIsActive} catId={item.id} />
                </GridCell>
            ))}
        </GridPattern>
    )
}

export default GalleryGrid
