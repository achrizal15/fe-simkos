'use client'
import OccupationsData from "@/constant/OccupationsData";
import { Dropdown } from "primereact/dropdown"
import { useState } from "react"
interface OccupationInterface {
    name: string,
    code: number
}
const OccupationSelect = ({ onChange = (value: string) => { }, onBlur, initialValue }:
    {
        onChange: (value: string) => void; // Type definition for onChange prop
        onBlur?: () => void;                // Type definition for onBlur prop
        initialValue?: string;
    }
) => {

    const occupations: OccupationInterface[] = OccupationsData
    const [value, setValue] = useState<OccupationInterface>(occupations.find((value) => value.name == initialValue))

    return (
        <Dropdown value={value}
            onBlur={onBlur}
            filter 
            onChange={(event) => {
                const occupation: OccupationInterface = event.target.value
                setValue(occupation)
                onChange(occupation.name)
            }} id="occupation" name="occupation" options={occupations} optionLabel="name"
            placeholder="Pilih status" className="p-inputtext-sm" />
    )
}
export default OccupationSelect