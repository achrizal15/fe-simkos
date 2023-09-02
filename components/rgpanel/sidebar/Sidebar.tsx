
import SidebarMenuItemInterface from "utils/Interfaces/SidebarMenuItemInterface";
import { RgPanelSidebarMenu } from "constant/menu";
import Image from "next/image";
import PrimeTooltip from "@/components/core/Tooltip/PrimeTooltip";
import ContentSidebarMenu from "./MenuItem";
const Sidebar = () => {
    const menuItems: SidebarMenuItemInterface[] = RgPanelSidebarMenu;
    return (
        <aside className="hidden z-10 lg:block fixed left-0 top-0 bottom-0 w-28 bg-white shadow-xl pt-5">
            <PrimeTooltip className="text-cyan-800" />
            <div className="w-full flex justify-center items-center flex-col">
                <Image src={'/rg.png'} alt="rglogo" width={40} height={60} className="mb-5" style={{ width: 'auto', height: 'auto' }} />
                {menuItems.map((item, key) => <ContentSidebarMenu key={key} item={item}/> )}
            </div>
        </aside>
    )
}
export default Sidebar