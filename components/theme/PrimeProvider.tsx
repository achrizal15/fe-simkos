// _app.js
'use client';
import { PrimeReactProvider } from 'primereact/api';
//theme
import 'primereact/resources/themes/md-light-indigo/theme.css'
import './theme-prime-mui.css'

//core
// import './theme-prime.css'
import 'primereact/resources/primereact.min.css';

export default function PrimeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return <PrimeReactProvider>{children}</PrimeReactProvider>;
}
