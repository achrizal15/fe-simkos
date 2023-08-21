'use client'
import { Column, ColumnProps } from "primereact/column"
import { DataTable, DataTableValueArray, DataTableProps } from "primereact/datatable"
interface TableInterface extends DataTableProps<DataTableValueArray> {
    children: React.ReactNode
}
interface TdInterface extends ColumnProps {
    children?: React.ReactNode
}
export const Table: React.FC<TableInterface> = ({ children, ...rest }) => {
    return (
        <DataTable stripedRows size='small' showGridlines className="rounded" {...rest}>
            {children}
        </DataTable>
    )
}
export const Td: React.FC<TdInterface> = ({ children, ...rest }) => {
    return (
        <Column {...rest}>
            {children}
        </Column>
    )
}