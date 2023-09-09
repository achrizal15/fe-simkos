'use client'
import SidebarMenuItemInterface from "utils/Interfaces/SidebarMenuItemInterface";
import { RgPanelSidebarMenu } from "constant/menu";
import Image from "next/image";
import PrimeTooltip from "@/components/core/Tooltip/PrimeTooltip";
import ContentSidebarMenu from "./MenuItem";
import { useState } from "react";
const Sidebar = () => {
    const menuItems: SidebarMenuItemInterface[] = RgPanelSidebarMenu;
    const [show, setShow] = useState<boolean>(false)
    return (
        <>
            <aside className={`${!show && 'hidden'} z-10 lg:block fixed left-0 top-0 bottom-0 w-28 bg-white shadow-xl pt-5`}>
                <PrimeTooltip className="text-cyan-800 hidden lg:block" />
                <div className="w-full flex justify-center items-center flex-col">
                    <Image src={'/rg.png'} alt="rglogo" width={30} height={50} className="mb-5" style={{ width: 'auto', height: 'auto' }} />
                    {menuItems.map((item, key) => <ContentSidebarMenu key={key} item={item} />)}
                </div>
            </aside>
            <button onClick={() => setShow(state => !state)} className={`${show && 'rotate-90 bg-gray-100'} lg:hidden hover:bg-gray-100 bg-white left-5 transition-all text-cyan-800 duration-500 bottom-5 shadow-lg  fixed rounded-full z-[999] w-12 h-12 flex items-center justify-center`}>
                <i className="pi pi-bars text-2xl"></i>
            </button>
        </>
    )
}
export default Sidebar