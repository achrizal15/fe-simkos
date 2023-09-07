'use client'
import PrimeButton from "@/components/core/Button/PrimeButton"
import PrimeDialog from "@/components/core/Dialog/PrimeDialog"
import Label from "@/components/core/Input/Label"
import PrimeInputText from "@/components/core/Input/PrimeInputText"
import PiDataIcons from "@/constant/IconData"
import objectToQueryString from "@/constant/objectToQueryString"
import RoomFeatureInteraface from "@/utils/Interfaces/RoomFeatureInteraface"
import UserJwtInterface from "@/utils/Interfaces/UserJwtInterface"
import QueryStringKeyInterface from "@/utils/Interfaces/paginator/QueryStringKeyInterface"
import { axiosAuthClient } from "@/utils/fetching/axios"
import { AxiosError } from "axios"
import { Dropdown } from "primereact/dropdown"
import { MessagesMessage } from "primereact/messages"
import { FormEvent, useRef } from "react"
import { Controller, useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "react-query"

type RoomFeatureType = {
    name: string;
    icon: string;
}

const submitFeature = async ({ session, data, url = '/features' }) => {
    const res = await (await axiosAuthClient(session)).post(url, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    });
    return res.data
}

const FormFeature = ({ visibility, initialData, queryKey, user, toastMessage }: {
    visibility: { visible: boolean; setVisible: React.Dispatch<React.SetStateAction<boolean>> }
    initialData?: RoomFeatureInteraface,
    queryKey: QueryStringKeyInterface,
    user: UserJwtInterface,
    toastMessage: { (toast: MessagesMessage): void },
}) => {
    const formRef = useRef<HTMLFormElement | null>(null);

    const queryClient = useQueryClient();

    const { control, handleSubmit, reset, formState: { errors } } = useForm<RoomFeatureType>({
        defaultValues: {
            name: initialData?.name,
            icon: initialData?.icon
        }
    })

    const { mutate } = useMutation(submitFeature, {
        onSuccess: ({ data }) => {
            queryClient.setQueryData(['features', objectToQueryString({
                page: 1,
                withTrash: false,
                search: ''
            })],
                (oldData: any) => ({
                    ...oldData,
                    data: initialData ? [...oldData.data.map((item: RoomFeatureInteraface) => {
                        if (item.id == initialData.id) {
                            return data
                        }
                        return item
                    })] : [data, ...oldData.data]
                })
            )
            visibility.setVisible(false)
            reset()
            toastMessage({ severity: 'success', life: 1500, summary: initialData ? "Update" : "Create", detail: 'Data has been saved' })
        },
        onError: (error: AxiosError) => {
            toastMessage({ severity: 'error', life: 1500, summary: initialData ? "Update" : "Create", detail: error.message })
        }
    })

    const submit = (data: FormEvent<HTMLFormElement>) => {
        mutate({ session: user, data, url: initialData ? `/features/${initialData.id}` : '/features' })
    };

    const footerContent = <PrimeButton rounded={false} label="Simpan" onClick={() => formRef.current.requestSubmit()} autoFocus />

    return (
        <PrimeDialog position="top" footer={footerContent} header={`${initialData ? 'Edit' : 'Tambah'} feature`} visible={visibility.visible} onHide={() => visibility.setVisible(false)}>
            <form onSubmit={handleSubmit(submit)} id="form-feature" ref={formRef}>
                <div className="grid md:grid-cols-2 gap-2">
                    <div className="flex flex-col gap-2 mb-2">
                        <Label htmlFor="name" required>Nama</Label>
                        <Controller
                            control={control}
                            name="name"
                            defaultValue={initialData?.name}
                            render={({ field: { onChange, onBlur, value } }) => <PrimeInputText name="name" id="name" placeholder="Free air minum" onBlur={onBlur} onChange={onChange} value={value} />}
                            rules={{
                                required: 'Tidak Boleh kosong',
                                maxLength: 100
                            }}
                        />
                        {errors.name && <small className="p-error">{errors.name.message}</small>}
                    </div>
                    <div className="flex flex-col gap-2 mb-2">
                        <Label htmlFor="icons" required>Icon</Label>
                        <Controller
                            control={control}
                            name="icon"
                            defaultValue={initialData?.icon}
                            render={({ field: { onChange, onBlur, value } }) => <Dropdown
                                filter
                                onChange={(event) => onChange(event.target.value)}
                                onBlur={onBlur}
                                value={value}
                                id="icons" name="icons" options={PiDataIcons}
                                placeholder="Pilih icons" className="p-inputtext-sm"
                                itemTemplate={(item) => (
                                    <div className="flex items-center gap-3">
                                        <i className={`pi ${item}`}></i>
                                        {item}
                                    </div>)} />}
                            rules={{
                                required: 'Tidak Boleh kosong',
                            }}
                        />
                        {errors.icon && <small className="p-error">{errors.icon.message}</small>}
                    </div>
                </div>
            </form>
        </PrimeDialog>

    )
}
export default FormFeature