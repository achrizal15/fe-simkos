import PrimeButton from "@/components/core/Button/PrimeButton"
import TenantInterface from "@/utils/Interfaces/TenantItemInterface"
import Restore from "./Restore"
import Delete from "./Delete"
import objectToQueryString from "@/constant/objectToQueryString"
import QueryStringKeyInterface from "@/utils/Interfaces/paginator/QueryStringKeyInterface"

const ActionHandle = ({item, toast, queryKey}:{item:TenantInterface,toast:any,queryKey:QueryStringKeyInterface}) => {
    return (
        <div className="gap-2 flex justify-center items-center">
            <PrimeButton tooltip="Show" tooltipOptions={{ showDelay: 500, position: 'bottom' }} severity="info" icon="pi pi-eye"></PrimeButton>
            <PrimeButton tooltip="Edit" tooltipOptions={{ showDelay: 500, position: 'bottom' }} severity="warning" icon="pi pi-pencil"></PrimeButton>
            {item.deleted_at != null
                ? <Restore item={item} queryKey={objectToQueryString(queryKey)} toastMessage={(message) => toast.current?.show(message)} />
                : <Delete queryKey={objectToQueryString(queryKey)} item={item} toastMessage={(message) => toast.current?.show(message)} />
            }
        </div>
    )
}
export default ActionHandle