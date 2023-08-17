import DynamicBreadCrumb from "./DynamicBreadCrumb"
interface ContentProps {
    children: React.ReactNode
}
const Content: React.FC<ContentProps> = ({ children }) => {
    return (
        <>
            <section className="mb-5">
                <DynamicBreadCrumb />
                {children}
            </section>
        </>
    )
}
export default Content