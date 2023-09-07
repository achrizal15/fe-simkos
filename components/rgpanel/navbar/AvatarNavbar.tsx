"use client"
import createAlias from "@/constant/CreateAlias";
import { signOut, useSession } from "next-auth/react";
import { Avatar } from "primereact/avatar"
import { Menu } from "primereact/menu";
import { useRef } from "react";

interface AvatarNavbarInterface {
    icon: string | null,
    label: string,
    image: string,
}

const AvatarNavbar: React.FC<AvatarNavbarInterface> = ({ icon = 'pi pi-user', label = 'V', image = "" }) => {
    const session = useSession()
    const menuRight = useRef(null);
    const items = [
        {
            label: 'Profile',
            icon: 'pi pi-user',
            command: () => {
                console.log("Profile")
            }
        },
        {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => signOut({redirect:true,callbackUrl:'/login'})
        }
    ];
    if(session.status=='loading') return "Loading ..."
    return (<>
        <Menu model={items} popup ref={menuRight} className="mt-4" id="popup_menu_left" popupAlignment="right" />
        <div className="flex items-center gap-2 cursor-pointer" onClick={(event) => menuRight.current.toggle(event)}>
            <Avatar icon={icon} className="font-semibold p-overlay-badge w-10 h-10" label={createAlias(session.data?.user.name)} image={image} shape="circle"  >
            </Avatar>
            <p className="font-semibold text-gray-800 hidden md:block">{session.data?.user.name}</p>
            <i className="pi pi-angle-down"></i>
        </div>

    </>)
}
export default AvatarNavbar