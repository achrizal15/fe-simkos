'use client'
import PrimeButton from "@/components/core/Button/PrimeButton"
import { useBreadcrumb } from "context/BreadCrumb.context"
import Link from "next/link"
import { useEffectOnce } from "usehooks-ts"

interface ContentProps {
    children: React.ReactNode,
    title: string,
    subTitle?: string,
    buttonBackLabel?: string,
    buttonBackUrl?: string,
    buttonBackVisibility?: boolean
}
const Content: React.FC<ContentProps> = ({ children, title, subTitle = "", buttonBackLabel = "Kembali", buttonBackUrl = "/rgpanel", buttonBackVisibility = true }) => {
    const { dispatch } = useBreadcrumb()
    useEffectOnce(() => {
        dispatch({ type: "SET_BREADCRUMB", "payload": { label: title, url: subTitle } })
    })
    return <section className="pt-5 mb-5">
        {buttonBackVisibility
            && <Link href={buttonBackUrl} >
                <PrimeButton icon="pi pi-arrow-left" className="mb-5 gap-2" rounded={false} >
                    {buttonBackLabel}
                </PrimeButton>
            </Link>}
        {children}
    </section>
}
export default Content