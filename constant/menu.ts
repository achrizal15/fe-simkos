import MenuItemInterface from "utils/Interfaces/MenuItemInterface";
import SidebarMenuItemInterface from "utils/Interfaces/SidebarMenuItemInterface";

const FronEndMenu: MenuItemInterface[] = [
    {
        title: 'Home',
        url: '/',
        sub_menu: null,
    },
    {
        title: 'Rooms',
        url: '/rooms',
        sub_menu: null,
    },
    {
        title: 'Reservation',
        url: '/reservation',
        sub_menu: null,
    },
    {
        title: 'Features',
        url: '/features',
        sub_menu: null,
    },
    {
        title: 'About',
        url: '/about',
        sub_menu: null,
    },
    {
        title: 'Contact',
        url: '/contact',
        sub_menu: null,
    },
];
const RgPanelSidebarMenu: SidebarMenuItemInterface[] = [
    {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        url:"/rgpanel",
        items: []
    },
    {
        label: 'Tenant Management',
        icon: 'pi pi-fw pi-users',
        url:null,
        items: [
            {
                label: 'Tenant List',
                icon: 'pi pi-fw pi-list',
                url:"/rgpanel/tenant-list",
                items: []
            },
            {
                label: 'Add New Tenant',
                icon: 'pi pi-fw pi-user-plus',
                url:"/rgp",
                items: []
            }
        ]
    },
    {
        label: 'Room Management',
        icon: 'pi pi-fw pi-desktop',
        url:"/rgp",
        items: [
            {
                label: 'Room List',
                icon: 'pi pi-fw pi-list',
                url:"/rgp",
                items: []
            },
            {
                label: 'Add New Room',
                icon: 'pi pi-fw pi-plus',
                url:"/rgp",
                items: []
            },
            {
                label: 'Room Prices',
                icon: 'pi pi-fw pi-money-bill',
                url:"/rgp",
                items: []
            },
            {
                label: 'Room Features',
                icon: 'pi pi-fw pi-cog',
                url:"/rgp",
                items: []
            }
        ]
    },
    {
        label: 'Invoice & Billing',
        icon: 'pi pi-fw pi-file',
        url:"/rgp",
        items: [
            {
                label: 'Invoice List',
                icon: 'pi pi-fw pi-list',
                url:"/rgp",
                items: []
            },
            {
                label: 'Create Manual Invoice',
                icon: 'pi pi-fw pi-pencil',
                url:"/rgp",
                items: []
            },
            {
                label: 'Automatic Billing Setup',
                icon: 'pi pi-fw pi-cog',
                url:"/rgp",
                items: []
            }
        ]
    },
    {
        label: 'Maintenance',
        icon: 'pi pi-fw pi-wrench',
        url:"/rgp",
        items: [
            {
                label: 'Repair Logs',
                icon: 'pi pi-fw pi-list',
                url:"/rgp",
                items: []
            },
            {
                label: 'Maintenance Logs',
                icon: 'pi pi-fw pi-list',
                url:"/rgp",
                items: []
            },
            {
                label: 'Maintenance Expenses',
                icon: 'pi pi-fw pi-dollar',
                url:"/rgp",
                items: []
            }
        ]
    },
    {
        label: 'Finance',
        icon: 'pi pi-fw pi-chart-bar',
        url:"/rgp",
        items: [
            {
                label: 'Income Reports',
                icon: 'pi pi-fw pi-chart-line',
                url:"/rgp",
                items: []
            },
            {
                label: 'Expense Reports',
                icon: 'pi pi-fw pi-chart-bar',
                url:"/rgp",
                items: []
            },
            {
                label: 'Financial Overview',
                icon: 'pi pi-fw pi-chart-pie',
                url:"/rgp",
                items: []
            }
        ]
    },
    {
        label: 'Complaint Management',
        icon: 'pi pi-fw pi-exclamation-triangle',
        url:"/rgp",
        items: [
            {
                label: 'Complaint List',
                icon: 'pi pi-fw pi-list',
                url:"/rgp",
                items: []
            },
            {
                label: 'New Complaint Report',
                icon: 'pi pi-fw pi-plus',
                url:"/rgp",
                items: []
            }
        ]
    }
];
export { FronEndMenu,RgPanelSidebarMenu }