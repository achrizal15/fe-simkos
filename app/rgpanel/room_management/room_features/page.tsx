import MetaInterface from '@/utils/Interfaces/paginator/MetaInterface';
import { getServerSession } from 'next-auth';
import UserJwtInterface from '@/utils/Interfaces/UserJwtInterface';
import nextAuthOptions from '@/constant/nextAuthOption';
import Content from '@/components/rgpanel/content/Content';
import RoomFeatureInteraface from '@/utils/Interfaces/RoomFeatureInteraface';
import TableFeature from './_components/TableFeature';

const getData = async () => {
    const { user }: { user: UserJwtInterface } = await getServerSession(nextAuthOptions)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/features`, {
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${user.token}`
        },
        cache: 'no-store' 
    })
    if (res.status != 200) {
        throw new Error(res.statusText)
    }
    return { user, ...await res.json() }
}

const Page = async () => {
    const initialData: { data: RoomFeatureInteraface[], meta: MetaInterface, user: UserJwtInterface } = await getData()
    return (
        <Content title='Fitur Kamar' buttonBackUrl='/rgpanel/room_management' subTitle='Manajemen Kamar / Fitur Kamar'>
            <TableFeature initialData={initialData}/>
        </Content>
    )
}
export default Page;