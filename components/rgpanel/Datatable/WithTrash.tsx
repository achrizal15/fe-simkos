import { InputSwitch } from "primereact/inputswitch";
import { useState } from "react";

const WithTrash = ({ onChange = (e) => { } }) => {
    const [value, setValue] = useState<boolean>(false);
    return (
        <div className="flex gap-2">
            <InputSwitch className="focus:outline-none" checked={value} onChange={(e) => {
                onChange(e.value)
                setValue(e.value)
            }} />
            <span className="font-normal">{value ? "With Trash" : "No Trash"}</span>
        </div>
    )
}
export default WithTrash