import { useEffect, useRef, useState } from 'react'
import ImageUploaderIcon from '@/assets/svgs/icons/imageUploader.svg'
import Image from 'next/image'
import styles from './image-uploader.module.css'

const ImageUploader = ({ name, className, placeholder, image, setImage }) => {
    const imageInputRef = useRef()
    const [preview, setPreview] = useState(null)

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            setPreview(URL.createObjectURL(file))
            setImage(file)
        }
    }

    const handleFileDestroy = () => {
        setImage(null)
        imageInputRef.current.value = ''
    }

    const handleUploaderClick = () => {
        if (!image && imageInputRef.current) {
            imageInputRef.current.click()
        }
    }

    useEffect(() => {
        imageInputRef.current.value = ''
    }, [image])

    return (
        <div className={styles.uploaderBox}>
            <div
                className={`${styles.fileUploader} ${
                    className ? className : ''
                }`}
            >
                <input
                    type='file'
                    accept='image/*'
                    id='file-uploader'
                    name={name}
                    hidden
                    ref={imageInputRef}
                    onChange={handleFileChange}
                />
                {image ? (
                    <Image
                        src={preview}
                        alt='Upload image'
                        width={500}
                        height={500}
                        className={styles.uploadedImage}
                    />
                ) : (
                    <>
                        <span>
                            <strong>Drag here </strong>your file or{' '}
                            <strong
                                className={styles.clickable}
                                onClick={handleUploaderClick}
                            >
                                Click here{' '}
                            </strong>{' '}
                            to upload
                        </span>
                        <ImageUploaderIcon
                            fill='#dadada'
                            className={styles.uploaderIcon}
                        />
                    </>
                )}
            </div>
        </div>
    )
}

export default ImageUploader
