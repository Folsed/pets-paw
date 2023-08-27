import Image from 'next/image'
import styles from './cats-carousel.module.css'
import './cats-carousel.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CatsCarousel = ({ images }) => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dotsClass: 'dots',
        appendDots: (dots) => (
            <div>
                <ul style={{ margin: '0px' }} className='dots-box'>
                    {' '}
                    {dots}{' '}
                </ul>
            </div>
        ),
    }

    return (
        <div className={styles.catsCarousel}>
            <Slider {...settings}>
                {images.map((item) => (
                    <div className={styles.imageContainer} key={item.id}>
                        <Image
                            src={item.image}
                            alt=''
                            width={item.width}
                            height={item.height}
                            priority
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CatsCarousel
