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

const getTenantList = async (session: any, url: string) => {
    const { user }: { user: UserJwtInterface } = session
    const res = await fetch(url, {
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
const TableTenant = ({ data, meta }: { data: TenantInterface[], meta?: MetaInterface }) => {
    const toast = useRef<Toast>(null);
    const session = useSession()
    const column: ColumnMetaInterface[] = TenantColumn
    const [tenants, setTenants] = useState<TenantInterface[]>(data)
    const [metaPaginator, setMetaPaginator] = useState<MetaInterface>(meta)
    const actionColumn = (item: TenantInterface) => {
        return (
            <div className="gap-2 flex justify-center items-center">
                <PrimeButton tooltip="Show" tooltipOptions={{ showDelay: 500, position: 'bottom' }} severity="info" icon="pi pi-eye"></PrimeButton>
                <PrimeButton tooltip="Edit" tooltipOptions={{ showDelay: 500, position: 'bottom' }} severity="warning" icon="pi pi-pencil"></PrimeButton>
                {item.deleted_at != null
                    ? <Restore item={item} toastMessage={(message) => {
                        setTenants([...tenants.map((tenant, index) => {
                            if (tenant.id == item.id) {
                                tenant.deleted_at = null
                            }
                            return tenant
                        })])
                        toast.current?.show(message)
                    }} />
                    : <Delete item={item} toastMessage={(message) => {
                        setTenants([...tenants.map((tenant, index) => {
                            if (tenant.id == item.id) {
                                tenant.deleted_at = moment().format('Y-MM-D');
                                console.log(tenant.deleted_at)
                            }
                            return tenant
                        })])
                        toast.current?.show(message)
                    }} />
                }
            </div>
        )
    }
    const paginateHandle = async (data: PaginatorPageChangeEvent) => {
        const page = data.page + 1
        const link: LinkInterface = metaPaginator.links.find((link) => (link.label == page.toString()))
        const res = await getTenantList(session.data, link.url)
        setTenants(res.data)
        setMetaPaginator(res.meta)
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
                header={<Search/>}
                >          
                <Td header="Action" frozen body={actionColumn}></Td>      
                {column.map((item, key) => (
                    <Td field={item.field} sortable header={item.header} key={key} style={{ width: item?.width }} />
                ))}
               
            </Table>
            <Paginator
                first={metaPaginator.from}
                rows={metaPaginator.per_page}
                totalRecords={metaPaginator.total}
                onPageChange={paginateHandle}
            />
        </>
    )
}
export default TableTenant