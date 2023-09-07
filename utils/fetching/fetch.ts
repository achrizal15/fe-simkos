import nextAuthOptions from "@/constant/nextAuthOption"
import UserJwtInterface from "../Interfaces/UserJwtInterface"
import { getServerSession } from "next-auth"
const API_URL=process.env.NEXT_PUBLIC_API_URL
const fetchHeader = async() => {
    const { user }: { user: UserJwtInterface } = await getServerSession(nextAuthOptions)
    return {
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${user.token}`
        },
        user
    };
}
export {fetchHeader,API_URL}