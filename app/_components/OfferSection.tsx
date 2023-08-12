'use client';
import styles from '../page.module.scss';
import bgImage from '../../public/templates/beta/bg-offer.jpg';
import Image from 'next/image';
import OfferingData from './OfferingData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import { H3 } from '@/components/core/Headings/Headings';
import Button from '@/components/core/Button';
import { ALBERT_SANS_500 } from 'constant/fonts';

interface OfferSectionProps {}
const OfferSection: React.FC<OfferSectionProps> = ({}) => {
    return (
        <div className={styles.offerSection}>
            <div
                className={styles.imageContainer}
                style={{ backgroundImage: `url(/templates/beta/bg-offer.jpg)` }}
            >
                {/* <Image src={bgImage} fill alt='offer-image' /> */}
            </div>
            <div className={styles.contentWrapper}>
                <div className='container pt-16'>
                    <Swiper spaceBetween={0} slidesPerView={1} navigation>
                        {OfferingData.map((offering, index) => (
                            <SwiperSlide key={index}>
                                <div className='relative w-full h-[200px] lg:h-[500px]'>
                                    <Image
                                        alt={offering.title}
                                        src={offering.image}
                                        fill
                                    />
                                    <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/50 flex flex-col items-end justify-center gap-4 p-8'>
                                        <div className='text-right text-white'>
                                            <H3 className='uppercase'>
                                                {offering.title}
                                            </H3>
                                            <p className='text-sm md:text-lg'>
                                                {offering.description}
                                            </p>
                                        </div>
                                        <button className={`${ALBERT_SANS_500.className} text-sm md:text-xl px-5 py-2 bg-white text-black transition duration-300 hover:bg-black hover:text-white font-bold`}>
                                            {offering.label_action}
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default OfferSection;
