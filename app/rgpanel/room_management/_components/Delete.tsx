import PrimeButton from "@/components/core/Button/PrimeButton"
import objectToQueryString from "@/constant/objectToQueryString"
import RoomInterface from "@/utils/Interfaces/RoomInterface"
import QueryStringKeyInterface from "@/utils/Interfaces/paginator/QueryStringKeyInterface"
import { axiosAuthClient } from "@/utils/fetching/axios"
import moment from "moment"
import { useSession } from "next-auth/react"
import { confirmDialog } from "primereact/confirmdialog"
import { MessagesMessage } from "primereact/messages"
import { useQueryClient } from "react-query"

const Delete = ({ item, toastMessage = () => { }, queryKey }: {
    item: RoomInterface,
    toastMessage: { (toast: MessagesMessage): void },
    queryKey: QueryStringKeyInterface
}) => {
    const session = useSession()
    const queryClient = useQueryClient()

    const accept = async () => {
        try {
            await (await axiosAuthClient(session.data.user)).delete(`rooms/${item.id}`)
            queryClient.setQueryData(['rooms', objectToQueryString(queryKey)],
                (oldData: { data: RoomInterface[] }) => (
                    {
                        ...oldData,
                        data: oldData.data.map((room) => {
                            if (room.id == item.id) {
                                room.deleted_at = moment().format('Y-MM-D');
                                if (!queryKey.withTrash) return null
                            }
                            return room
                        }).filter(Boolean)
                    }
                )
            )

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