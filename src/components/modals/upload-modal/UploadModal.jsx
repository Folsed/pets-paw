'use client'
import { useRouter } from 'next/navigation'
import styles from './upload-modal.module.css'
import CrossIcon from '@/assets/svgs/icons/cross.svg'
import ImageUploader from '@/components/image-uploader/ImageUploader'
import { useState } from 'react'

const UploadModal = () => {
    const router = useRouter()
    const [image, setImage] = useState(null)
    console.log(image)

    return (
        <div className={styles.container}>
            <div className={styles.modalWindow}>
                <div
                    className={styles.exitButton}
                    onClick={() => router.back()}
                >
                    <CrossIcon />
                </div>
                <div className={styles.content}>
                    <div className={styles.heading}>
                        <h3>Upload a .jpg or .png Cat Image</h3>
                        <span>
                            Any uploads must comply with the upload guidelines
                            or face deletion.
                        </span>
                    </div>

                    <form className={styles.uploadContainer}>
                        <ImageUploader image={image} setImage={setImage} />
                        <span className={styles.filename}>
                            {image?.name ? `Image File Name: ${image.name}` : 'No file selected'}
                        </span>
                        
                    </form>
                </div>
            </div>
            <div className={styles.blackout}></div>
        </div>
    )
}

export default UploadModal
