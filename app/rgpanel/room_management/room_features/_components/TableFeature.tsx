'use client'

import RgpanelBeforeRendering from "@/components/core/StaticComponents/RgpanelBeforeRendering"
import Search from "@/components/rgpanel/Datatable/Search"
import WithTrash from "@/components/rgpanel/Datatable/WithTrash"
import objectToQueryString from "@/constant/objectToQueryString"
import RoomFeatureInteraface from "@/utils/Interfaces/RoomFeatureInteraface"
import UserJwtInterface from "@/utils/Interfaces/UserJwtInterface"
import MetaInterface from "@/utils/Interfaces/paginator/MetaInterface"
import QueryStringKeyInterface from "@/utils/Interfaces/paginator/QueryStringKeyInterface"
import { axiosAuthClient } from "@/utils/fetching/axios"
import { Toast } from "primereact/toast"
import { useRef, useState } from "react"
import { useQuery } from "react-query"
import ActionHandle from "./ActionHandle"
import { ConfirmDialog } from "primereact/confirmdialog"

const getData = async ({ session, url }: { session: any, url: string }) => {
    const res = await (await axiosAuthClient(session)).get(`${process.env.NEXT_PUBLIC_API_URL}/${url}`)
    return res.data;
}

const TableFeature = ({ initialData }: { initialData: { data: RoomFeatureInteraface[], meta?: MetaInterface, user: UserJwtInterface } }) => {
    const toast = useRef<Toast>(null);
    const [queryKey, setQueryKey] = useState<QueryStringKeyInterface>({
        page: initialData.meta.current_page,
        withTrash: false,
        search: ''
    })
    const { data, isLoading, error } = useQuery({
        queryFn: () => getData({ session: initialData.user, url: `features?${objectToQueryString(queryKey)}` }),
        queryKey: [`features`, objectToQueryString(queryKey)],
        refetchOnMount: false,
        initialData: initialData,
    })
    if (isLoading || error) return <RgpanelBeforeRendering loading={isLoading} error={error} />
    const { data: feature, meta }: { data: RoomFeatureInteraface[], meta: MetaInterface } = data

    return (
        <>
            <Toast ref={toast} position="bottom-right" />
            <ConfirmDialog />
            <div className="flex items-center justify-between w-full flex-wrap gap-4">
                <Search debounce={(value) => setQueryKey({ ...queryKey, search: value })} />
                <WithTrash onChange={(value) => setQueryKey({ ...queryKey, withTrash: value })} />
            </div>
            <div className="grid mt-5 grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-5">
                {feature.map((feature, index) => (
                    <div key={index} className='relative w-full bg-white shadow-xl flex items-center justify-center p-4 flex-col gap-2 hover:bg-[#1D5468] text-[#1D5468] hover:text-white rounded text-center'>
                        <ActionHandle toast={toast} item={feature} queryKey={queryKey} />
                        <i className={`${feature.icon}`} style={{ fontSize: 24 }}></i>
                        {feature.name}
                    </div>
                ))}
            </div>
        </>
    )
}
export default TableFeature