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
        key:'dashboard',
        items: []
    },
    {
        label: 'Manajemen Penyewa',
        icon: 'pi pi-fw pi-users',
        url: "/rgpanel/tenants",
        key:'management_tenants',
        items: [
            {
                label: 'Daftar Penyewa',
                icon: 'pi pi-fw pi-list',
                url: "/rgpanel/tenants",
                key:'list_tenants',
                items: []
            },
            {
                label: 'Tambah Penyewa Baru',
                icon: 'pi pi-fw pi-user-plus',
                url: "/rgpanel/tenants/create",
                key:'create_new_tenants',
                items: []
            }
        ]
    },
    {
        label: 'Manajemen Kamar',
        icon: 'pi pi-fw pi-desktop',
        url: "/rgpanel/room_management",
        key:'management_kamar',
        items: [
            {
                label: 'Daftar Kamar',
                icon: 'pi pi-fw pi-list',
                url: "#",
                key:'list_rooms',
                items: []
            },
            {
                label: 'Tambah Kamar Baru',
                icon: 'pi pi-fw pi-plus',
                url: "#",
                key:'create_rooms',
                items: []
            },
            {
                label: 'Harga Kamar',
                icon: 'pi pi-fw pi-money-bill',
                url: "#",
                key:'room_price',
                items: []
            },
            {
                label: 'Fitur Kamar',
                icon: 'pi pi-fw pi-cog',
                url: "#",
                key:'room_feature',
                items: []
            }
        ]
    },
    {
        key: 'invoice_faktur',
        label: 'Tagihan & Faktur',
        icon: 'pi pi-fw pi-file',
        url: "/rgpanel/invoice_faktur",
        items: [
          {
            key: 'daftar_faktur',
            label: 'Daftar Faktur',
            icon: 'pi pi-fw pi-list',
            url: "#",
            items: []
          },
          {
            key: 'buat_faktur_manual',
            label: 'Buat Faktur Manual',
            icon: 'pi pi-fw pi-pencil',
            url: "#",
            items: []
          },
          {
            key: 'pengaturan_penagihan_otomatis',
            label: 'Pengaturan Penagihan Otomatis',
            icon: 'pi pi-fw pi-cog',
            url: "#",
            items: []
          }
        ]
      },
      {
        key: 'maintenance',
        label: 'Pemeliharaan',
        icon: 'pi pi-fw pi-wrench',
        url: "/rgpanel/maintenance",
        items: [
          {
            key: 'catatan_perbaikan',
            label: 'Catatan Perbaikan',
            icon: 'pi pi-fw pi-list',
            url: "#",
            items: []
          },
          {
            key: 'catatan_pemeliharaan',
            label: 'Catatan Pemeliharaan',
            icon: 'pi pi-fw pi-list',
            url: "#",
            items: []
          },
          {
            key: 'biaya_pemeliharaan',
            label: 'Biaya Pemeliharaan',
            icon: 'pi pi-fw pi-dollar',
            url: "#",
            items: []
          }
        ]
      },
      {
        key: 'finance',
        label: 'Keuangan',
        icon: 'pi pi-fw pi-chart-bar',
        url: "/rgpanel/finance",
        items: [
          {
            key: 'laporan_pendapatan',
            label: 'Laporan Pendapatan',
            icon: 'pi pi-fw pi-chart-line',
            url: "#",
            items: []
          },
          {
            key: 'laporan_pengeluaran',
            label: 'Laporan Pengeluaran',
            icon: 'pi pi-fw pi-chart-bar',
            url: "#",
            items: []
          },
          {
            key: 'gambaran_keuangan',
            label: 'Gambaran Keuangan',
            icon: 'pi pi-fw pi-chart-pie',
            url: "#",
            items: []
          }
        ]
      },
      {
        key: 'complaint_management',
        label: 'Manajemen Keluhan',
        icon: 'pi pi-fw pi-exclamation-triangle',
        url: "/rgpanel/complaint_management",
        items: [
          {
            key: 'daftar_keluhan',
            label: 'Daftar Keluhan',
            icon: 'pi pi-fw pi-list',
            url: "#",
            items: []
          },
          {
            key: 'laporan_keluhan_baru',
            label: 'Laporan Keluhan Baru',
            icon: 'pi pi-fw pi-plus',
            url: "#",
            items: []
          }
        ]
      }
];

export { FronEndMenu,RgPanelSidebarMenu }