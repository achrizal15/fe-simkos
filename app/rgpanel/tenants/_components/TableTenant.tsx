'use client'
import { Table, Td } from "@/components/rgpanel/Datatable/Tables"
import ColumnMetaInterface from "@/utils/Interfaces/ColumnMetaInterface"
import TenantInterface from "@/utils/Interfaces/TenantItemInterface"
import MetaInterface from "@/utils/Interfaces/paginator/MetaInterface"
import React, { useRef, useState } from 'react';
import { Paginator } from "primereact/paginator"
import { ConfirmDialog } from "primereact/confirmdialog"
import { Toast } from "primereact/toast"
import TenantColumn from "./TenantColumn"
import { DataTableSortEvent } from "primereact/datatable"
import Search from "@/components/rgpanel/Datatable/Search"
import { useQuery } from "react-query"
import WithTrash from "@/components/rgpanel/Datatable/WithTrash"
import QueryStringKeyInterface from "@/utils/Interfaces/paginator/QueryStringKeyInterface"
import objectToQueryString from "@/constant/objectToQueryString"
import ActionHandle from "./ActionHandle"
import Exports from "@/components/rgpanel/Datatable/Exports"

const getTenantList = async (token:string, url: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, {
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    if (res.status != 200) {
        throw new Error(res.statusText)
    }
    return await res.json()
}
const column: ColumnMetaInterface[] = TenantColumn
const TableTenant = ({ initialData }: { initialData: { data: TenantInterface[], meta?: MetaInterface,token:string } }) => {
    const toast = useRef<Toast>(null);
    const [queryKey, setQueryKey] = useState<QueryStringKeyInterface>({
        page: initialData.meta.current_page,
        withTrash: false,
        search:''
    })
    const { data, isFetching } = useQuery(`tenants?${objectToQueryString(queryKey)}`, () => getTenantList(initialData.token, `tenants?${objectToQueryString(queryKey)}`), {
        refetchOnMount: false,
        initialData: initialData,
    })
    const { data: tenants, meta }: { data: TenantInterface[], meta: MetaInterface } = data

    return (
        <>
            <Toast ref={toast} position="bottom-right" />
            <ConfirmDialog />   
            <Table value={tenants}
                resizableColumns
                scrollable
                onSort={(e: DataTableSortEvent) => setQueryKey({ ...queryKey, sortField: e.sortField, sortOrder: e.sortOrder })}
                sortField={queryKey?.sortField}
                sortOrder={queryKey?.sortOrder}
                loading={isFetching}
                header={
                    <div className="flex justify-between items-center flex-wrap gap-2">
                        <Search placeholder="Cari nama, no.hp, email" debounce={(value) => setQueryKey({ ...queryKey, page: initialData.meta.current_page, search: value })} />
                        <div className="flex justify-between w-full md:w-auto md:justify-start flex-wrap items-center gap-2">
                            <WithTrash onChange={(value) => setQueryKey({ ...queryKey, withTrash: value })} />
                            <Exports />
                        </div>
                    </div>
                }
            >
                <Td header="Aksi" frozen body={(item) => <ActionHandle item={item} queryKey={queryKey} toast={toast} />}></Td>
                {column.map((item, key) => (
                    <Td field={item.field} header={item.header} key={key}/>
                ))}

            </Table>
            <Paginator
                first={meta.from}
                rows={meta.per_page}
                totalRecords={meta.total}
                onPageChange={(paginateData) => setQueryKey({ ...queryKey, page: paginateData.page + 1 })}
            />
        </>
    )
}
export default TableTenant