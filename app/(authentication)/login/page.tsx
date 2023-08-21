import { H3 } from "@/components/core/Headings/Headings"
import { FormGroup, Input } from "@/components/core/Input/Input"
import FormLoginSubmit from "./_components/HandleSubmit"
const Page = () => {

    return (
        <section className="p-2 lg:p-10">
             
            <div className="rounded-lg p-5 lg:px-10 md:h-full w-full bg-white shadow-lg bg-gradient-to-b from-purple-800 from-90% to-purple-600">
                <H3 className="text-white">Login</H3>
                <span className="text-white">Welcome back! Log in to your account.</span>
                <FormLoginSubmit>
                    <FormGroup id="username" label="Username / email">
                        <Input id="username" name="username" type="text" placeholder="Username / email" />
                    </FormGroup>
                    <FormGroup id="password" label="Password">
                        <Input type="password" name="password" placeholder="Password" />
                    </FormGroup>
                    
                </FormLoginSubmit>

            </div>
      
        </section>)
}
export default Page