'use client'
import PrimeButton from "@/components/core/Button/PrimeButton"
import PrimeCard from "@/components/core/Card/PrimeCard"
import PrimeFileUpload from "@/components/core/FileUpload/PrimeFileUpload"
import Label from "@/components/core/Input/Label"
import PrimeInputText from "@/components/core/Input/PrimeInputText"
import PrimeTextArea from "@/components/core/Input/PrimeTextArea"
import objectToQueryString from "@/constant/objectToQueryString"
import RoomInterface from "@/utils/Interfaces/RoomInterface"
import UserJwtInterface from "@/utils/Interfaces/UserJwtInterface"
import { axiosAuthClient } from "@/utils/fetching/axios"
import { AxiosError } from "axios"
import { FileUpload } from "primereact/fileupload"
import { Toast } from "primereact/toast"
import { FormEvent, useRef, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { Editor, EditorTextChangeEvent } from "primereact/editor";
import PrimeInputNumber from "@/components/core/Input/PrimeInputNumber"
import PrimeAutoComplete from "@/components/core/Input/PrimeAutoComplete"
import RoomFeatureInteraface from "@/utils/Interfaces/RoomFeatureInteraface"
import PrimeMultipleSelect from "@/components/core/Input/PrimeMultipleSelect"
import { fetchHeader } from "@/utils/fetching/fetch"
import RgpanelBeforeRendering from "@/components/core/StaticComponents/RgpanelBeforeRendering"

type RoomFormType = {
    name: string;
    image_path: object | File | string,
    image_path_old?: string,
    simple_description: string,
    description: string,
    type: string,
    yearly_price: number;
    monthly_price: number;
    daily_price: number;
    features_id: number[]
}
const getRoom = async (session: any, id: number) => {
    const res = await (await axiosAuthClient(session)).get(`/rooms/${id}`);
    return res.data?.data
}
const submitFeature = async ({ session, data, url = '/rooms' }) => {
    const res = await (await axiosAuthClient(session)).post(url, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    });
    return res.data
}
const initialSugestTypeRoom = ['BASIC', 'VVIP', 'VVIP I', 'VVIP II']
const FormRoom = ({ param = null, user, features }: {
    param?: any | null,
    user: UserJwtInterface,
    features: RoomFeatureInteraface[]
}) => {

    const fileUploadRef = useRef<FileUpload>(null)
    const toast = useRef<Toast>(null);
    const queryClient = useQueryClient();
    const [sugestTypeRoom, setSugestTypeRoom] = useState<string[]>(initialSugestTypeRoom)

    const { data: initialData,isLoading:editLoading,error } = useQuery({
        queryKey: ['rooms', param],
        queryFn: () => getRoom(user, param),
        enabled: param != null
    })
    const { control, handleSubmit, reset, setValue, formState: { errors } } = useForm<RoomFormType>()

    const { mutate, isLoading } = useMutation(submitFeature, {
        onSuccess: ({ data }) => {
            const roomsQuery = queryClient.setQueryData(['rooms', objectToQueryString({
                page: 1,
                withTrash: false,
                search: ''
            })],
                (oldData: any) => {
                    if (!oldData) return
                    return {
                        ...oldData,
                        data: initialData ? [...oldData.data.map((item: RoomInterface) => {
                            if (item.id == initialData.id) {
                                return data
                            }
                            return item
                        })] : [data, ...oldData.data]
                    }
                }
            )
            queryClient.setQueryData(['rooms',param],data)
            if (fileUploadRef.current && !initialData) {
                fileUploadRef.current.clear()
            }
            if (!roomsQuery) {
                queryClient.removeQueries({
                    queryKey: ['rooms', objectToQueryString({
                        page: 1,
                        withTrash: false,
                        search: ''
                    })]
                })
            }
            if (!initialData) reset()
            toast.current.show({ severity: 'success', life: 1500, summary: initialData ? "Update" : "Create", detail: 'Data has been saved' })
        },
        onError: (error: AxiosError) => {
            const data: any = error.response.data
            toast.current.show({ severity: 'error', life: 1500, summary: initialData ? "Update" : "Create", detail: data.message })
        }
    })
    const submit = (data: FormEvent<HTMLFormElement>) => mutate({ session: user, data, url: initialData ? `/rooms/${initialData.id}` : '/rooms' });
    if (editLoading || error) return <RgpanelBeforeRendering loading={editLoading} error={error} />
    return (
        <>
            <Toast ref={toast} position="bottom-right" />
            <PrimeCard title="Form Tambah Kamar" >
                <form onSubmit={handleSubmit(submit)} >
                    <div className="grid md:grid-cols-2 gap-2">
                        <div className="flex flex-col gap-2 mb-2">
                            <Label htmlFor="image_path" required>Upload Gambar</Label>
                            <Controller
                                control={control}
                                name="image_path"
                                rules={{
                                    required: initialData ? false : 'Tidak Boleh kosong',
                                }}
                                render={({ field: { onChange, onBlur, value } }) => {
                                    return (
                                        <PrimeFileUpload
                                            fileUploadRef={fileUploadRef}
                                            setValue={(value) => setValue('image_path_old', value)}
                                            defaultPlaceholder={initialData?.image_path}
                                            id="image_path"
                                            onSelect={(e) => onChange(e.files[0])}
                                            onClear={() => {
                                                onChange('')
                                            }}
                                            name="image_path"
                                            className="shadow-lg"
                                            emptyPlaceHolder="Seret dan tempel gambar, untuk mengupload."
                                        />
                                    )
                                }}
                            />
                            {errors.image_path && <small className="p-error">{errors.image_path.message}</small>}
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <Label htmlFor="description" required>Deskripsi</Label>
                            <Controller
                                control={control}
                                name="description"
                                defaultValue={initialData?.description}
                                render={({ field: { onChange, onBlur, value } }) => <Editor onTextChange={(e: EditorTextChangeEvent) => onChange(e.textValue)} style={{ height: '100px' }} name="description" id="description" onBlur={onBlur} onChange={onChange} value={value} />}
                                rules={{
                                    required: 'Tidak Boleh kosong'
                                }}
                            />
                            {errors.description && <small className="p-error">{errors.description.message}</small>}
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col gap-2 mb-2">
                                <Label htmlFor="name" required>Nama</Label>
                                <Controller
                                    control={control}
                                    name="name"
                                    defaultValue={initialData?.name}
                                    render={({ field: { onChange, onBlur, value } }) => <PrimeInputText name="name" id="name" placeholder="Kamar terbaik" onBlur={onBlur} onChange={onChange} value={value} />}
                                    rules={{
                                        required: 'Tidak Boleh kosong',
                                        maxLength: 100
                                    }}
                                />
                                {errors.name && <small className="p-error">{errors.name.message}</small>}
                            </div>
                            <div className="flex flex-col gap-2 mb-2">
                                <Label htmlFor="type" required>Tipe Kamar</Label>
                                <Controller
                                    control={control}
                                    name="type"
                                    defaultValue={initialData?.type}
                                    render={({ field: { onChange, onBlur, value } }) => <PrimeAutoComplete
                                        completeMethod={(e) => {
                                            const query = e.query.toLowerCase();
                                            const filteredSuggestions = initialSugestTypeRoom.filter((suggestion) =>
                                                suggestion.toLowerCase().includes(query)
                                            );
                                            setSugestTypeRoom(filteredSuggestions ? filteredSuggestions : initialSugestTypeRoom)
                                            return filteredSuggestions;
                                        }}
                                        value={value} suggestions={sugestTypeRoom} name="type" id="type" placeholder="VVIP" onBlur={onBlur} onChange={(e) => onChange(e.value)} />}
                                    rules={{
                                        required: 'Tidak Boleh kosong'
                                    }}
                                />
                                {errors.type && <small className="p-error">{errors.type.message}</small>}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mb-2">
                            <Label htmlFor="simple_description" required>Deskripsi Singkat</Label>
                            <Controller
                                control={control}
                                name="simple_description"
                                defaultValue={initialData?.simple_description}
                                render={({ field: { onChange, onBlur, value } }) => <PrimeTextArea rows={1} name="simple_description" id="simple_description" placeholder="Ini akan tampil di depan" onBlur={onBlur} onChange={onChange} value={value} />}
                                rules={{
                                    required: 'Tidak Boleh kosong'
                                }}
                            />
                            {errors.simple_description && <small className="p-error">{errors.simple_description.message}</small>}
                        </div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-2">
                        <div className="flex flex-col gap-2 mb-2">
                            <Label htmlFor="features_id" required>Fasilitas  </Label>
                            <Controller
                                control={control}
                                name="features_id"
                                defaultValue={initialData?.features.map(item => item.id)}
                                render={({ field: { onChange, onBlur, value } }) => <PrimeMultipleSelect
                                    options={features}
                                    value={value&&features.filter(item => value.includes(item.id))}
                                    onChange={(e) => onChange(e.value.map(value => value.id))}
                                    itemTemplate={(option: RoomFeatureInteraface) => (<p><i className={`pi ${option.icon}`}></i> {option.name}</p>)}
                                    optionLabel="name"
                                    placeholder="Pilih fasilatas atau feature kamar"
                                    name="features_id" id="features_id" onBlur={onBlur} />}
                                rules={{
                                    required: 'Tidak Boleh kosong'
                                }}
                            />
                            {errors.features_id && <small className="p-error">{errors.features_id.message}</small>}
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <Label htmlFor="daily_price" required>Harga <small>(Harian)</small> </Label>
                            <Controller
                                control={control}
                                name="daily_price"
                                defaultValue={initialData ? initialData.daily_price : 0}
                                render={({ field: { onChange, onBlur, value } }) => <PrimeInputNumber name="daily_price" id="daily_price" locale='id' placeholder="50000" onBlur={onBlur} onChange={(e) => onChange(e.value)} value={parseInt(value.toString())} />}
                                rules={{
                                    required: 'Tidak Boleh kosong'
                                }}
                            />
                            {errors.daily_price && <small className="p-error">{errors.daily_price.message}</small>}
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <Label htmlFor="monthly_price" required>Harga <small>(Bulanan)</small> </Label>
                            <Controller
                                control={control}
                                name="monthly_price"
                                defaultValue={initialData ? initialData.monthly_price : 0}
                                render={({ field: { onChange, onBlur, value } }) => <PrimeInputNumber name="monthly_price" id="monthly_price" locale='id' placeholder="150000" onBlur={onBlur} onChange={(e) => onChange(e.value)} value={parseInt(value.toString())} />}
                                rules={{
                                    required: 'Tidak Boleh kosong'
                                }}
                            />
                            {errors.monthly_price && <small className="p-error">{errors.monthly_price.message}</small>}
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <Label htmlFor="yearly_price" required>Harga <small>(Tahunan)</small> </Label>
                            <Controller
                                control={control}
                                name="yearly_price"
                                defaultValue={initialData ? initialData.yearly_price : 0}
                                render={({ field: { onChange, onBlur, value } }) => <PrimeInputNumber name="yearly_price" id="yearly_price" locale='id' placeholder="2500000" onBlur={onBlur} onChange={(e) => onChange(e.value)} value={parseInt(value.toString())} />}
                                rules={{
                                    required: 'Tidak Boleh kosong'
                                }}
                            />
                            {errors.yearly_price && <small className="p-error">{errors.yearly_price.message}</small>}
                        </div>
                    </div>
                    <div className="flex gap-2 mt-5">
                        <PrimeButton rounded={false} loading={isLoading} >Simpan</PrimeButton>
                    </div>
                </form>
            </PrimeCard>
        </>

    )
}
export default FormRoom