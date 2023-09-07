import PrimeButton from "@/components/core/Button/PrimeButton";
import RoomFeatureInteraface from "@/utils/Interfaces/RoomFeatureInteraface";
import QueryStringKeyInterface from "@/utils/Interfaces/paginator/QueryStringKeyInterface";
import { useState } from "react";
import FormFeature from "./Form";
import { useSession } from "next-auth/react";
import UserJwtInterface from "@/utils/Interfaces/UserJwtInterface";
import { axiosAuthClient } from "@/utils/fetching/axios";
import { useQuery } from "react-query";
import RoomInterface from "@/utils/Interfaces/RoomInterface";
const getFeature = async ({ session, id }) => {
    const res = await (await axiosAuthClient(session)).get(`/features/${id}`);
    return res.data?.data
}
interface EditFeatureProps { item: RoomInterface, toast: any, queryKey: QueryStringKeyInterface }
const EditFeature = ({ item, toast, queryKey }: EditFeatureProps) => {
    const session = useSession()
    const user: UserJwtInterface = session.data?.user as UserJwtInterface
    const [visible, setVisible] = useState<boolean>(false)
    const { data, refetch, isLoading, isFetching } =
        useQuery({
            queryKey: ['features', item.id],
            queryFn: () => getFeature({ session: user, id: item.id }),
            enabled: false,
        })

    return (
        <>
            <PrimeButton icon="pi pi-pencil" severity='warning' tooltip="Edit" onClick={() => {
                refetch()
                setVisible(true)
            }} />
            {
                !isFetching && !isLoading &&
                <FormFeature user={user} initialData={data} queryKey={queryKey} visibility={{ visible, setVisible }} toastMessage={(message) => toast.current?.show(message)} />
            }
        </>
    )
}
export default EditFeature