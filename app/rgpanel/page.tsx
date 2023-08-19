
import MobileMenu from "./_components/MobileMenu"
import { useSession } from "next-auth/react"

const Page = () => {
    return (
        <div>
            <MobileMenu />
            Dashboard
        </div>
    )
}
export default Page