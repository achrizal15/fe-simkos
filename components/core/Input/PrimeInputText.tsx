'use client'

import { InputText, InputTextProps } from "primereact/inputtext"

interface PrimeInputTextInterface extends InputTextProps{
    
}
const PrimeInputText =({...rest}:PrimeInputTextInterface)=>{
    return <InputText className={`p-inputtext-sm ${rest.className}`} {...rest}/>
}
export default PrimeInputText