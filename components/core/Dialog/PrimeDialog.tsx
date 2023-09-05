'use client'
import { Dialog, DialogProps } from "primereact/dialog";

export default function PrimeDialog({ children, ...rest }: DialogProps) {
    return (
        <Dialog header="Header"  style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}  {...rest}>
            {children}
        </Dialog>
    )
}