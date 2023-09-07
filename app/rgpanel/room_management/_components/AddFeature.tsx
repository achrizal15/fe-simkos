'use client'
import PrimeButton from "@/components/core/Button/PrimeButton"
import QueryStringKeyInterface from "@/utils/Interfaces/paginator/QueryStringKeyInterface"
import { useState } from "react"
import FormFeature from "./Form"
import UserJwtInterface from "@/utils/Interfaces/UserJwtInterface"

const AddFeature = ({ queryKey, user ,toast}: { queryKey: QueryStringKeyInterface, user: UserJwtInterface, toast: any, }) => {
    const [visible, setVisible] = useState<boolean>(false)

    return (
        <>
            <PrimeButton onClick={() => setVisible(true)} icon="pi pi-plus" tooltip="Tambah feature" tooltipOptions={{ position: 'bottom' }} />
            <FormFeature user={user} queryKey={queryKey} visibility={{ visible, setVisible }} toastMessage={(message) => toast.current?.show(message)} />
        </>
    )
}
export default AddFeature