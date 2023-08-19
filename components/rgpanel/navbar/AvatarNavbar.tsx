"use client"
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
    console.log(session)
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
    return (<>
        <Menu model={items} popup ref={menuRight} id="popup_menu_left" popupAlignment="right" />
        <div className="flex items-center gap-2 cursor-pointer" onClick={(event) => menuRight.current.toggle(event)}>
            <Avatar icon={icon} className="font-semibold p-overlay-badge w-10 h-10" label={label} image={image} shape="circle"  >
            </Avatar>
            <p className="font-semibold text-gray-800">Rachel Velicia</p>
            <i className="pi pi-angle-down"></i>
        </div>

    </>)
}
export default AvatarNavbar