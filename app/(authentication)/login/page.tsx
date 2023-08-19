'use client'
import Button from "@/components/core/Button"
import { useSearchParams } from 'next/navigation'
import { H3 } from "@/components/core/Headings/Headings"
import { FormGroup, Input } from "@/components/core/Input/Input"
import { signIn } from "next-auth/react"

const Page = () => {
    // credentials
    const searchParam=useSearchParams()
    const error=searchParam.get('error')
    const handleSubmit =async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const credentials = event.target[0].value
        const password = event.target[1].value
        signIn('credentials', { credentials, password,callbackUrl:'/rgpanel',redirect:true })
        .then(res=>console.log(res))
        .catch(err=>{
            console.log(err)
        })
    };

    return (
        <section className="p-2 lg:p-10">
            <div className="rounded-lg p-5 lg:px-10 md:h-full w-full bg-white shadow-lg bg-gradient-to-b from-purple-800 from-90% to-purple-600">
                <H3 className="text-white">Login</H3>
                <span className="text-white">Welcome back! Log in to your account.</span>
        
                <form onSubmit={handleSubmit} className="mt-5 w-full">
                <div className="text-red-700 font-semibold">
                {error&&`${error} not valid.`}
                </div>
                    <FormGroup id="username" label="Username / email">
                        <Input id="username" name="username" type="text" placeholder="Username / email" />
                    </FormGroup>
                    <FormGroup id="password" label="Password">
                        <Input type="password" name="password" placeholder="Password" />
                    </FormGroup>
                    <Button className="w-full">Login to panel</Button>
                </form>
               
            </div>
        </section>)
}
export default Page