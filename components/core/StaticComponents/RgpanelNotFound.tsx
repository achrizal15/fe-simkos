import PrimeButton from '@/components/core/Button/PrimeButton';
import { H2 } from '@/components/core/Headings/Headings';
import Image from 'next/image';
import Link from 'next/link';
import erro404Image from 'public/images/404.png'
const RgpanelNotFound = () => {
    return (
        <div className='w-full h-full flex justify-center flex-col items-center mt-10'>
            <Image src={erro404Image} alt='error Image' width={250} height={0} priority />
            <div className='flex flex-col items-center gap-5 mt-5'>
                <H2 className='text-center'>Oops, Error 404</H2>
                <p className='text-sm text-center'>Page yang anda tuju tidak ditemukan,<br /> pastikan anda membuka menu dengan benar.</p>
                <Link href="/rgpanel">
                    <PrimeButton severity='help' rounded={false}>Kembali ke Dashboard</PrimeButton>
                </Link>
            </div>
        </div>
    )
}
export default RgpanelNotFound