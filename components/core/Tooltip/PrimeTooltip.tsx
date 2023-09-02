'use client'
import { Tooltip, TooltipProps } from "primereact/tooltip"

const PrimeTooltip = ({children,...rest }: TooltipProps) => {
    return <Tooltip className={`font-semibold ${rest.className}`} pt={{
        arrow: {
            style: {
                borderRightColor: 'white'
            }
        },
        text:{
            style:{
                backgroundColor:'white',
                color:'gray'
            }
        }
    }} target=".custom-target-icon"  {...rest} >{children}</Tooltip>
}
export default PrimeTooltip