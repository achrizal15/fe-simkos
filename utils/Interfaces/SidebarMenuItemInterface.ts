interface SidebarMenuItemInterface {
    label: string;
    icon: string;
    url: string;
    key:string;
    subLabel?:string;
    items: SidebarMenuItemInterface[];
}
export default SidebarMenuItemInterface