'use client'
import PrimeButton from "@/components/core/Button/PrimeButton"
import { Table, Td } from "@/components/rgpanel/Datatable/Tables"
import ColumnMetaInterface from "@/utils/Interfaces/ColumnMetaInterface"
import TenantInterface from "@/utils/Interfaces/TenantItemInterface"
import MetaInterface from "@/utils/Interfaces/paginator/MetaInterface"
import React, { useRef } from 'react';
import { Paginator } from "primereact/paginator"
import Restore from "./Restore"
import { ConfirmDialog } from "primereact/confirmdialog"
import { Toast } from "primereact/toast"
import Delete from "./Delete"

const TableTenant = ({ data, meta }: { data: TenantInterface[], meta?: MetaInterface }) => {
    const column: ColumnMetaInterface[] = [
        { field: 'name', header: 'Name' },
        { field: 'phone', header: 'Phone' },
        { field: 'occupation', header: 'Occupation' }
    ]
    const toast = useRef<Toast>(null);
    const actionColumn = (item: TenantInterface) => {
        return (
            <div className="gap-2 flex justify-center items-center">
                <PrimeButton tooltip="Show" tooltipOptions={{ showDelay: 500, position: 'bottom' }} severity="info" icon="pi pi-eye"></PrimeButton>
                <PrimeButton tooltip="Edit" tooltipOptions={{ showDelay: 500, position: 'bottom' }} severity="warning" icon="pi pi-pencil"></PrimeButton>
                {item.deleted_at != null
                    ? <Restore item={item} toastMessage={(message) => toast.current?.show(message)} />
                    : <Delete item={item} toastMessage={(message) => toast.current?.show(message)} />
                }
            </div>
        )
    }
    return (
        <>
            <Toast ref={toast} position="bottom-right" />
            <ConfirmDialog />
            <Table value={data}>
                {column.map((item, key) => (
                    <Td field={item.field} header={item.header} key={key} />
                ))}
                <Td header="Action" body={actionColumn}></Td>
            </Table>
            <Paginator first={meta.from} rows={meta.to} totalRecords={meta.total} rowsPerPageOptions={[50, 100]} onPageChange={(e) => { console.log(e) }} />
        </>
    )
}
export default TableTenant