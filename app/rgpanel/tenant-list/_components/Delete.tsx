'use client'
import UserJwtInterface from "@/utils/Interfaces/UserJwtInterface"
import { axiosAuthClient } from "@/utils/fetching/axios"
import { useSession } from "next-auth/react"

const Delete = ({ id }: { id: number }) => {
    const session = useSession()
    const handle = async () => { 
        const res = await (await axiosAuthClient(session.data.user)).delete(`tenants/${id}`)
        console.log(res.data)
    }
    return (
        <button onClick={handle}>Delete</button>
    )
}
export default Delete