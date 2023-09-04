import PrimeButton from "@/components/core/Button/PrimeButton"
import objectToQueryString from "@/constant/objectToQueryString";
import RoomFeatureInteraface from "@/utils/Interfaces/RoomFeatureInteraface";
import QueryStringKeyInterface from "@/utils/Interfaces/paginator/QueryStringKeyInterface";
import { axiosAuthClient } from "@/utils/fetching/axios";
import { useSession } from "next-auth/react";
import { confirmDialog } from "primereact/confirmdialog"
import { MessagesMessage } from "primereact/messages";
import { useMutation, useQueryClient, QueryKey } from "react-query";

const Restore = ({ item, toastMessage = () => { }, queryKey }: {
    item: RoomFeatureInteraface,
    toastMessage: { (toast: MessagesMessage): void },
    queryKey: QueryStringKeyInterface
}) => {
    const session = useSession()
    const queryClient = useQueryClient()

    const handling = async () => {
        try {
            await (await axiosAuthClient(session.data.user)).put(`features/${item.id}/restore`)
            queryClient.setQueryData(['features', objectToQueryString(queryKey)],
                (oldData: { data: RoomFeatureInteraface[] }) => (
                    {
                        ...oldData,
                        data: oldData.data.map((feature) => {
                            if (feature.id == item.id) {
                                feature.deleted_at = null
                            }
                            return feature
                        })
                    }
                )
            )
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