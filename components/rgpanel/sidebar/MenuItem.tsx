'use client'
import React, { ReactNode } from 'react';
import { usePathname } from "next/navigation";
import Link from 'next/link';
interface MenuItemProps {
    children: ReactNode;
    icon: string;
    url: string
}
const MenuItem: React.FC<MenuItemProps> = ({ children, url, icon }) => {
    const path = usePathname()
    const bgColor = path == url ? 'bg-purple-800 text-white' : 'bg-white text-purple-800';
    return (
        <Link href={url}>
            <div className={`px-4 py-2 text-xs xl:text-lg cursor-pointer shadow hover:shadow-lg hover:bg-purple-900 rounded-l-lg hover:text-white transition-colors duration-300 ${bgColor}`}><i className={icon}></i> {children}
            </div>
        </Link>
    );
};



export default MenuItem;
