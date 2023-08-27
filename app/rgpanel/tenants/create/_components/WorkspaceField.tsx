import Label from "@/components/core/Input/Label"
import PrimeInputText from "@/components/core/Input/PrimeInputText"
import { Controller } from "react-hook-form"

const WorkspaceField=({control,errors})=>{
    return (
        <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2 mb-2">
            <Label htmlFor="workplace">Pekerjaan</Label>
            <Controller
                control={control}
                name="workplace"
                defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                    <PrimeInputText id="workplace" type="workplace" name="workplace" placeholder="PT. Example Sejahtera" onChange={onChange} onBlur={onBlur} value={value} />
                )}
            />
            {errors.workplace && <small className="p-error">{errors.workplace.message}</small>}
        </div>
        <div className="flex flex-col gap-2 mb-2">
            <Label htmlFor="workplace_address">Alamat Perusahaan</Label>
            <Controller
                control={control}
                name="workplace_address"
                defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                    <PrimeInputText id="workplace_address" type="workplace_address" name="workplace_address" placeholder="Jln. Semeru, No.25" onChange={onChange} onBlur={onBlur} value={value} />
                )}
            />
            {errors.workplace_address && <small className="p-error">{errors.workplace_address.message}</small>}
        </div>
    </div>
    )
}
export default WorkspaceField