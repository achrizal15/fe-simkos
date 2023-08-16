import PrimeProvider from '@/components/theme/PrimeProvider';
import moment from 'moment';
import '@/styles/global.scss';
import styles from './layout.module.scss'
import { Metadata } from 'next';
import Navbar from '@/components/rgpanel/navbar/Navbar';
import Sidebar from '@/components/rgpanel/sidebar/Sidebar';
import Footer from '@/components/rgpanel/footer/footer';
import { ALBERT_SANS } from 'constant/fonts';
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
        <html lang='en'>
            <PrimeProvider>
                <body className={`${styles.layout} ${ALBERT_SANS.className}`}>
                    <Navbar />
                    <Sidebar />
                    <main className='lg:w-3/4 mt-20 lg:ml-auto'>{children}</main>
                    <Footer />
                </body>
            </PrimeProvider>
        </html>
    );
}
