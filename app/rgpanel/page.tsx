'use client'
import MobileMenu from "./_components/MobileMenu"
import { useSession } from "next-auth/react"

const Page = () => {
    const session = useSession()
    console.log(session)
    return (
        <div>
            <MobileMenu />
            Dashboard {session.data.user.name}
        </div>
    )
}
export default Page