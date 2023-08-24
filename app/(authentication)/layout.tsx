import { Metadata } from 'next';
import moment from 'moment';
import PrimeProvider from '@/components/theme/PrimeProvider';
import '@/styles/global.scss';
import { ALBERT_SANS } from 'constant/fonts';
moment.locale('id');
import layout from './layout.module.scss'
import Footer from '@/components/rgpanel/footer/footer';
import Image from 'next/image';
import authImage from 'public/images/auth-bg.avif'
import { H1 } from '@/components/core/Headings/Headings';
import 'primeicons/primeicons.css';

export const metadata: Metadata = {
    title: 'Simkos Landing',
    icons: '/rg-x1.png',
};
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <PrimeProvider>
              
                    <body className={`${ALBERT_SANS.className} ${layout.layout}`}>
                        <main className='grid md:grid-cols-2 bg-white overflow-hidden rounded-lg shadow-lg h-[90vh] mt-5'>
                            <div className='relative md:h-full w-full '>
                                <Image src={authImage} fill alt='aut-image' style={{ objectFit: "cover" }} priority sizes='(min-width: 768px) 100vw' />
                                <div className='absolute bg-black/70 top-0 left-0 right-0 bottom-0 flex items-center justify-center p-5'>
                                    <H1 className="text-white text-center">RGPANEL SIMKOS</H1>
                                </div>
                            </div>
                            {children}
                        </main>
                        <Footer />
                    </body>
                
            </PrimeProvider>
        </html>
    );
}