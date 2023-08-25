'use client'
import { signIn } from "next-auth/react";
import { useMutation } from "react-query";
import Button from "@/components/core/Button"
import ErrorHandle from "./ErrorHandle";
import { useRouter } from "next/navigation";

const FormLoginSubmit = ({ children }: { children: React.ReactNode }) => {
    const navigate=useRouter()
    const submit = async (data: React.FormEvent<HTMLFormElement>) => {
        data.preventDefault();
        const credentials = data.target[0].value
        const password = data.target[1].value
        const loginCredentials = await signIn('credentials', { credentials, password, callbackUrl: '/rgpanel', redirect: false })
        if (loginCredentials.error == null) {
            return loginCredentials
        }
        throw new Error("Invalid credentials");
    }
    const { mutate, isLoading, error,isSuccess } = useMutation(submit,{
        onSuccess:(data)=>{
           navigate.push('/rgpanel')
        }
    })
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        mutate(event)
    };
    return (
        <form onSubmit={handleSubmit} className="mt-5 w-full">
            {error && <ErrorHandle data={{}}/>}
            {isSuccess && <ErrorHandle data={{severity:'success',detail:'Waiting for redirect.',summary:'Success'}}/>}
            {children}
            <Button className="w-full" disabled={isLoading}>
                {isLoading ? 'Loading' : 'Login to panel'}
            </Button>
        </form>
    )
}

export default FormLoginSubmit