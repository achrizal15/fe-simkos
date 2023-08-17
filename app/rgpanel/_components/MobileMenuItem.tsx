import Link from "next/link"
import SidebarMenuItemInterface from "utils/Interfaces/SidebarMenuItemInterface"

const MobileMenuItem = ({ item }: { item: SidebarMenuItemInterface }) => {
    return (
        <Link href={item.url}>
            <div className="w-full h-full rounded-lg bg-purple-700 hover:bg-purple-800 text-white shadow-lg hover:shadow-lg text-center flex justify-center items-center flex-col p-3">
                <i className={`${item.icon} text-3xl`}></i>
                <p className="font-semibold">{item.label}</p>
            </div>
        </Link>
    )
}
export default MobileMenuItem