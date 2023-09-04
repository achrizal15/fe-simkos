import PrimeProvider from '@/components/theme/PrimeProvider';
import moment from 'moment';
import 'primeicons/primeicons.css';
import '@/styles/global.scss';
import styles from './layout.module.scss'
import { Metadata } from 'next';
import Navbar from '@/components/rgpanel/navbar/Navbar';
import Sidebar from '@/components/rgpanel/sidebar/Sidebar';
import Footer from '@/components/rgpanel/footer/footer';
import { ALBERT_SANS } from 'constant/fonts';
import AuthProvider from '@/components/AuthProvider/AuthProvider';
import ReactQueryClientProvider from '@/components/ReactQueryProvider/ReactQueryClientProvide';
import { BreadcrumbProvider } from 'context/BreadCrumb.context';

moment.locale('id');
export const metadata: Metadata = {
    title: 'RGPANEL',
    icons: '/rg-x1.png',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className='text-sm'>
            <AuthProvider refetchOnWindowFocus={false}>
                <PrimeProvider>
                    <body className={` ${ALBERT_SANS.className}`}>
                        <BreadcrumbProvider>
                            <ReactQueryClientProvider>
                                <Navbar />
                                <Sidebar />
                                <main className={`${styles.layout}`}>
                                    {children}
                                    <Footer />
                                </main>
                            </ReactQueryClientProvider>
                        </BreadcrumbProvider>
                    </body>
                </PrimeProvider>
            </AuthProvider>
        </html>
    );
}
