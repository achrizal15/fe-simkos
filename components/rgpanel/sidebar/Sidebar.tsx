import SidebarMenuItemInterface from "utils/Interfaces/SidebarMenuItemInterface";
import { RgPanelSidebarMenu } from "constant/menu";
import MenuItem from "./MenuItem";

const Sidebar = () => {
    const menuItems: SidebarMenuItemInterface[] = RgPanelSidebarMenu;
    const SidebarMenuItems = ({ items }: { items: SidebarMenuItemInterface[] }) => {
        return items.map(function (item, key) {
            return (
                <li key={key}> <MenuItem url={item.url} icon={item.icon}>{item.label} </MenuItem></li>
            )
        })
    };
    return (
        <aside className="hidden lg:block fixed left-0 top-0 bottom-0 bg-gradient-to-t z-5 from-purple-700 from-10% to-purple-600 pt-20 pl-10 w-1/4 text-white overflow-y-auto">
            {menuItems.map((item, key) => (
                <div className="mb-3" key={key}>
                    {
                        item.items.length != 0
                            ? <div className="font-semibold">{item.label}</div>
                            : <MenuItem url={item.url} icon={item.icon}> {item.label} </MenuItem>
                    }

                    <ul className="space-y-2 mt-2 pl-3">
                        <SidebarMenuItems items={item.items} />
                    </ul>
                </div>
            ))}
        </aside>
    )
}
export default Sidebar