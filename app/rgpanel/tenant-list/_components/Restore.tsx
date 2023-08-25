import PrimeButton from "@/components/core/Button/PrimeButton"
import TenantInterface from "@/utils/Interfaces/TenantItemInterface"
import MetaInterface from "@/utils/Interfaces/paginator/MetaInterface";
import { axiosAuthClient } from "@/utils/fetching/axios";
import { useSession } from "next-auth/react";
import { confirmDialog } from "primereact/confirmdialog"
import { MessagesMessage } from "primereact/messages";
import { useMutation, useQueryClient ,QueryKey} from "react-query";

const Restore = ({ item, toastMessage = () => { } ,queryKey}: {
    item: TenantInterface,
    toastMessage: { (toast: MessagesMessage): void },
    queryKey:QueryKey
}) => {
    const session = useSession()
    const queryClient = useQueryClient()

    const handling = async () => {
        const { data: tenants, meta }: { data: TenantInterface[], meta: MetaInterface } = queryClient.getQueryData(queryKey)
        try {
            await (await axiosAuthClient(session.data.user)).put(`tenants/${item.id}/restore`)
            queryClient.setQueryData(queryKey, {
                data: tenants.map((tenant) => {
                    if (tenant.id == item.id) {
                        tenant.deleted_at = null
                    }
                    return tenant
                }),
                meta
            })
            toastMessage({ severity: 'success', life: 1500, summary: 'Restore', detail: 'Data has been restored' })
        } catch (error) {
            toastMessage({ severity: 'error', life: 1500, summary: 'Restore', detail: 'Failed please try again' })
        }
    }
    const { mutate } = useMutation(handling)
    return (
        <>
            <PrimeButton tooltip="Restore" tooltipOptions={{ showDelay: 500, position: 'bottom' }} severity="danger" icon="pi pi-history" onClick={() => confirmDialog({
                message: 'Do you want to restore this record?',
                header: 'Restore Confirmation',
                icon: 'pi pi-info-circle',
                acceptClassName: 'p-button-danger',
                accept: () => mutate(),
            })}>
            </PrimeButton>
        </>
    )
}
export default Restore