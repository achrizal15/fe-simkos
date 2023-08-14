import PrimeProvider from '@/components/theme/PrimeProvider';
import moment from 'moment';
import '@/styles/global.scss';
import { Metadata } from 'next';
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
            <body >
                <main>{children}</main>
            </body>
        </html>

    );
}
