import PrimeButton from "@/components/core/Button/PrimeButton"
import TenantInterface from "@/utils/Interfaces/TenantItemInterface"
import MetaInterface from "@/utils/Interfaces/paginator/MetaInterface"
import { axiosAuthClient } from "@/utils/fetching/axios"
import moment from "moment"
import { useSession } from "next-auth/react"
import { confirmDialog } from "primereact/confirmdialog"
import { MessagesMessage } from "primereact/messages"
import { QueryKey, useQueryClient } from "react-query"

const Delete = ({ item, toastMessage = () => { },queryKey }: {
    item: TenantInterface,
    toastMessage: { (toast: MessagesMessage): void },
    queryKey:QueryKey
}) => {
    const session = useSession()
    const queryClient = useQueryClient()

    const accept = async () => {
        const { data: tenants, meta }: { data: TenantInterface[], meta: MetaInterface } = queryClient.getQueryData(queryKey)
        try {
            await (await axiosAuthClient(session.data.user)).delete(`tenants/${item.id}`)
            queryClient.setQueryData(queryKey, {
                data: tenants.map((tenant) => {
                    if (tenant.id == item.id) {
                        tenant.deleted_at = moment().format('Y-MM-D');
                    }
                    return tenant
                }),
                meta
            })
            
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