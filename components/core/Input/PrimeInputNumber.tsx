import { InputNumber, InputNumberProps } from "primereact/inputnumber"

const PrimeInputNumber=({...rest}:InputNumberProps)=>{
    return <InputNumber  className={`p-inputtext-sm ${rest.className}`}/>
}
export default PrimeInputNumber