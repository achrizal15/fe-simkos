'use client'
import { signIn } from 'next-auth/react'
const ButtonLoginWithOther = ({ signProvider,icon }: { signProvider: string,icon:string }) => {
    return (
        <div onClick={() => signIn(signProvider)} className="h-8 w-8 cursor-pointer flex items-center justify-center bg-white shadow-lg rounded-full ">
            <i className={`${icon} text-gray-500`}></i>
        </div>
    )
}
export default ButtonLoginWithOther