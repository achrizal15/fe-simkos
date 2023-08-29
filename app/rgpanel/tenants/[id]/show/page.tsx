import PrimeCard from "@/components/core/Card/PrimeCard";
import TenantInterface from "@/utils/Interfaces/TenantItemInterface";
import { API_URL, fetchHeader } from "@/utils/fetching/fetch"
import Image from "next/image";

const getTenant = async (id:number) => {
    const { headers } = await fetchHeader();
    const res = await fetch(`${API_URL}/tenants/${id}`, {
        headers: headers,
        cache:'no-store'
    })
    return await res.json()
}
const Page = async ({params}) => {
    const {data:tenant}:{data:TenantInterface} = await getTenant(params.id);
    console.log(tenant)
    return (
        <PrimeCard title="Informasi Penyewa">
            <div className="grid grid-cols-2">
                <div className="relative bg-red-500 rounded overflow-hidden">
                <Image src={tenant.identification_document_filename}
                    width={0}
                    height={0}
                    priority
                    alt="ktp"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </div>
        </PrimeCard>
    )
}
export default Page