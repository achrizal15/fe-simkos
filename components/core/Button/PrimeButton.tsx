import { Button, ButtonProps } from "primereact/button";

interface PrimeButtomInterface extends ButtonProps{
    children?:React.ReactNode
}

export default function PrimeButtom({children,...rest}:PrimeButtomInterface){
    return <Button raised rounded outlined {...rest}>{children}</Button>
}