'use client'
import SidebarMenuItemInterface from "utils/Interfaces/SidebarMenuItemInterface";
import SidebarMenu from "./SidebarMenu";
import { RgPanelSidebarMenu } from "constant/menu";

const Sidebar = () => {
    const menuItems: SidebarMenuItemInterface[] = RgPanelSidebarMenu;

    const SidebarMenuItems = ({ items }: { items: SidebarMenuItemInterface[] }) => {
        return items.map(function (item, key) {
            return (
                <li key={key}> <SidebarMenu.Item icon={item.icon}>{item.label} </SidebarMenu.Item></li>
            )
        })
    };
    return <SidebarMenu>
        {menuItems.map((item, key) => (
            <div className="mb-3" key={key}>
                {
                    item.items.length != 0
                        ? <div className="font-semibold">{item.label}</div>
                        : <SidebarMenu.Item icon={item.icon}> {item.label} </SidebarMenu.Item>
                }

                <ul className="space-y-2 mt-2 text-xs xl:text-lg pl-3">
                    <SidebarMenuItems items={item.items} />
                </ul>
            </div>
        ))}
    </SidebarMenu>
}
export default Sidebar