import PrimeButton from "@/components/core/Button/PrimeButton";
import PrimeCard from "@/components/core/Card/PrimeCard";
import Content from "@/components/rgpanel/content/Content";
import TenantInterface from "@/utils/Interfaces/TenantItemInterface";
import { API_URL, fetchHeader } from "@/utils/fetching/fetch"
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const getTenant = async (id: number) => {
    const { headers } = await fetchHeader();
    const res = await fetch(`${API_URL}/tenants/${id}`, {
        headers: headers,
        cache: 'no-store'
    })
    if (res.status == 404) notFound()
    return await res.json()
}
const Page = async ({ params }) => {
    const { data: tenant }: { data: TenantInterface } = await getTenant(params.id);
    return (
        <Content title='Informasi Penyewa' subTitle='Manajemen Penyewa / Informasi Penyewa'>
            <PrimeCard title={
                <div className="flex justify-between items-center">
                    Informasi Penyewa
                    <div className="flex items-center gap-5">
                        <PrimeButton icon='pi pi-file-pdf' disabled severity="danger" tooltip="On going" tooltipOptions={{
                            position: 'left'
                        }} />
                    </div>
                </div>
            } >
                <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div className="relative overflow-hidden">
                        <Image src={tenant.identification_document_filename}
                            width={0}
                            height={0}
                            priority
                            alt="ktp"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <div className="grid-cols-2 grid gap-5">
                        <div className="break-words">
                            <span className="font-semibold">Nama Lengkap :</span>
                            <p>{tenant.name}</p>
                        </div>
                        <div className="break-words">
                            <span className="font-semibold">Tempat Lahir :</span>
                            <p>{tenant.place_of_birth}</p>
                        </div>
                        <div className="break-words">
                            <span className="font-semibold">Email :</span>
                            <p>{tenant.email}</p>
                        </div>
                        <div className="break-words">
                            <span className="font-semibold ">Tanggal Lahir :</span>
                            <p>{tenant.birthdate}</p>
                        </div>
                        <div className="break-words">
                            <span className="font-semibold ">Jenis Dokumen :</span>
                            <p>{tenant.identification_document}</p>
                        </div>
                        <div className="break-words">
                            <span className="font-semibold ">No. Handphone :</span>
                            <p>
                                {tenant.phone}
                                <a target="_blank" href={`https://wa.me/${tenant.phone}`}>
                                    <i className="pi pi-whatsapp ml-2 text-green-500"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="break-words">
                        <span className="font-semibold ">Alamat Asli :</span>
                        <p>{tenant.original_address}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="break-words">
                            <span className="font-semibold ">Keluarga Dekat :</span>
                            <p>{tenant.emergency_contact_name}</p>
                        </div>
                        <div className="break-words">
                            <span className="font-semibold ">No. Keluarga Dekat :</span>
                            <p>{tenant.emergency_contact_phone}
                                <a target="_blank" href={`https://wa.me/${tenant.emergency_contact_phone}`}>
                                    <i className="pi pi-whatsapp ml-2 text-green-500"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="break-words">
                        <span className="font-semibold ">Pekerjaan :</span>
                        <p>{tenant.occupation}</p>
                    </div>
                    {
                        tenant.occupation == "Pelajar/Mahasiswa"
                            ? (
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="break-words">
                                        <span className="font-semibold ">Nama Sekolah :</span>
                                        <p>{tenant.school}</p>
                                    </div>
                                    <div className="break-words">
                                        <span className="font-semibold ">Alamat Sekolah :</span>
                                        <p>{tenant.school_address}</p>
                                    </div>
                                </div>
                            )
                            :
                            (
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="break-words">
                                        <span className="font-semibold ">Nama Perusahaan :</span>
                                        <p>{tenant.workplace}</p>
                                    </div>
                                    <div className="break-words">
                                        <span className="font-semibold ">Alamat Perusahaan :</span>
                                        <p>{tenant.workplace_address}</p>
                                    </div>
                                </div>
                            )
                    }
                </div>
                <Link href={'/rgpanel/tenants'}>
                    <PrimeButton rounded={false} severity="danger">Kembali</PrimeButton>
                </Link>
            </PrimeCard>
        </Content>
    )
}
export default Page