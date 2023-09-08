import Content from "@/components/rgpanel/content/Content"
import FormRoom from "../_components/Form"
import UserJwtInterface from "@/utils/Interfaces/UserJwtInterface"
import RoomFeatureInteraface from "@/utils/Interfaces/RoomFeatureInteraface"
import getFeatures from "../_components/getFeatures"

const Page = async () => {
    const { user, data: features }: { user: UserJwtInterface, data: RoomFeatureInteraface[] } = await getFeatures()

    return (
        <Content title='Tambah Kamar Baru' subTitle='Manajemen Kamar / Tambah Kamar Baru' buttonBackUrl='/rgpanel/room_management'>
            <FormRoom user={user} features={features}/>
        </Content>
    )
}
export default Page