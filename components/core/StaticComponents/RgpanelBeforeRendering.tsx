import { AxiosError } from "axios"
import LoadingTable from "./LoadingTable"
import { notFound } from "next/navigation"

const RgpanelBeforeRendering=({loading=false,error=null}:{
    loading:boolean,error?:any|AxiosError
})=>{
    if(loading) return <LoadingTable/>
    if(error){
        const {response}:{response:AxiosError}=error
        if(response.status==404)notFound()
    }
}
export default RgpanelBeforeRendering