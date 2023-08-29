'use client'
import { Button, ButtonProps } from "primereact/button";

interface PrimeButtonInterface extends ButtonProps{
    children?:React.ReactNode
}

export default function PrimeButton({children,...rest}:PrimeButtonInterface){
    return <Button raised rounded outlined size="small" pt={
        {
            icon:{
                className:'text-xs',
                style:{fontSize:'10px'}
            }
        }
    } {...rest}>{children}</Button>
}