'use client'
import { ALBERT_SANS_700 } from "constant/fonts"
import { useBreadcrumb } from "context/BreadCrumb.context";
const DynamicBreadCrumb = () => {
    const { state } = useBreadcrumb();
    return (
        <div>
            <div className={`${ALBERT_SANS_700.className} font-bold`}>
                {state.label}
            </div>
            <p className="text-gray-700 text-xs">
                {state.url}
            </p>
        </div>
    )
}
export default DynamicBreadCrumb