import { ALBERT_SANS_500, ALBERT_SANS_700 } from "constant/fonts"
import AvatarNavbar from "./AvatarNavbar"

const Navbar = () => {
    return <nav className="fixed top-0 left-0 right-0 py-3 bg-white shadow-lg z-10">
        <div className="container flex justify-between items-center">
            <div className={`${ALBERT_SANS_700.className} font-bold text-2xl`}>
                SIMKOS
            </div>

            <AvatarNavbar icon="pi pi-user" label="V" image="" />
        </div>
    </nav>
}
export default Navbar