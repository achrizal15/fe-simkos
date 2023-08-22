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


const TableTenant = ({ data, meta }: { data: TenantInterface[], meta?: MetaInterface }) => {
    const column: ColumnMetaInterface[] = [
        { field: 'name', header: 'Name' },
        { field: 'phone', header: 'Phone' },
        { field: 'occupation', header: 'Occupation' }
    ]
    const [tenants, setTenants] = useState<TenantInterface[]>(data)
    const toast = useRef<Toast>(null);
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
    const paginateHandle = (data: PaginatorPageChangeEvent) => {
        console.log(data)
        const page = data.page + 1
        console.log(meta.links.find((link)=>(link.label==page.toString())))
    }
    return (
        <>
            <Toast ref={toast} position="bottom-right" />
            <ConfirmDialog />
            <Table value={tenants}>
                {column.map((item, key) => (
                    <Td field={item.field} header={item.header} key={key} />
                ))}
                <Td header="Action" body={actionColumn}></Td>
            </Table>
            <Paginator first={meta.current_page} rows={meta.to} totalRecords={meta.total} 
            onPageChange={paginateHandle} />
        </>
    )
}
export default TableTenant