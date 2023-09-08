import MetaInterface from '@/utils/Interfaces/paginator/MetaInterface';
import { getServerSession } from 'next-auth';
import UserJwtInterface from '@/utils/Interfaces/UserJwtInterface';
import nextAuthOptions from '@/constant/nextAuthOption';
import Content from '@/components/rgpanel/content/Content';
import RoomFeatureInteraface from '@/utils/Interfaces/RoomFeatureInteraface';
import TableFeature from './_components/TableFeature';
import getFeatures from '../_components/getFeatures';



const Page = async () => {
    const initialData: { data: RoomFeatureInteraface[], meta: MetaInterface, user: UserJwtInterface } = await getFeatures()
    return (
        <Content title='Fitur Kamar' buttonBackUrl='/rgpanel/room_management' subTitle='Manajemen Kamar / Fitur Kamar'>
            <TableFeature initialData={initialData}/>
        </Content>
    )
}
export default Page;