import MenuItemInterface from "utils/Interfaces/MenuItemInterface";
import SidebarMenuItemInterface from "utils/Interfaces/SidebarMenuItemInterface";

const FronEndMenu: MenuItemInterface[] = [
    {
        title: 'Beranda',
        url: '/',
        sub_menu: null,
    },
    {
        title: 'Kamar',
        url: '/rooms',
        sub_menu: null,
    },
    {
        title: 'Reservasi',
        url: '/reservation',
        sub_menu: null,
    },
    {
        title: 'Fitur',
        url: '/features',
        sub_menu: null,
    },
    {
        title: 'Tentang',
        url: '/about',
        sub_menu: null,
    },
    {
        title: 'Kontak',
        url: '/contact',
        sub_menu: null,
    },
];

const RgPanelSidebarMenu: SidebarMenuItemInterface[] = [
    {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        url: "/rgpanel",
        items: []
    },
    {
        label: 'Manajemen Penyewa',
        icon: 'pi pi-fw pi-users',
        url: null,
        items: [
            {
                label: 'Daftar Penyewa',
                icon: 'pi pi-fw pi-list',
                url: "/rgpanel/tenant",
                items: []
            },
            {
                label: 'Tambah Penyewa Baru',
                icon: 'pi pi-fw pi-user-plus',
                url: "/rgpanel/tenants/form",
                items: []
            }
        ]
    },
    {
        label: 'Manajemen Kamar',
        icon: 'pi pi-fw pi-desktop',
        url: "/rgp",
        items: [
            {
                label: 'Daftar Kamar',
                icon: 'pi pi-fw pi-list',
                url: "/rgp",
                items: []
            },
            {
                label: 'Tambah Kamar Baru',
                icon: 'pi pi-fw pi-plus',
                url: "/rgp",
                items: []
            },
            {
                label: 'Harga Kamar',
                icon: 'pi pi-fw pi-money-bill',
                url: "/rgp",
                items: []
            },
            {
                label: 'Fitur Kamar',
                icon: 'pi pi-fw pi-cog',
                url: "/rgp",
                items: []
            }
        ]
    },
    {
        label: 'Tagihan & Faktur',
        icon: 'pi pi-fw pi-file',
        url: "/rgp",
        items: [
            {
                label: 'Daftar Faktur',
                icon: 'pi pi-fw pi-list',
                url: "/rgp",
                items: []
            },
            {
                label: 'Buat Faktur Manual',
                icon: 'pi pi-fw pi-pencil',
                url: "/rgp",
                items: []
            },
            {
                label: 'Pengaturan Penagihan Otomatis',
                icon: 'pi pi-fw pi-cog',
                url: "/rgp",
                items: []
            }
        ]
    },
    {
        label: 'Pemeliharaan',
        icon: 'pi pi-fw pi-wrench',
        url: "/rgp",
        items: [
            {
                label: 'Catatan Perbaikan',
                icon: 'pi pi-fw pi-list',
                url: "/rgp",
                items: []
            },
            {
                label: 'Catatan Pemeliharaan',
                icon: 'pi pi-fw pi-list',
                url: "/rgp",
                items: []
            },
            {
                label: 'Biaya Pemeliharaan',
                icon: 'pi pi-fw pi-dollar',
                url: "/rgp",
                items: []
            }
        ]
    },
    {
        label: 'Keuangan',
        icon: 'pi pi-fw pi-chart-bar',
        url: "/rgp",
        items: [
            {
                label: 'Laporan Pendapatan',
                icon: 'pi pi-fw pi-chart-line',
                url: "/rgp",
                items: []
            },
            {
                label: 'Laporan Pengeluaran',
                icon: 'pi pi-fw pi-chart-bar',
                url: "/rgp",
                items: []
            },
            {
                label: 'Gambaran Keuangan',
                icon: 'pi pi-fw pi-chart-pie',
                url: "/rgp",
                items: []
            }
        ]
    },
    {
        label: 'Manajemen Keluhan',
        icon: 'pi pi-fw pi-exclamation-triangle',
        url: "/rgp",
        items: [
            {
                label: 'Daftar Keluhan',
                icon: 'pi pi-fw pi-list',
                url: "/rgp",
                items: []
            },
            {
                label: 'Laporan Keluhan Baru',
                icon: 'pi pi-fw pi-plus',
                url: "/rgp",
                items: []
            }
        ]
    }
];

export { FronEndMenu,RgPanelSidebarMenu }