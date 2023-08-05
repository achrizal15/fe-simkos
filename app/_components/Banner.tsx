import Image from 'next/image';
import * as React from 'react';
import styles from '../page.module.scss';
import { ALBERT_SANS_500 } from 'constant/fonts';
import bannerDesktop from 'public/templates/beta/banner.jpg';
import bannerMobile from 'public/templates/beta/mobile.jpg';
import { H1 } from '@/components/core/Headings/Headings';
import BannerForm from './BannerForm';

const Banner = () => {
    return (
        <section className={styles['banner-container']}>
            <div className={`${styles.banner} ${styles.desktop}`}>
                <Image
                    src={bannerDesktop}
                    fill={true}
                    placeholder='blur'
                    alt='banner'
                    priority
                    sizes='(min-width: 768px) 100vw'
                />
            </div>
            <div className={`${styles.banner} ${styles.mobile}`}>
                <Image
                    src={bannerMobile}
                    fill={true}
                    placeholder='blur'
                    alt='banner'
                    priority
                    sizes='(max-width: 768px) 100vw'
                />
            </div>
            <div className={styles.content}>
                <div className={styles.wrapper}>
                    <H1>
                        Welcome <br className='md:hidden' /> To Renggani Kost
                    </H1>
                    <p>
                        Easy and practical, you can book boarding houses online
                        through our platform without having to bother coming in
                        person
                    </p>
                    <a href='https://wa.me/6285234104446?text=' target='_blank'>
                        <button className={ALBERT_SANS_500.className}>
                            Book Now
                        </button>
                    </a>
                </div>
            </div>
            <BannerForm />
        </section>
    );
};

export default Banner;
