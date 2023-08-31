import PrimeButton from "@/components/core/Button/PrimeButton"
import TenantInterface from "@/utils/Interfaces/TenantItemInterface"
import Restore from "./Restore"
import Delete from "./Delete"
import objectToQueryString from "@/constant/objectToQueryString"
import Link from "next/link"
import QueryStringKeyInterface from "@/utils/Interfaces/paginator/QueryStringKeyInterface"

const ActionHandle = ({item, toast, queryKey}:{item:TenantInterface,toast:any,queryKey:QueryStringKeyInterface}) => {
    return (
        <div className="gap-2 flex justify-center items-center">
              <Link href={`/rgpanel/tenants/${item.id}/show`}>
            <PrimeButton tooltip="Show" tooltipOptions={{ showDelay: 500, position: 'bottom' }} severity="info" icon="pi pi-eye"></PrimeButton>
            </Link>
           <Link href={`/rgpanel/tenants/${item.id}/edit?${objectToQueryString(queryKey)}`}>
           <PrimeButton tooltip="Edit" tooltipOptions={{ showDelay: 500, position: 'bottom' }} severity="warning" icon="pi pi-pencil"></PrimeButton>
           </Link>
            {item.deleted_at != null
                ? <Restore item={item} queryKey={['tenants',objectToQueryString(queryKey)]} toastMessage={(message) => toast.current?.show(message)} />
                : <Delete queryKey={['tenants',objectToQueryString(queryKey)]} item={item} toastMessage={(message) => toast.current?.show(message)} />
            }
        </div>
    )
}
export default ActionHandle