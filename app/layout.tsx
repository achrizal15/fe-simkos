import * as React from 'react';
import '@/styles/global.css';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { ALBERT_SANS } from 'constant/fonts';
import layout from './layout.module.scss';
import { Metadata } from 'next';
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
            <body className={`${ALBERT_SANS.className} ${layout.main}`}>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
