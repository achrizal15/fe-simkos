
import MetaInterface from '@/utils/Interfaces/paginator/MetaInterface';
import UserJwtInterface from '@/utils/Interfaces/UserJwtInterface';
import Content from '@/components/rgpanel/content/Content';
import { fetchHeader } from '@/utils/fetching/fetch';
import RoomInterface from '@/utils/Interfaces/RoomInterface';
import TableRoom from './_components/Table';

const getData = async () => {
    const { headers, user } = await fetchHeader()
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`, {
        headers,
        cache: "no-cache"
    })
    if (res.status != 200) {
        throw new Error(res.statusText)
    }
    return {  user, ...await res.json() }
}

const Page = async () => {
    const initialData: { data: RoomInterface[], meta: MetaInterface, user: UserJwtInterface } = await getData()

    return (
        <Content title='Daftar Kamar' subTitle='Manajemen Kamar / Daftar Kamar'>
          <TableRoom initialData={initialData}/>
        </Content>
    )
}
export default Page;