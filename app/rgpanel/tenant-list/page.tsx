import TenantInterface from '@/utils/Interfaces/TenantItemInterface';
import { axiosAuthServer } from '@/utils/fetching/axios';
import Delete from './_components/Delete';

const getTenantList = async () => {
    const res = await (await axiosAuthServer()).get(`tenants`)
    if (res.status != 200) {
        throw new Error('Failed to fetch data')
    }
    return res.data
}

const Page = async () => {
    const { data }: { data: TenantInterface[] } = await getTenantList()
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {data.map((tenant: TenantInterface, index: number) => (
                        <tr key={index}>
                            <td>
                                {tenant.name}
                            </td>
                            <td>
                               <Delete id={tenant.id}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Page;