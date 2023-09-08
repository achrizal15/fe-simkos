'use client'
import { MultiSelect, MultiSelectProps } from "primereact/multiselect"

const PrimeMultipleSelect=({...rest}:MultiSelectProps)=>{
    return <MultiSelect filter className={`p-inputtext-sm text-xs ${rest.className}`} {...rest}/>
}
export default PrimeMultipleSelect