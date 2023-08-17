'use client'
import { RgPanelSidebarMenu } from "constant/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BreadCrumb } from "primereact/breadcrumb"
import { MenuItem, MenuItemOptions } from "primereact/menuitem";
import SidebarMenuItemInterface from "utils/Interfaces/SidebarMenuItemInterface";
const DynamicBreadCrumb = () => {
    const path = usePathname()
    function findMatchingMenuItems(menuItems: SidebarMenuItemInterface[], targetParts: string[]): SidebarMenuItemInterface[] {
        const matchingItems: SidebarMenuItemInterface[] = [];

        for (const menuItem of menuItems) {
            if (menuItem.url) {
                const menuUrlParts = menuItem.url.split('/');
                const lastMenuUrlPart = menuUrlParts[menuUrlParts.length - 1];

                if (targetParts.includes(lastMenuUrlPart)) {
                    matchingItems.push(menuItem);
                }
            }

            if (menuItem.items && menuItem.items.length > 0) {
                const childMatchingItems = findMatchingMenuItems(menuItem.items, targetParts);
                matchingItems.push(...childMatchingItems);
            }
        }

        return matchingItems;
    }

    const pathParts = path.split('/'); // Split the path into parts
    const matchingMenuItems: SidebarMenuItemInterface[] = findMatchingMenuItems(RgPanelSidebarMenu, pathParts);

    const iconItemTemplate = (item: MenuItem, options: MenuItemOptions) => {
        return (
            <Link href={item.url} className={`focus:outline-none ring-0 border-0 gap-2 flex items-center`}>
                <span className={item.icon}></span>
                <span>
                    {item.label}
                </span>
            </Link>
        );
    };
    const home: MenuItem = {
        icon: matchingMenuItems[0].icon,
        url: matchingMenuItems[0].url,
        label: matchingMenuItems[0].label,
        template: iconItemTemplate,
    };
    const item: MenuItem[] = matchingMenuItems.slice(1).map((menu) => ({
        icon: menu.icon,
        url: menu.url,
        label: menu.label,
        template: iconItemTemplate
    }))
    return (
        <BreadCrumb model={item} home={home} className="mb-3" />
    )
}
export default DynamicBreadCrumb