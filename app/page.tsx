import Image from 'next/image';
import * as React from 'react';
import styles from './page.module.scss';
import { ALBERT_SANS_500 } from 'constant/fonts';
// https://sailing.thimpress.com/demo-1/
export default function Page() {
    return (
        <>
            <section className={styles['banner-container']}>
                <div className={`${styles.banner} ${styles.desktop}`}>
                    <Image
                        src={'/templates/beta/banner.jpg'}
                        fill={true}
                        objectFit='cover'
                        alt='banner'
                        priority
                    />
                </div>
                <div className={`${styles.banner} ${styles.mobile}`}>
                    <Image
                        src={'/templates/beta/mobile.jpg'}
                        fill={true}
                        alt='banner'
                        priority
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.wrapper}>
                        <h1 className={ALBERT_SANS_500.className}>
                            Welcome <br className='md:hidden' /> To Renggani
                            Kost
                        </h1>
                        <p>
                            Easy and practical, you can book boarding houses
                            online through our platform without having to bother
                            coming in person
                        </p>
                        <a href='tel:+6285234104446' target='_blank'>
                            <button className={ALBERT_SANS_500.className}>
                                Book Now
                            </button>
                        </a>
                    </div>
                </div>
                <section className={styles.reservation}>
                    <input type='date' name='from' id='date-from' />
                    <input type='date' name='to' id='date-to' />
                    <select name='room occupants' id='room occupants'>
                        <option value='1'>1 Person</option>
                        <option value='2'>2 Person</option>
                    </select>
                    <select name='room-type' id='room-type'>
                        <option value='basic'>Basic</option>
                        <option value='vvip_1'>VVIP 1</option>
                        <option value='vvip_2'>VVIP 2</option>
                        <option value='vvip_3'>VVIP 3</option>
                    </select>
                </section>
            </section>
        </>
    );
}
