'use client';
import React from 'react';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import moment from 'moment';
import { Button } from 'primereact/button';
import styles from '../page.module.scss';
interface RoomOccupants {
    name: string;
    id: string;
}
interface RoomType {
    name: string;
    id: string;
}
function BannerForm() {
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
    );
}

export default BannerForm;
