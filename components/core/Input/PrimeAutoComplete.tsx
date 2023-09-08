'use client'
import { AutoComplete, AutoCompleteProps } from "primereact/autocomplete"
const PrimeAutoComplete =({...rest}:AutoCompleteProps)=>{
    return <AutoComplete className={`p-inputtext-sm ${rest.className}`} style={{width:'100%'}} pt={{
        input:{
          style:{width:'100% !important'}
        }
    }} {...rest}/>
}
export default PrimeAutoComplete