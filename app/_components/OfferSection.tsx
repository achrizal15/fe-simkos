'use client'
import styles from '../page.module.scss';
import bgImage from '../../public/templates/beta/bg-offer.jpg';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles

interface OfferSectionProps {}
const OfferSection: React.FC<OfferSectionProps> = ({}) => {
    return (
        <div className={styles.offerSection}>
            <div className={styles.imageContainer}>
                <Image src={bgImage} fill alt='offer-image' />
            </div>
            <div className={styles.contentWrapper}>
                <div className='container pt-16'>
                    <Swiper spaceBetween={30} slidesPerView={1} navigation>
                        <SwiperSlide className='bg-red-500'>

                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default OfferSection;
