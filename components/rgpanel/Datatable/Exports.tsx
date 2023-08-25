import { Button } from "primereact/button"

const Exports =()=>{
    return (
        <div className="flex align-items-center justify-content-end gap-2">
        <Button type="button" icon="pi pi-file-excel" severity="success" rounded onClick={
            ()=>{}
        } data-pr-tooltip="XLS" />
        <Button type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={
            ()=>{}
        } data-pr-tooltip="PDF" />
    </div>
    )
}
export default Exports