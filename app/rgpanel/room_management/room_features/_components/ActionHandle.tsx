import PrimeButton from "@/components/core/Button/PrimeButton"
import objectToQueryString from "@/constant/objectToQueryString"
import RoomFeatureInteraface from "@/utils/Interfaces/RoomFeatureInteraface"
import QueryStringKeyInterface from "@/utils/Interfaces/paginator/QueryStringKeyInterface"
import Restore from "./Restore"
import Delete from "./Delete"

const ActionHandle = ({ item, toast, queryKey }: { item: RoomFeatureInteraface, toast: any, queryKey: QueryStringKeyInterface }) => {
    return (
        <>
            <div className='absolute -top-2 right-6 bg-white rounded-full'>
                <PrimeButton icon="pi pi-pencil" severity='warning' />
            </div>
            <div className='absolute -top-2 -right-2 bg-white rounded-full'>
                {item.deleted_at != null
                    ? <Restore item={item} toastMessage={(message) => toast.current?.show(message)} queryKey={queryKey} />
                    : <Delete item={item} toastMessage={(message) => toast.current?.show(message)} queryKey={queryKey} />
                }
            </div>

        </>
    )
}
export default ActionHandle