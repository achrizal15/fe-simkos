'use client'
import { InputMask, InputMaskProps } from "primereact/inputmask";
const PrimeInputMask=({...rest}:InputMaskProps)=>{
    return <InputMask className={`p-inputtext-sm ${rest.className}`}  mask="+(99) 99-999-999-999" placeholder="+(62) 82-234-999-999" {...rest}></InputMask>
}
export default PrimeInputMask