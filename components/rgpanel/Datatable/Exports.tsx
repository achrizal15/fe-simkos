import { Button } from "primereact/button"

const Exports =()=>{
    return (
        <div className="flex align-items-center justify-content-end gap-2">
        <Button type="button" icon="pi pi-file-excel" disabled severity="success" tooltip="On going" rounded onClick={
            ()=>{}
        } data-pr-tooltip="XLS" />
        <Button type="button" icon="pi pi-file-pdf" disabled severity="warning" tooltip="On going" rounded onClick={
            ()=>{}
        } data-pr-tooltip="PDF" />
    </div>
    )
}
export default Exports