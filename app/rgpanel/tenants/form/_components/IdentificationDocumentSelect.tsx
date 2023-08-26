'use client'
import { Dropdown } from "primereact/dropdown"
interface IdentificationDocument{
    name:string,
    code:string
}
const IdentificationDocumentSelect = () => {
    const documents:IdentificationDocument[]=[
        {
            name: "Kartu Tanda Penduduk",
            code:"ktp1"
        },
        {
            name: "Kartu Tanda Mahasiswa",
            code:"ktm"
        },
        {
            name: "Kartu Tanda Pelajar",
            code:"ktp2"
        },
        {
            name: "Paspor",
            code:"pp"
        }
    ]
    return (
        <Dropdown value={documents[0]} id="identification_document" name="identification_document"  options={documents} optionLabel="name"
            placeholder="Pilih jenis document" className="p-inputtext-sm" />
    )
}
export default IdentificationDocumentSelect