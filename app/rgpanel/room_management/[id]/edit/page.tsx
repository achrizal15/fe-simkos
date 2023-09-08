import Content from "@/components/rgpanel/content/Content"
import UserJwtInterface from "@/utils/Interfaces/UserJwtInterface"
import RoomFeatureInteraface from "@/utils/Interfaces/RoomFeatureInteraface"
import FormRoom from "../../_components/Form"
import getFeatures from "../../_components/getFeatures"
const Page = async ({ params }) => {
    const { user, data: features }: { user: UserJwtInterface, data: RoomFeatureInteraface[] } = await getFeatures()

    return (
        <Content title='Edit Kamar' subTitle='Manajemen Kamar / Edit Kamar' buttonBackUrl='/rgpanel/room_management'>
            <FormRoom user={user} param={params.id} features={features} />
        </Content>
    )
}
export default Page