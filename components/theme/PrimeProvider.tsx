// _app.js
'use client';
import { PrimeReactProvider } from 'primereact/api';
//theme
import 'primereact/resources/themes/lara-light-indigo/theme.css';

//core
import 'primereact/resources/primereact.min.css';

export default function PrimeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return <PrimeReactProvider>{children}</PrimeReactProvider>;
}
