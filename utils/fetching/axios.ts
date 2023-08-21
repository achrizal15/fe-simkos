import nextAuthOptions from "@/constant/nextAuthOption"
import axios from "axios"
import { getServerSession } from "next-auth"
import UserJwtInterface from "../Interfaces/UserJwtInterface"

export const axiosAuthServer = async () => {
    const { user }: { user: UserJwtInterface } = await getServerSession(nextAuthOptions)
    return axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'appication/json',
            Authorization: `Bearer ${user.token}`
        }
    })
}
export const axiosAuthClient = async (credentials: any) => {
    const user: UserJwtInterface = <UserJwtInterface>credentials
    return axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'appication/json',
            Authorization: `Bearer ${user.token}`
        }
    })
}
