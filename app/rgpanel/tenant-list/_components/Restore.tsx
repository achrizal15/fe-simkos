import PrimeButton from "@/components/core/Button/PrimeButton"
import TenantInterface from "@/utils/Interfaces/TenantItemInterface"
import { axiosAuthClient } from "@/utils/fetching/axios";
import { useSession } from "next-auth/react";
import { confirmDialog } from "primereact/confirmdialog"
import { MessagesMessage } from "primereact/messages";

const Restore = ({ item, toastMessage = () => { } }: {
    item: TenantInterface,
    toastMessage: { (toast: MessagesMessage): void }
}) => {
    const session = useSession()
    const accept = async () => {
        try {
            await (await axiosAuthClient(session.data.user)).put(`tenants/${item.id}/restore`)
            toastMessage({ severity: 'success', life: 1500, summary: 'Restore', detail: 'Data has been restored' })
        } catch (error) {
            toastMessage({ severity: 'error', life: 1500, summary: 'Restore', detail: 'Failed please try again' })
        }
    }

    return (
        <>
            <PrimeButton tooltip="Restore" tooltipOptions={{ showDelay: 500, position: 'bottom' }} severity="danger" icon="pi pi-history" onClick={() => confirmDialog({
                message: 'Do you want to restore this record?',
                header: 'Restore Confirmation',
                icon: 'pi pi-info-circle',
                acceptClassName: 'p-button-danger',
                accept,
            })}>
            </PrimeButton>
        </>
    )
}
export default Restore