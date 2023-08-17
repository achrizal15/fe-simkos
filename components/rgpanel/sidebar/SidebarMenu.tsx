'use client'
import React, { ReactNode, useEffect, useState } from 'react';

interface SidebarMenuProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
}
interface MenuItemProps {
    children: ReactNode;
    active?: boolean;
    icon: string;
}
interface SidebarMenuComponent extends React.FC<SidebarMenuProps> {
    Item: React.FC<MenuItemProps>
}
const MenuItem: React.FC<MenuItemProps> = ({ children, active, icon }) => {
    const bgColor = active ? 'bg-purple-800 text-white' : 'bg-white text-purple-800';
    return <div className={`px-4 py-2 text-xs xl:text-lg cursor-pointer shadow hover:shadow-lg hover:bg-purple-900 rounded-l-lg hover:text-white transition-colors duration-300 ${bgColor}`}><i className={icon}></i> {children}</div>;
};

const SidebarMenu: SidebarMenuComponent = ({ children }) => {
    const [screenWidth, setScreenWidth] = useState<number>(0);
    useEffect(() => {
        const updateScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        };
        updateScreenWidth();
        window.addEventListener('resize', updateScreenWidth);
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);
    if (screenWidth < 1024) return false;
    return (
        <aside className="hidden lg:block fixed left-0 top-0 bottom-0 bg-gradient-to-t z-5 from-purple-700 from-10% to-purple-600 pt-20 pl-10 w-1/4 text-white overflow-y-auto">
            {children}
        </aside>
    );
};

SidebarMenu.Item = MenuItem;

export default SidebarMenu;
