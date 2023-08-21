'use client'
import PrimeButtom from "@/components/core/Button/PrimeButton"
import { Table, Td } from "@/components/rgpanel/Datatable/Tables"
import ColumnMetaInterface from "@/utils/Interfaces/ColumnMetaInterface"
import TenantInterface from "@/utils/Interfaces/TenantItemInterface"
import MetaInterface from "@/utils/Interfaces/paginator/MetaInterface"
import React, { useRef } from 'react';
import { Paginator } from "primereact/paginator"
import Restore from "./Restore"
import { ConfirmDialog } from "primereact/confirmdialog"
import { Toast } from "primereact/toast"

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
                <PrimeButtom tooltip="Show" tooltipOptions={{ showDelay: 500, position: 'bottom' }}  severity="info" icon="pi pi-eye"></PrimeButtom>
                <PrimeButtom tooltip="Edit" tooltipOptions={{ showDelay: 500, position: 'bottom' }}  severity="warning" icon="pi pi-pencil"></PrimeButtom>
                {item.deleted_at != null
                    ? <Restore item={item} toastMessage={(message)=> toast.current?.show(message)}/>
                    : <PrimeButtom tooltip="Delete" tooltipOptions={{ showDelay: 500, position: 'bottom' }}  severity="danger" icon="pi pi-trash"></PrimeButtom>
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