import Label from "@/components/core/Input/Label"
import PrimeInputText from "@/components/core/Input/PrimeInputText"
import { Controller } from "react-hook-form"

const StudentField = ({ control, errors, defaultValue }: {
    control: any,
    errors: any,
    defaultValue?: {
        school: string,
        school_address: string
    }
}) => {
    return (
        <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-2 mb-2">
                <Label htmlFor="school">Nama Sekolah</Label>
                <Controller
                    control={control}
                    name="school"
                    defaultValue={defaultValue.school?defaultValue.school:''}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <PrimeInputText id="school" type="school" name="school" placeholder="Tadika Mesra" onChange={onChange} onBlur={onBlur} value={value} />
                    )}
                />

                {errors.school && <small className="p-error">{errors.school.message}</small>}
            </div>
            <div className="flex flex-col gap-2 mb-2">
                <Label htmlFor="school_address">Alamat Sekolah</Label>
                <Controller
                    control={control}
                    name="school_address"
                    defaultValue={defaultValue.school_address?defaultValue.school_address:''}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <PrimeInputText id="school_address" type="school_address" name="school_address" placeholder="Jln. Semeru, No.25" onChange={onChange} onBlur={onBlur} value={value} />
                    )}
                />
                {errors.school_address && <small className="p-error">{errors.school_address.message}</small>}
            </div>
        </div>
    )
}
export default StudentField