'use client'
import { H4 } from "@/components/core/Headings/Headings";
import { RgPanelSidebarMenu } from "constant/menu";
import SidebarMenuItemInterface from "utils/Interfaces/SidebarMenuItemInterface";
import MobileMenuItem from "./MobileMenuItem";
import { Panel } from "primereact/panel";
const MobileMenu = () => {
    const menuItems: SidebarMenuItemInterface[] = RgPanelSidebarMenu;
    const MobileMenuItems = ({ items }: { items: SidebarMenuItemInterface[] }) => {
        return items.map(function (item, key) {
            return <MobileMenuItem item={item} key={key} />
        })
    };
    return(
     <>
        <Panel header="Menu" className="lg:hidden mb-3" toggleable>
            {menuItems.map((item, key) => (
                <div key={key} className="lg:hidden mb-3">
                    <H4>{item.label}</H4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                        {
                            item.items.length == 0
                                ? <MobileMenuItem item={item} />
                                : <MobileMenuItems items={item.items} />
                        }
                    </div>
                </div>
            ))}
        </Panel>
        </>
    )
}
export default MobileMenu