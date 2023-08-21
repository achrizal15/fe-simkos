'use client'
import PrimeButton from "@/components/core/Button/PrimeButton"
import TenantInterface from "@/utils/Interfaces/TenantItemInterface"
import { axiosAuthClient } from "@/utils/fetching/axios"
import { useSession } from "next-auth/react"
import { confirmDialog } from "primereact/confirmdialog"
import { MessagesMessage } from "primereact/messages"

const Delete = ({ item, toastMessage = () => { } }: {
    item: TenantInterface,
    toastMessage: { (toast: MessagesMessage): void }
}) => {
    const session = useSession()
    const accept = async () => {
        try {
            await (await axiosAuthClient(session.data.user)).delete(`tenants/${item.id}`)
            toastMessage({ severity: 'success', life: 1500, summary: 'Delete', detail: 'Data has been deleted' })
        } catch (error) {
            toastMessage({ severity: 'error', life: 1500, summary: 'Delete', detail: 'Failed please try again' })
        }
    }
    return (
        <PrimeButton tooltip="Delete" tooltipOptions={{ showDelay: 500, position: 'bottom' }} severity="danger" icon="pi pi-trash"
            onClick={() => confirmDialog({
                message: 'Do you want to delete this record?',
                header: 'Delete Confirmation',
                icon: 'pi pi-info-circle',
                acceptClassName: 'p-button-danger',
                accept,
            })}
        ></PrimeButton>
    )
}
export default Delete