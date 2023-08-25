'use client'
import PrimeButton from "@/components/core/Button/PrimeButton"
import { Table, Td } from "@/components/rgpanel/Datatable/Tables"
import ColumnMetaInterface from "@/utils/Interfaces/ColumnMetaInterface"
import TenantInterface from "@/utils/Interfaces/TenantItemInterface"
import MetaInterface from "@/utils/Interfaces/paginator/MetaInterface"
import React, { useRef, useState } from 'react';
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator"
import Restore from "./Restore"
import { ConfirmDialog } from "primereact/confirmdialog"
import { Toast } from "primereact/toast"
import Delete from "./Delete"
import moment from "moment"
import UserJwtInterface from "@/utils/Interfaces/UserJwtInterface"
import { useSession } from "next-auth/react"
import LinkInterface from "@/utils/Interfaces/paginator/LinkInterface"
import TenantColumn from "./TenantColumn"
import { DataTableSortEvent } from "primereact/datatable"
import Search from "@/components/rgpanel/Datatable/Search"
import { useQuery, useQueryClient } from "react-query"
import WithTrash from "@/components/rgpanel/Datatable/WithTrash"
import QueryStringKeyInterface from "@/utils/Interfaces/paginator/QueryStringKeyInterface"
import objectToQueryString from "@/constant/objectToQueryString"


const getTenantList = async (session: any, url: string) => {
    const { user }: { user: UserJwtInterface } = session
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, {
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

const TableTenant = ({ initialData }: { initialData: { data: TenantInterface[], meta?: MetaInterface } }) => {
    const toast = useRef<Toast>(null);
    const session = useSession()
    const column: ColumnMetaInterface[] = TenantColumn
    const [queryKey, setQueryKey] = useState<QueryStringKeyInterface>({
        page: initialData.meta.current_page,
        withTrash: false
    })
    const paginateHandle = async (data: PaginatorPageChangeEvent) => {
        const page = data.page + 1
        setQueryKey({...queryKey,page:page})
    }
    const { data, isLoading, isFetching } = useQuery(objectToQueryString(queryKey), () => getTenantList(session.data, `tenants?${objectToQueryString(queryKey)}`), {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        initialData: initialData,
    })
    const { data: tenants, meta }: { data: TenantInterface[], meta: MetaInterface } = data
    const actionColumn = (item: TenantInterface) => {
        return (
            <div className="gap-2 flex justify-center items-center">
                <PrimeButton tooltip="Show" tooltipOptions={{ showDelay: 500, position: 'bottom' }} severity="info" icon="pi pi-eye"></PrimeButton>
                <PrimeButton tooltip="Edit" tooltipOptions={{ showDelay: 500, position: 'bottom' }} severity="warning" icon="pi pi-pencil"></PrimeButton>
                {item.deleted_at != null
                    ? <Restore item={item} queryKey={objectToQueryString(queryKey)} toastMessage={(message) => {
                        toast.current?.show(message)
                    }} />
                    : <Delete queryKey={objectToQueryString(queryKey)} item={item} toastMessage={(message) => {
                        toast.current?.show(message)
                    }} />
                }
            </div>
        )
    }

    const [lazySort, setLazySort] = useState<DataTableSortEvent>()

    return (
        <>
            <Toast ref={toast} position="bottom-right" />
            <ConfirmDialog />
            <Table value={tenants}
                resizableColumns
                scrollable
                onSort={(e: DataTableSortEvent) => {
                    console.log(e)
                    setLazySort(e)
                }}
                sortField={lazySort?.sortField}
                sortOrder={lazySort?.sortOrder}
                header={
                    <div className="flex items-center gap-2">
                        <Search  onChange={(event)=>setQueryKey({...queryKey,search:event.target.value})}/>
                        <WithTrash onChange={(value)=>{
                            setQueryKey({...queryKey,withTrash:value})
                        }}/>
                    </div>
                }
            >
                <Td header="Aksi" frozen body={actionColumn}></Td>
                {column.map((item, key) => (
                    <Td field={item.field} sortable header={item.header} key={key} style={{ width: item?.width }} />
                ))}

            </Table>
            <Paginator
                first={meta.from}
                rows={meta.per_page}
                totalRecords={meta.total}
                onPageChange={paginateHandle}
            />
        </>
    )
}
export default TableTenant