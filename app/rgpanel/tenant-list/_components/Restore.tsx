import PrimeButtom from "@/components/core/Button/PrimeButton"
import TenantInterface from "@/utils/Interfaces/TenantItemInterface"
import { confirmDialog } from "primereact/confirmdialog"
import { MessagesMessage } from "primereact/messages";
interface RestoreCallback {
    (toast: MessagesMessage): void;
}
const Restore = ({ item, toastMessage = () => { } }: { item: TenantInterface, toastMessage: RestoreCallback }) => {
    const accept = () => {
        toastMessage({ severity: 'success', life: 1500, summary: 'Restore', detail: 'Data has been restored' })
    }

    return (
        <>
            <PrimeButtom tooltip="Restore" tooltipOptions={{ showDelay: 500, position: 'bottom' }}      severity="danger" icon="pi pi-history" onClick={() => confirmDialog({
                message: 'Do you want to delete this record?',
                header: 'Delete Confirmation',
                icon: 'pi pi-info-circle',
                acceptClassName: 'p-button-danger',
                accept,
            })}>
            </PrimeButtom>
        </>
    )
}
export default Restore