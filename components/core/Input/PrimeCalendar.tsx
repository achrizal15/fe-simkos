'use client'

import { Calendar,CalendarProps } from "primereact/calendar"

const PrimeCalendar=({...rest}:CalendarProps)=>{
    return <Calendar className={`p-inputtext-sm ${rest.className}`} dateFormat="dd/mm/yy" {...rest}/>
}
export default PrimeCalendar