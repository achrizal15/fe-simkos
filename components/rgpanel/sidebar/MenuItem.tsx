'use client'
// https://preview.keenthemes.com/metronic8/react/demo4/dashboard
import React, { useState, useRef } from 'react';
import { usePathname } from "next/navigation";
import Link from 'next/link';
import SidebarMenuItemInterface from '@/utils/Interfaces/SidebarMenuItemInterface';
import { useClickOutside } from 'primereact/hooks';
import { useRouter } from 'next/router';
const ContentSidebarMenu = ({ item }: { item: SidebarMenuItemInterface }) => {
    const pathname = usePathname()
    const isActive = pathname.split('/')[2] == item.url.split('/')[2];
    const [visible, setVisible] = useState(false);
    const overlayRef = useRef(null);
    useClickOutside(overlayRef, () => setVisible(!visible));
    const SidebarMenuItems = ({ items }: { items: SidebarMenuItemInterface[] }) => {
        return items.map(function (item, key) {
            return <Link href={item.url} key={key} className={`flex gap-3 items-center hover:text-cyan-700 font-semibold text-gray-600 ${pathname == item.url && 'text-cyan-800'}`}> <i className={item.icon}></i> {item.label}</Link>
        })
    };
    return (
        <div className="mb-3 relative overflow-visible"  >
            <Link href={item.items.length==0?item.url:"#"}
                className={item.key}
                data-pr-position="right"
                onClick={() => setVisible(true)}
                data-pr-at="right+30 center"
            >
                <div className={`hover:bg-gray-100 hover:shadow-lg ${isActive && 'shadow-lg bg-gray-100'} py-3 px-4 rounded text-cyan-900 hover:text-cyan-800 duration-500 custom-target-icon`}
                    data-pr-tooltip={item.label}
                    data-pr-position="right"
                    data-pr-at="right+30 center"
                ><i className={`text-lg ${item.icon}`}></i>
                </div>
            </Link>
            {item.items.length != 0 &&
                visible ? (
                <div ref={overlayRef} className="absolute border-round top-0 left-24 shadow-2 p-5 bg-white shadow-lg w-[300px] surface-overlay  white-space-nowrap scalein origin-top">
                    <ul className='flex flex-col gap-4'>
                        <SidebarMenuItems items={item.items} />
                    </ul>
                </div>
            ) : null
            }
        </div>
    )
}
export default ContentSidebarMenu

