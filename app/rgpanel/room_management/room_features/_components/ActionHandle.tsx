import PrimeButton from "@/components/core/Button/PrimeButton"
import objectToQueryString from "@/constant/objectToQueryString"
import RoomFeatureInteraface from "@/utils/Interfaces/RoomFeatureInteraface"
import QueryStringKeyInterface from "@/utils/Interfaces/paginator/QueryStringKeyInterface"
import Restore from "./Restore"
import Delete from "./Delete"
import EditFeature from "./EditFeature"

const ActionHandle = ({ item, toast, queryKey }: { item: RoomFeatureInteraface, toast: any, queryKey: QueryStringKeyInterface }) => {
    return (
        <>
            {
                item.deleted_at == null
                && <EditFeature item={item} toast={toast} queryKey={queryKey}/>
            }
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