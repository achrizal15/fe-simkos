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
import useSWR from "swr"
const getTenantList = async (url: string, session: any) => {
    const { user }: { user: UserJwtInterface } = session
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, {
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${user.token}`
        },
    })
    if (res.status != 200) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
const TableTenant = ({ initialData }: { initialData: { data: TenantInterface[], meta: MetaInterface } }) => {
    const toast = useRef<Toast>(null);
    const session = useSession()
    const [page, setPage] = useState<number>(initialData.meta.current_page)
    const { data, isLoading, mutate, isValidating } = useSWR(`tenants?page=${page}`,
        async (arg) => getTenantList(arg, session.data),
        {
            fallbackData: initialData,
            revalidateOnFocus: false,
            revalidateOnMount: true,
        })
    const meta: MetaInterface = data.meta
    const tenants: TenantInterface[] = data.data
    const column: ColumnMetaInterface[] = TenantColumn

    const actionColumn = (item: TenantInterface) => {
        return (
            <div className="gap-2 flex justify-center items-center">
                <PrimeButton tooltip="Show" tooltipOptions={{ showDelay: 500, position: 'bottom' }} severity="info" icon="pi pi-eye"></PrimeButton>
                <PrimeButton tooltip="Edit" tooltipOptions={{ showDelay: 500, position: 'bottom' }} severity="warning" icon="pi pi-pencil"></PrimeButton>
                {item.deleted_at != null
                    ? <Restore item={item} toastMessage={(message) => {
                   
                        mutate({
                            data: tenants.map((tenant: TenantInterface) => {
                                if (tenant.id == item.id) {
                                    tenant.deleted_at = null
                                }
                                return tenant
                            }),
                            meta
                        }, false)
                        console.log(data)
                        toast.current?.show(message)
                    }} />
                    : <Delete item={item} toastMessage={(message) => {
                        mutate({
                            data: tenants.map((tenant: TenantInterface) => {
                                if (tenant.id == item.id) {
                                    tenant.deleted_at = moment().format('Y-MM-D');
                                }
                                return tenant
                            }),
                            meta
                        }, true)
                        toast.current?.show(message)
                    }} />
                }
            </div>
        )
    }
    const paginateHandle = async (data: PaginatorPageChangeEvent) => {
        const page = data.page + 1
        setPage(page)
    }
    const [lazySort, setLazySort] = useState<DataTableSortEvent>()
    console.log(isValidating)
    return (
        <>
            <Toast ref={toast} position="bottom-right" />
            <ConfirmDialog />
            <Table value={tenants}
                resizableColumns
                scrollable
                onSort={(e: DataTableSortEvent) => {
                    setLazySort(e)
                }}
                sortField={lazySort?.sortField}
                sortOrder={lazySort?.sortOrder}
                loading={isValidating}
                header={<Search />}
            >
                <Td header="Action" frozen body={actionColumn}></Td>
                {column.map((item, key) => (
                    <Td field={item.field} sortable header={item.header} key={key} style={{ width: item?.width }} />
                ))}

            </Table>
            {
                !isValidating &&
                <Paginator
                    first={meta.from}
                    rows={meta.per_page}
                    totalRecords={meta.total}
                    onPageChange={paginateHandle}
                />
            }

        </>
    )
}
export default TableTenant