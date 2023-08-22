'use client'
import { Skeleton, SkeletonProps } from "primereact/skeleton"

interface PrimeSkeletonInterface extends SkeletonProps {
    children?: React.ReactNode
}
const PrimeSkeleton = ({ children, ...rest }: PrimeSkeletonInterface) => {
    return <Skeleton {...rest}>{children}</Skeleton>
}
export default PrimeSkeleton