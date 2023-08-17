import Button from "@/components/core/Button"
import DividerClient from "@/components/core/Divider/Divider"
import { H3 } from "@/components/core/Headings/Headings"
import { FormGroup, Input } from "@/components/core/Input/Input"
import ButtonLoginWithOther from "./_components/ButtonLoginWithOther"

const Page = () => {
    return (
        <section className="p-2 lg:p-10">
            <div className="rounded-lg p-5 lg:px-10 md:h-full w-full bg-white shadow-lg bg-gradient-to-b from-purple-800 from-90% to-purple-600">
                <H3 className="text-white">Login</H3>
                <span className="text-white">Welcome back! Log in to your account.</span>
                <form action="" className="mt-5 w-full">
                    <FormGroup id="username" label="Username / email">
                        <Input id="username" type="text" placeholder="Username / email" />
                    </FormGroup>
                    <FormGroup id="password" label="Password">
                        <Input type="password" placeholder="Password" />
                    </FormGroup>
                    <Button className="w-full">Login to panel</Button>
                </form>
                <DividerClient>
                    <span className="bg-purple-800 px-2 font-semibold text-white">Sign With</span>
                </DividerClient>
                <div className="flex items-center justify-center gap-3">
                    <ButtonLoginWithOther icon="pi pi-google" signProvider="google"/>
                </div>
            </div>
        </section>)
}
export default Page