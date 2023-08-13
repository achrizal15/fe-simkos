interface MenuItemInterface {
    title: string;
    url: string;
    sub_menu: MenuItemInterface[] | null;
}
export default MenuItemInterface