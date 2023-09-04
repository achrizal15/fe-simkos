import Content from "@/components/rgpanel/content/Content"
import MobileMenu from "./_components/MobileMenu"

const Page = () => {
    return (
        <Content title="Dashboard" buttonBackVisibility={false}>
            <MobileMenu />
        </Content>
    )
}
export default Page