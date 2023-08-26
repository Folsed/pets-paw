'use client'
import Backward from '@/components/modules/backward/Backward'
import styles from './page.module.css'
import GalleryScreen from '@/components/gallery/GalleryScreen'
import Link from 'next/link'
import UploadIcon from '@/assets/svgs/icons/upload.svg'
import UploadModal from '@/components/modals/upload-modal/UploadModal'
import { useSearchParams } from 'next/navigation'

const GalleryPage = () => {
    const searchParams = useSearchParams()

    return (
        <div className={styles.container}>
            <div className={styles.tools}>
                <Backward to={'/'} />
                <Link href={'?upload=active'} className={styles.uploadLink}>
                    <UploadIcon />
                    <span>Upload</span>
                </Link>
            </div>
            <div className={styles.content}>
                {searchParams.get('upload') === 'active' ? (
                    <UploadModal />
                ) : (
                    <GalleryScreen />
                )}
            </div>
        </div>
    )
}

export default GalleryPage
