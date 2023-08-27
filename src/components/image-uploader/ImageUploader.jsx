'use client'
import { useRef, useState, useCallback } from 'react'
import ImageUploaderIcon from '@/assets/svgs/icons/imageUploader.svg'
import Image from 'next/image'
import styles from './image-uploader.module.css'
import { useDropzone } from 'react-dropzone'

const ImageUploader = ({ name, className, placeholder, image, setImage }) => {
    const imageInputRef = useRef()
    const [preview, setPreview] = useState(null)

    const onDrop = useCallback(
        (acceptedFiles) => {
            const file = new FileReader()

            file.onload = () => {
                setPreview(file.result)
                setImage(acceptedFiles[0])
            }
            file.readAsDataURL(acceptedFiles[0])
        },
        [setImage]
    )
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    })

    return (
        <div className={styles.uploaderBox}>
            <div
                className={`${styles.fileUploader} ${
                    className ? className : ''
                }`}
                {...getRootProps()}
            >
                <input
                    {...getInputProps}
                    type='file'
                    accept='image/*'
                    id='file-uploader'
                    name={name}
                    hidden
                    ref={imageInputRef}
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
                        {isDragActive ? (
                            <span>Drop the files here ...</span>
                        ) : (
                            <span>
                                <strong>Drag here </strong>your file or{' '}
                                <strong className={styles.clickable}>
                                    Click here{' '}
                                </strong>{' '}
                                to upload
                            </span>
                        )}

                        <ImageUploaderIcon
                            fill='var(--uploader-icon)'
                            className={styles.uploaderIcon}
                        />
                    </>
                )}
            </div>
        </div>
    )
}

export default ImageUploader
