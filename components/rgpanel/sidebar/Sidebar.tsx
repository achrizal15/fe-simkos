'use client'
import SidebarMenuItemInterface from "utils/Interfaces/SidebarMenuItemInterface";
import SidebarMenu from "./SidebarMenu";
import { RgPanelSidebarMenu } from "constant/menu";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
    const menuItems: SidebarMenuItemInterface[] = RgPanelSidebarMenu;
    const path = usePathname();
    const SidebarMenuItems = ({ items }: { items: SidebarMenuItemInterface[] }) => {
        return items.map(function (item, key) {
            return (
                <li key={key}><Link href={item.url}> <SidebarMenu.Item active={item.url == path} icon={item.icon}>{item.label} </SidebarMenu.Item> </Link></li>
            )
        })
    };
    return <SidebarMenu>
        {menuItems.map((item, key) => (
            <div className="mb-3" key={key}>
                {
                    item.items.length != 0
                        ? <div className="font-semibold">{item.label}</div>
                        : <Link href={item.url}> <SidebarMenu.Item active={item.url == path} icon={item.icon}> {item.label} </SidebarMenu.Item></Link>
                }

                <ul className="space-y-2 mt-2 pl-3">
                    <SidebarMenuItems items={item.items} />
                </ul>
            </div>
        ))}
    </SidebarMenu>
}
export default Sidebar