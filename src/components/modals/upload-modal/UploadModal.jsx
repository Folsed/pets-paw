'use client'
import { useRouter } from 'next/navigation'
import styles from './upload-modal.module.css'
import CrossIcon from '@/assets/svgs/icons/cross.svg'
import ImageUploader from '@/components/image-uploader/ImageUploader'
import { useEffect, useState } from 'react'
import useCatUpload from '@/hooks/queries/useCatUpload'
import UploadLoader from '@/UI/loaders/UploadLoader'
import UploadSuccessIcon from '@/assets/svgs/icons/uploadSuccess.svg'
import UploadFailedIcon from '@/assets/svgs/icons/uploadFailed.svg'

const UploadModal = () => {
    const router = useRouter()
    const [image, setImage] = useState(null)
    const { catUpload } = useCatUpload()

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('file', image)

        catUpload.mutate(formData)
    }

    useEffect(() => {
        if (catUpload.status === 'success' || catUpload.status === 'error') {
            setImage(null)
        }
    }, [catUpload.status])

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

                    <form
                        className={styles.uploadContainer}
                        onSubmit={handleSubmit}
                    >
                        <ImageUploader image={image} setImage={setImage} />
                        <span className={styles.filename}>
                            {image?.name
                                ? `Image File Name: ${image.name}`
                                : 'No file selected'}
                        </span>
                        {image ? (
                            <button
                                type='submit'
                                className={`${styles.submitButton} ${
                                    catUpload.isLoading
                                        ? styles.loadingButton
                                        : ''
                                }`}
                            >
                                {catUpload.isLoading ? (
                                    <>
                                        <UploadLoader size={18} />
                                        Uploading
                                    </>
                                ) : (
                                    'upload photo'
                                )}
                            </button>
                        ) : (
                            ''
                        )}
                        {catUpload.status !== 'idle' &&
                        catUpload.status !== 'loading' ? (
                            <div className={styles.statusBox}>
                                {catUpload.isSuccess ? (
                                    <>
                                        <UploadSuccessIcon />
                                        <span>
                                            Thanks for the Upload - Cat found!
                                        </span>
                                    </>
                                ) : catUpload.isError ? (
                                    <>
                                        <UploadFailedIcon />
                                        <span>
                                            No Cat found - try a different one
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <UploadFailedIcon />
                                        <span>
                                            Unknown error - check the image
                                            format
                                        </span>
                                    </>
                                )}
                            </div>
                        ) : (
                            ''
                        )}
                    </form>
                </div>
            </div>
            <div className={styles.blackout}></div>
        </div>
    )
}

export default UploadModal
