'use client'
import { signIn } from "next-auth/react";
import Button from "@/components/core/Button"
import ErrorHandle from "./ErrorHandle";
import { useRouter } from "next/navigation";
import useSWRMutation from 'swr/mutation'

const FormLoginSubmit = ({ children }: { children: React.ReactNode }) => {
    const navigate = useRouter()
    const submit = async (url: string, { arg }: { arg: { credentials: string, password: string } }) => {
        const loginCredentials = await signIn('credentials', { credentials: arg.credentials, password: arg.password, callbackUrl: url, redirect: false })
        if (loginCredentials.error == null) {
            return loginCredentials
        }
        throw new Error("Invalid credentials");
    }
    const { data, isMutating, error, trigger } = useSWRMutation('/rgpanel', submit, {
        onSuccess(data) {
            navigate.push(data.url)
        },
    })
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const credentials = event.target[0].value
        const password = event.target[1].value
        await trigger({ password, credentials })
    };
    return (
        <form onSubmit={handleSubmit} className="mt-5 w-full">
            {error && <ErrorHandle data={{}} />}
            {data && <ErrorHandle data={{ severity: 'success', detail: 'Waiting for redirect.', summary: 'Success' }} />}
            {children}
            <Button className="w-full" disabled={isMutating}>
                {isMutating ? 'Loading' : 'Login to panel'}
            </Button>
        </form>
    )
}

export default FormLoginSubmit