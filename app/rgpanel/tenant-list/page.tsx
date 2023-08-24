import TenantInterface from '@/utils/Interfaces/TenantItemInterface';
import TableTenant from './_components/TableTenant';
import MetaInterface from '@/utils/Interfaces/paginator/MetaInterface';
import { getServerSession } from 'next-auth';
import UserJwtInterface from '@/utils/Interfaces/UserJwtInterface';
import nextAuthOptions from '@/constant/nextAuthOption';

const getTenantList = async () => {
    const { user }: { user: UserJwtInterface } = await getServerSession(nextAuthOptions)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tenants`, {
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${user.token}`
        },
        cache: 'no-store'
    })
    if (res.status != 200) {
        throw new Error('Failed to fetch data')
    }
    return await res.json()
}

const Page = async () => {
    const { data, meta }: { data: TenantInterface[], meta: MetaInterface } = await getTenantList()

    return (
        <div>
            <TableTenant initialData={{data,meta}} />
        </div>
    )
}
export default Page;