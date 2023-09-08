'use client'
import React, { Fragment } from 'react'
import RgpanelBeforeRendering from "@/components/core/StaticComponents/RgpanelBeforeRendering"
import Search from "@/components/rgpanel/Datatable/Search"
import WithTrash from "@/components/rgpanel/Datatable/WithTrash"
import objectToQueryString from "@/constant/objectToQueryString"
import UserJwtInterface from "@/utils/Interfaces/UserJwtInterface"
import MetaInterface from "@/utils/Interfaces/paginator/MetaInterface"
import QueryStringKeyInterface from "@/utils/Interfaces/paginator/QueryStringKeyInterface"
import { axiosAuthClient } from "@/utils/fetching/axios"
import { Toast } from "primereact/toast"
import { useRef, useState } from "react"
import { useQuery } from "react-query"
import { ConfirmDialog } from "primereact/confirmdialog"
import RoomInterface from "@/utils/Interfaces/RoomInterface"
import Image from 'next/image'
import { Card } from 'primereact/card'
import { Badge } from 'primereact/badge'
import { Chip } from 'primereact/chip'
import ActionHandle from './ActionHandle'
import { Paginator } from 'primereact/paginator'
import formatToRupiah from '@/constant/formatToRupiah'

const getData = async ({ session, url }: { session: any, url: string }) => {
    const res = await (await axiosAuthClient(session)).get(`${process.env.NEXT_PUBLIC_API_URL}/${url}`)
    return res.data;
}

const TableRoom = ({ initialData }: { initialData: { data: RoomInterface[], meta?: MetaInterface, user: UserJwtInterface } }) => {
    const toast = useRef<Toast>(null);
    const [queryKey, setQueryKey] = useState<QueryStringKeyInterface>({
        page: initialData.meta.current_page,
        withTrash: false,
        search: ''
    })

    const { data, isLoading, error } = useQuery({
        queryFn: () => getData({ session: initialData.user, url: `rooms?${objectToQueryString(queryKey)}` }),
        queryKey: [`rooms`, objectToQueryString(queryKey)],
        initialData: initialData,
        enabled: initialData.user.token != undefined
    })

    if (isLoading || error) return <RgpanelBeforeRendering loading={isLoading} error={error} />
    const { data: rooms, meta }: { data: RoomInterface[], meta: MetaInterface } = data
    return (
        <>
            <Toast ref={toast} position="bottom-right" />
            <ConfirmDialog />
            <div className="flex items-center justify-between w-full flex-wrap gap-4">
                <Search debounce={(value) => setQueryKey({ ...queryKey, search: value })} />
                <div className="flex items-center gap-5 justify-center md:justify-end">
                    <WithTrash onChange={(value) => setQueryKey({ ...queryKey, withTrash: value })} />
                </div>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-2">
                {rooms.map((room, index) => (
                    <Card key={index} title={room.name}
                        pt={{
                            body: {
                                className: "flex flex-col justify-between h-[250px]"
                            },
                        
                        }}
                        subTitle={
                            <>
                                {room.type}
                                <div className='flex gap-2 items-start flex-wrap justify-start mb-3'>
                                    {room.features?.slice(0, 2).map((feature, key) => <Badge value={<div className='flex items-center gap-2'> <i className={`pi ${feature.icon}`}></i> {feature.name}</div>} key={key} />)}
                                    {room.features.length - 2 > 0
                                        && <Badge value={`${room.features.length - 2}+`} />
                                    }
                                </div>
                            </>
                        }
                        header={<Image loading='lazy' src={room.image_path} width={500} height={500} sizes='(min-width: 768px) 100vw' alt="room-image" />}
                        className="relative rounded-lg overflow-hidden hover:shadow-xl">
                        <div className="absolute top-2 right-2">
                            <ActionHandle toast={toast} item={room} queryKey={queryKey} />
                        </div>

                        <p className='line-clamp-4'>
                            {room.simple_description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugit deserunt magni, quae excepturi, ducimus nobis molestias inventore delectus suscipit adipisci? Porro delectus sunt ducimus eligendi error dicta in inventore.
                        </p>
                        <p className='mt-2'><b>{formatToRupiah(Math.min(room.daily_price, room.monthly_price, room.yearly_price))} - {formatToRupiah(Math.max(room.daily_price, room.monthly_price, room.yearly_price))}</b></p>

                    </Card>
                ))}
            </section>
            <Paginator
                first={meta.from}
                rows={meta.per_page}
                totalRecords={meta.total}
                onPageChange={(paginateData) => setQueryKey({ ...queryKey, page: paginateData.page + 1 })}
            />
        </>
    )
}
export default TableRoom