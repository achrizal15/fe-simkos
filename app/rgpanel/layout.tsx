import PrimeProvider from '@/components/theme/PrimeProvider';
import moment from 'moment';
import '@/styles/global.scss';
import styles from './layout.module.scss'
import { Metadata } from 'next';
import Navbar from '@/components/rgpanel/navbar/Navbar';
import Sidebar from '@/components/rgpanel/sidebar/Sidebar';
import Footer from '@/components/rgpanel/footer/footer';
import { ALBERT_SANS } from 'constant/fonts';
import Content from '@/components/rgpanel/content/Content';
import MobileMenu from './_component/MobileMenu';
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
                <body className={` ${ALBERT_SANS.className}`}>
                    <Navbar />
                    <Sidebar />
                    <main className={`${styles.layout}`}>
                        <Content>
                            {children}
                        </Content>
                        <Footer />
                    </main>
                </body>
            </PrimeProvider>
        </html>
    );
}