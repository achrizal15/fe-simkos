'use client'
import { useBreadcrumb } from "context/BreadCrumb.context"
import { useEffectOnce } from "usehooks-ts"

interface ContentProps {
    children: React.ReactNode,
    title: string,
    subTitle?: string
}
const Content: React.FC<ContentProps> = ({ children, title, subTitle = "" }) => {
    const { dispatch } = useBreadcrumb()
    useEffectOnce(() => {
        dispatch({ type: "SET_BREADCRUMB", "payload": { label: title, url: subTitle } })
    })
    return <section className="mb-5">
        {children}
    </section>
}
export default Content