import * as React from 'react';
import PrimeProvider from '@/components/theme/PrimeProvider';
import '@/styles/global.scss';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { ALBERT_SANS } from 'constant/fonts';
import layout from './layout.module.scss';
import { Metadata } from 'next';
import moment from 'moment';
moment.locale('id');
export const metadata: Metadata = {
    title: 'Porto-App',
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
                <body className={`${ALBERT_SANS.className} ${layout.main}`}>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </body>
            </PrimeProvider>
        </html>
    );
}
