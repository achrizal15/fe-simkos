'use client'
import { ALBERT_SANS_500 } from "@/constant/fonts"
import { Card, CardProps } from "primereact/card"
interface PrimeCardInterface extends CardProps{
    children:React.ReactNode
}
const PrimeCard=({children,...rest}:PrimeCardInterface)=>{
    return <Card pt={{
        title:{
            className: `${ALBERT_SANS_500.className} text-lg`,
            style:{fontWeight:500}
        }
    }} {...rest}>{children}</Card>
}
export default PrimeCard