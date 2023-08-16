// components/SidebarMenu.tsx
import React, { ReactNode } from 'react';

interface SidebarMenuProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
}
interface MenuItemProps {
    children: ReactNode;
    active?: boolean;
    icon:string;
}
interface SidebarMenuComponent extends React.FC<SidebarMenuProps> {
    Item: React.FC<MenuItemProps>
}
const MenuItem: React.FC<MenuItemProps> = ({ children, active,icon }) => {
    const bgColor = active ? 'bg-purple-800' : 'bg-white';
    return <div className={`px-4 py-2 text-purple-800 cursor-pointer shadow hover:shadow-lg hover:bg-purple-900 rounded-l-lg hover:text-white transition-colors duration-300 ${bgColor}`}><i className={icon}></i> {children}</div>;
};

const SidebarMenu: SidebarMenuComponent = ({ children }) => {
    return (
        <aside className="hidden lg:block fixed left-0 top-0 bottom-0 bg-gradient-to-t z-5 from-purple-700 from-10% to-purple-800 pt-20 pl-10 w-1/4 text-white overflow-y-auto">
            {children}
        </aside>
    );
};

SidebarMenu.Item = MenuItem;

export default SidebarMenu;
