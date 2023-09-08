import PrimeButton from "@/components/core/Button/PrimeButton"
import objectToQueryString from "@/constant/objectToQueryString"
import RoomFeatureInteraface from "@/utils/Interfaces/RoomFeatureInteraface"
import QueryStringKeyInterface from "@/utils/Interfaces/paginator/QueryStringKeyInterface"
import Restore from "./Restore"
import Delete from "./Delete"
import RoomInterface from "@/utils/Interfaces/RoomInterface"
import Link from "next/link"

const ActionHandle = ({ item, toast, queryKey }: { item: RoomInterface, toast: any, queryKey: QueryStringKeyInterface }) => {
    return (
        <div className="flex items-center gap-2">
            {
                item.deleted_at == null
                && <Link href={`/rgpanel/room_management/${item.id}/edit?${objectToQueryString(queryKey)}`}><PrimeButton icon="pi pi-pencil" severity='warning' tooltip="Edit" /></Link>
            }
            {item.deleted_at != null
                    ? <Restore item={item} toastMessage={(message) => toast.current?.show(message)} queryKey={queryKey} />
                    : <Delete item={item} toastMessage={(message) => toast.current?.show(message)} queryKey={queryKey} />
                }
        </div>
    )
}
export default ActionHandle