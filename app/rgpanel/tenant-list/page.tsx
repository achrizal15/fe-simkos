
import TenantInterface from '@/utils/Interfaces/TenantItemInterface';
import { axiosAuthServer } from '@/utils/fetching/axios';
import TableTenant from './_components/TableTenant';
import MetaInterface from '@/utils/Interfaces/paginator/MetaInterface';

const getTenantList = async () => {
    const res = await (await axiosAuthServer()).get(`tenants`)
    if (res.status != 200) {
        throw new Error('Failed to fetch data')
    }
    return res.data
}

const Page = async () => {
    const { data,meta }: { data: TenantInterface[],meta:MetaInterface } = await getTenantList()

    return (
        <div>
            <TableTenant data={data} meta={meta}/>
        </div>
    )
}
export default Page;