import AvatarNavbar from "./AvatarNavbar"
import DynamicBreadCrumb from "./DynamicBreadCrumb";

const Navbar = () => {
  
    return <nav className="fixed top-0 left-0 right-0 py-3 bg-white shadow-lg z-10">
        <div className="container lg:pl-32 flex justify-between items-center">
           <DynamicBreadCrumb/>

            <AvatarNavbar icon="pi pi-user" label="V" image="" />
        </div>
    </nav>
}
export default Navbar