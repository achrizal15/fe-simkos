'use client';
import Image from 'next/image';
import * as React from 'react';
import styles from './page.module.scss';
import { ALBERT_SANS_500 } from 'constant/fonts';
import bannerDesktop from 'public/templates/beta/banner.jpg';
import bannerMobile from 'public/templates/beta/mobile.jpg';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import moment from 'moment';
import { Button } from 'primereact/button';

// https://sailing.thimpress.com/demo-1/
interface RoomOccupants {
    name: string;
    id: string;
}
interface RoomType {
    name: string;
    id: string;
}
export default function Page() {
    const [dates, setDates] = React.useState<string | Date | Date[] | null>([
        moment().toDate(),
        moment().toDate(),
    ]);
    const [roomOccupants, setroomOccupants] =
        React.useState<RoomOccupants | null>(null);
    const [roomType, setroomType] = React.useState<RoomType | null>(null);
    const occupants = [
        { name: '1 Person', id: 1 },
        { name: '2 Person', id: 2 },
    ];
    const roomTypes = [
        { name: 'Basic', id: 1 },
        { name: 'VIP', id: 2 },
        { name: 'VVIP I', id: 2 },
        { name: 'VVIP II', id: 2 },
        { name: 'VVIP III', id: 2 },
    ];
    return (
        <>
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
                    <Calendar
                        value={dates}
                        onChange={(e: CalendarChangeEvent) => setDates(e.value)}
                        selectionMode='range'
                        readOnlyInput
                        minDate={moment().toDate()}
                        placeholder='Range date'
                        inputClassName={styles.calendarInput}
                        className={styles.calendar}
                        dateFormat='dd/mm/yy'
                        showIcon
                    />
                    <Dropdown
                        value={roomOccupants}
                        onChange={(e) => setroomOccupants(e.value)}
                        options={occupants}
                        optionLabel='name'
                        placeholder='Room Occupants'
                        className={styles.select}
                    />
                    <Dropdown
                        value={roomType}
                        onChange={(e) => setroomType(e.value)}
                        options={roomTypes}
                        optionLabel='name'
                        placeholder='Room Type'
                        className={styles.select}
                    />
                    <Button className={styles.buttonSearch}> Find </Button>
                </section>
            </section>
        </>
    );
}
