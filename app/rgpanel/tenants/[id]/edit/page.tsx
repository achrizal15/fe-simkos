'use client'
import PrimeCard from "@/components/core/Card/PrimeCard"
import { Toast } from "primereact/toast"
import PrimeFileUpload from "@/components/core/FileUpload/PrimeFileUpload"
import Label from "@/components/core/Input/Label"
import PrimeCalendar from "@/components/core/Input/PrimeCalendar"
import PrimeInputMask from "@/components/core/Input/PrimeInputMask"
import PrimeInputText from "@/components/core/Input/PrimeInputText"
import PrimeTextArea from "@/components/core/Input/PrimeTextArea"
import PrimeButton from "@/components/core/Button/PrimeButton"
import { useForm, Controller } from "react-hook-form"
import { useRef } from "react"
import { FileUpload } from "primereact/fileupload"
import { axiosAuthClient } from "@/utils/fetching/axios"
import { useSession } from "next-auth/react"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { AxiosError } from "axios"
import Link from "next/link"
import moment from "moment"
import TypeTenantFormValues from "./_components/TypeTenantFormValue"
import IdentificationDocumentSelect from "./_components/IdentificationDocumentSelect"
import OccupationSelect from "./_components/OccupationSelect"
import StudentField from "./_components/StudentField"
import WorkspaceField from "./_components/WorkspaceField"
const submitTenant = async ({ session, data, id }) => {
    const res = await ((await axiosAuthClient(session.data.user))).post(`/tenants/${id}`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    });
    return res.data
}

const getTenant = async (session: any, url: string) => {
    const res = await (await axiosAuthClient(session.data.user)).get(url)
    if (res.status != 200) {
        throw new Error(res.statusText)
    }

    return res.data?.data
}

const Page = ({ params }) => {
    const session = useSession();
    const { data: tenant, isLoading: tenantLoading } = useQuery(`tenants/${params.id}`, () => getTenant(session, `tenants/${params.id}`))
    const fileUploadRef = useRef<FileUpload>(null)
    const toast = useRef<Toast>(null)
    const queryClient = useQueryClient()
    const { control, handleSubmit,  getValues, setValue, trigger, formState: { errors } } = useForm<TypeTenantFormValues>()
    const { mutate, isLoading } = useMutation(submitTenant, {
        onSuccess: (data) => {
            toast.current.show({ severity: 'success', life: 1500, summary: 'Update', detail: data.message })
            if (fileUploadRef.current) {
                fileUploadRef.current.clear()
            }
            queryClient.setQueryData(`tenants/${params.id}`, data.data)
        },
        onError: (error: AxiosError) => {
            const data: any = error.response.data
            toast.current.show({ severity: 'error', life: 1500, summary: 'Update', detail: data.message })
        }
    })

    const submit = async (data: TypeTenantFormValues) => {        
        await mutate({ session, data:{ ...data, birthdate: moment(data.birthdate, 'DD/MM/YYYY').format('YYYY-MM-DD') }, id: tenant.id })
    }
    console.log(errors)
    if (tenantLoading) return "Waiting default data..."
    return (
        <PrimeCard title="Form Edit Penyewa" >
            <Toast ref={toast} />
            <form onSubmit={handleSubmit(submit)}>
                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2 mb-2">
                        <Label htmlFor="identification_document_filename" required={true}>Upload Identitas Dokumen</Label>
                        <Controller
                            control={control}
                            name="identification_document_filename"
                            render={({ field: { onChange, onBlur, value } }) => {

                                return (
                                    <PrimeFileUpload
                                        fileUploadRef={fileUploadRef}
                                        setValue={(value) => setValue('identification_document_filename_default', value)}
                                        defaultPlaceholder={tenant?.identification_document_filename}
                                        id="identification_document_filename"
                                        onSelect={(e) => onChange(e.files[0])}
                                        onClear={() => {
                                            onChange('')
                                        }}
                                        name="identification_document_filename"
                                        className="shadow-lg"
                                        emptyPlaceHolder="Seret dan tempel identitas dokumen pengenal, untuk mengapload."
                                    />
                                )
                            }}
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
                                    defaultValue={tenant.name}
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
                                    defaultValue={tenant.email}
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
                                    defaultValue={tenant.identification_document}
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
                                    defaultValue={tenant.place_of_birth}
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
                                    defaultValue={tenant.birthdate}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <PrimeCalendar id="birthdate" name="birthdate" placeholder="20/12/2000" onChange={(event) => {
                                            console.log(event)
                                            onChange(event)
                                        }} onBlur={onBlur} value={moment(value, 'DD/MM/YYYY').toDate()} dateFormat="dd/mm/yy" />
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
                                    defaultValue={tenant.phone}
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
                            defaultValue={tenant.original_address}
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
                                defaultValue={tenant.emergency_contact_name}
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
                                defaultValue={tenant.emergency_contact_phone}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <PrimeInputMask id="emergency_contact_phone" name="emergency_contact_phone" onChange={onChange} onBlur={onBlur} value={value} />
                                )}
                                rules={{
                                    required: 'Tidak Boleh kosong',
                                    minLength: 20
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
                            defaultValue={tenant.occupation}
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
                        ? <StudentField defaultValue={{ school_address: tenant.school_address, school: tenant.school }} errors={errors} control={control} />
                        : <WorkspaceField defaultValue={{ workplace_address: tenant.workplace_address, workplace: tenant.workplace }} errors={errors} control={control} />
                    }
                </div>
                <div className="flex gap-2 mt-5">
                    <Link href={'/rgpanel/tenants'}>
                        <PrimeButton rounded={false} type="reset" severity="danger">Kembali</PrimeButton>
                    </Link>
                    <PrimeButton rounded={false} loading={isLoading} >Simpan</PrimeButton>
                </div>
            </form>
        </PrimeCard>
    )
}
export default Page