'use client'
import PrimeCard from "@/components/core/Card/PrimeCard"
import PrimeFileUpload from "@/components/core/FileUpload/PrimeFileUpload"
import Label from "@/components/core/Input/Label"
import PrimeCalendar from "@/components/core/Input/PrimeCalendar"
import PrimeInputMask from "@/components/core/Input/PrimeInputMask"
import PrimeInputText from "@/components/core/Input/PrimeInputText"
import IdentificationDocumentSelect from "./_components/IdentificationDocumentSelect"
import PrimeTextArea from "@/components/core/Input/PrimeTextArea"
import PrimeButton from "@/components/core/Button/PrimeButton"
import { useForm, Controller } from "react-hook-form"
import TypeTenantFormValues from "./_components/TypeTenantFormValue"
import { useRef } from "react"
import { FileUpload } from "primereact/fileupload"
import { axiosAuthClient } from "@/utils/fetching/axios"
import { useSession } from "next-auth/react"
import { useMutation } from "react-query"
import { Toast } from "primereact/toast"
import { AxiosError } from "axios"
import OccupationSelect from "./_components/OccupationSelect"
import StudentField from "./_components/StudentField"
import WorkspaceField from "./_components/WorkspaceField"
const submitTenant = async ({ session, data }) => {
    const res = await (await axiosAuthClient(session.data.user)).post('/tenants', data, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    });
    return res.data
}
const Form = () => {
    const session = useSession();
    const { control, handleSubmit, reset, getValues, trigger, formState: { errors } } = useForm<TypeTenantFormValues>()
    const fileUploadRef = useRef<FileUpload>(null)
    const toast = useRef<Toast>(null)
    const { mutate, isLoading } = useMutation(submitTenant, {
        onSuccess: (data) => {
            toast.current.show({ severity: 'success', life: 1500, summary: 'Update', detail: data.message })
            if (fileUploadRef.current) {
                fileUploadRef.current.clear()
            }
            reset()
        },
        onError: (error: AxiosError) => {
            toast.current.show({ severity: 'error', life: 1500, summary: 'Update', detail: error.message })
        }
    })
    const submit = async (data: TypeTenantFormValues) => {
        await mutate({ session, data })
    }
    return (
        <>
            <Toast ref={toast} position="bottom-right" />
            <PrimeCard title="Form Edit Penyewa" >
                <form onSubmit={handleSubmit(submit)}>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2 mb-2">
                            <Label htmlFor="identification_document_filename" required={true}>Upload Identitas Dokumen</Label>
                            <Controller
                                control={control}
                                name="identification_document_filename"
                                defaultValue={null}
                                rules={{
                                    required: 'Tidak Boleh kosong',
                                }}
                                render={({ field: { onChange, onBlur, value, } }) => (
                                    <PrimeFileUpload
                                        fileUploadRef={fileUploadRef}
                                        id="identification_document_filename"
                                        onSelect={(e) => onChange(e.files[0])}
                                        onClear={() => onChange('')}
                                        name="identification_document_filename"
                                        className="shadow-lg"
                                        emptyPlaceHolder="Seret dan tempel identitas dokumen pengenal, untuk mengapload." />
                                )}
                            />
                            {errors.identification_document_filename && <small className="p-error">{errors.identification_document_filename.message}</small>}
                        </div>

                        <div className="grid-cols-2 grid gap-2">
                            <div>
                                <div className="flex flex-col gap-2 mb-2">
                                    <Label htmlFor="name" required={true}>Nama</Label>
                                    <Controller
                                        control={control}
                                        name="name"
                                        defaultValue=""
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <PrimeInputText id="name" name="name" onChange={onChange} value={value} placeholder="Jon" onBlur={onBlur} />
                                        )}
                                        rules={{
                                            required: 'Tidak Boleh kosong',
                                            maxLength: 100
                                        }}
                                    />
                                    {errors.name && <small className="p-error">{errors.name.message}</small>}
                                </div>
                                <div className="flex flex-col gap-2 mb-2">
                                    <Label htmlFor="email" required={true}>Email</Label>
                                    <Controller
                                        control={control}
                                        name="email"
                                        defaultValue=""
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <PrimeInputText id="email" type="email" value={value} onChange={onChange} onBlur={onBlur} name="email" placeholder="example@simkos.com" />
                                        )}
                                        rules={{
                                            required: 'Tidak Boleh kosong',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Alamat email tidak valid',
                                            },
                                        }}
                                    />
                                    {errors.email && <small className="p-error">{errors.email.message}</small>}
                                </div>
                                <div className="flex flex-col gap-2 mb-2">
                                    <Label htmlFor="identification_document" required={true}>Jenis Dokumen</Label>
                                    <Controller
                                        control={control}
                                        name="identification_document"
                                        defaultValue=""
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <IdentificationDocumentSelect onChange={onChange} initialValue={value} />
                                        )}
                                        rules={{
                                            required: 'Tidak Boleh kosong'
                                        }}
                                    />
                                    {errors.identification_document && <small className="p-error">{errors.identification_document.message}</small>}
                                </div>

                            </div>
                            <div>
                                <div className="flex flex-col gap-2 mb-2">
                                    <Label htmlFor="place_of_birth" required={true}>Tempat Lahir</Label>
                                    <Controller
                                        control={control}
                                        name="place_of_birth"
                                        defaultValue=""
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <PrimeInputText onChange={onChange} onBlur={onBlur} value={value} id="place_of_birth" name="place_of_birth" placeholder="Jakarta" />
                                        )}
                                        rules={{
                                            required: 'Tidak Boleh kosong'
                                        }}
                                    />
                                    {errors.place_of_birth && <small className="p-error">{errors.place_of_birth.message}</small>}
                                </div>
                                <div className="flex flex-col gap-2 mb-2">
                                    <Label htmlFor="birthdate" required={true}>Tanggal Lahir</Label>
                                    <Controller
                                        control={control}
                                        name="birthdate"
                                        defaultValue=""
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <PrimeCalendar id="birthdate" name="birthdate" placeholder="20/12/2000" onChange={onChange} onBlur={onBlur} value={value} />
                                        )}
                                        rules={{
                                            required: 'Tidak Boleh kosong',
                                        }}
                                    />
                                    {errors.birthdate && <small className="p-error">{errors.birthdate.message}</small>}
                                </div>
                                <div className="flex flex-col gap-2 mb-2">
                                    <Label htmlFor="phone" required={true}>No. Handphone</Label>
                                    <Controller
                                        control={control}
                                        name="phone"
                                        defaultValue=""
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <PrimeInputMask id="phone" name="phone" value={value} onChange={onChange} onBlur={onBlur} />
                                        )}
                                        rules={{
                                            required: 'Tidak Boleh kosong',
                                        }}
                                    />
                                    {errors.phone && <small className="p-error">{errors.phone.message}</small>}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <Label htmlFor="original_address" required={true}>Alamat Asli</Label>
                            <Controller
                                control={control}
                                name="original_address"
                                defaultValue=""
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <PrimeTextArea rows={1} name="original_address" id="original_address" onChange={onChange} onBlur={onBlur} value={value} />
                                )}
                                rules={{
                                    required: 'Tidak Boleh kosong',
                                }}
                            />
                            {errors.original_address && <small className="p-error">{errors.original_address.message}</small>}
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col gap-2 mb-2">
                                <Label htmlFor="emergency_contact_name" required={true}>Keluarga Dekat</Label>
                                <Controller
                                    control={control}
                                    name="emergency_contact_name"
                                    defaultValue=""
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <PrimeInputText id="emergency_contact_name" type="emergency_contact_name" name="emergency_contact_name" placeholder="Ibu John" onChange={onChange} onBlur={onBlur} value={value} />
                                    )}
                                    rules={{
                                        required: 'Tidak Boleh kosong',
                                    }}
                                />
                                {errors.emergency_contact_name && <small className="p-error">{errors.emergency_contact_name.message}</small>}
                            </div>
                            <div className="flex flex-col gap-2 mb-2">
                                <Label htmlFor="emergency_contact_phone" required={true}>No. Keluarga Dekat</Label>
                                <Controller
                                    control={control}
                                    name="emergency_contact_phone"
                                    defaultValue=""
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <PrimeInputMask id="emergency_contact_phone" name="emergency_contact_phone" onChange={onChange} onBlur={onBlur} value={value} />
                                    )}
                                    rules={{
                                        required: 'Tidak Boleh kosong',
                                    }}
                                />
                                {errors.emergency_contact_phone && <small className="p-error">{errors.emergency_contact_phone.message}</small>}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <Label htmlFor="occupation">Pekerjaan</Label>
                            <Controller
                                control={control}
                                name="occupation"
                                defaultValue=""
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <OccupationSelect onChange={(value) => {
                                        onChange(value)
                                        trigger('occupation')
                                    }} onBlur={onBlur} initialValue={value} />
                                )}
                                rules={{
                                    required: "Tidak boleh kosong"
                                }}
                            />
                            {errors.occupation && <small className="p-error">{errors.occupation.message}</small>}
                        </div>
                        {getValues('occupation') == "Pelajar/Mahasiswa"
                            ? <StudentField errors={errors} control={control} />
                            : <WorkspaceField errors={errors} control={control} />
                        }
                    </div>
                    <div className="flex gap-2 mt-5">

                        <PrimeButton rounded={false} onClick={() => {
                            if (fileUploadRef.current) {
                                fileUploadRef.current.clear()
                            }
                            reset()
                        }} type="reset" severity="danger">Batal</PrimeButton>
                        <PrimeButton rounded={false} loading={isLoading} >Simpan</PrimeButton>
                    </div>
                </form>
            </PrimeCard>
        </>

    )
}
export default Form