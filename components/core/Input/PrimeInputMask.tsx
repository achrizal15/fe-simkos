'use client'
import { InputMask, InputMaskProps } from "primereact/inputmask";
const PrimeInputMask=({...rest}:InputMaskProps)=>{
    return <InputMask className={`p-inputtext-sm ${rest.className}`}  mask="+9999999999999" placeholder="+6282234999999" {...rest}></InputMask>
}
export default PrimeInputMask