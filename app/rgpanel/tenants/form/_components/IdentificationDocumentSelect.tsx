'use client'
import { Dropdown } from "primereact/dropdown"
import { useState } from "react"
interface IdentificationDocument {
    name: string,
    code: string
}
const IdentificationDocumentSelect = ({ onChange = (value: string) => { }, onBlur, initialValue }:
    {
        onChange: (value: string) => void; // Type definition for onChange prop
        onBlur?: () => void;                // Type definition for onBlur prop
        initialValue?: string;
    }
) => {
    const documents: IdentificationDocument[] = [
        {
            name: "Kartu Tanda Penduduk",
            code: "ktp1"
        },
        {
            name: "Kartu Tanda Mahasiswa",
            code: "ktm"
        },
        {
            name: "Kartu Tanda Pelajar",
            code: "ktp2"
        },
        {
            name: "Paspor",
            code: "pp"
        }
    ]
    const [value, setValue] = useState<IdentificationDocument>(documents.find((value) => value.name == initialValue))

    return (
        <Dropdown value={value}
            onBlur={onBlur}
            onChange={(event) => {
                const document: IdentificationDocument = event.target.value
                setValue(document)
                onChange(document.name)
            }} id="identification_document" name="identification_document" options={documents} optionLabel="name"
            placeholder="Pilih jenis document" className="p-inputtext-sm" />
    )
}
export default IdentificationDocumentSelect