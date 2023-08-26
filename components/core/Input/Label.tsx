'use client'
import { Tooltip } from "primereact/tooltip"

interface LabelInterface extends React.LabelHTMLAttributes<HTMLLabelElement>{
    htmlFor:string,
    children?:React.ReactNode,
    required?:boolean|false
}
const Label=({children,htmlFor,required,...rest}:LabelInterface)=>{
    return (
        <label htmlFor={htmlFor} {...rest}>
            {children}
            <Tooltip target=".required-symbol"></Tooltip>
            {
            required&&
            <small data-pr-tooltip="Wajib diisi" className="text-red-700 required-symbol">*</small>
            }
        </label>
    )
}
export default Label