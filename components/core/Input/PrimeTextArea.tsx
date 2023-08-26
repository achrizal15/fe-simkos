'use client'

import { InputTextarea, InputTextareaProps } from "primereact/inputtextarea"

const PrimeTextArea = ({ ...rest }: InputTextareaProps) => {
    return <InputTextarea className={`p-inputtext-sm ${rest.className}`} {...rest} />
}
export default PrimeTextArea