import PrimeSkeleton from "@/components/core/Skeleton/PrimeSkeleton";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <>
            <div className="flex mb-2">
                <PrimeSkeleton width="20%" height="30px"></PrimeSkeleton>
            </div>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                <PrimeSkeleton width="100%" height="30px"></PrimeSkeleton>
                <PrimeSkeleton width="100%" height="30px"></PrimeSkeleton>
                <PrimeSkeleton width="100%" height="30px"></PrimeSkeleton>
                <PrimeSkeleton width="100%" height="30px"></PrimeSkeleton>
                <PrimeSkeleton width="100%" height="30px"></PrimeSkeleton>
                <PrimeSkeleton width="100%" height="30px"></PrimeSkeleton>
                <PrimeSkeleton width="100%" height="30px"></PrimeSkeleton>
                <PrimeSkeleton width="100%" height="30px"></PrimeSkeleton>
                <PrimeSkeleton width="100%" height="30px"></PrimeSkeleton>
                <PrimeSkeleton width="100%" height="30px"></PrimeSkeleton>
                <PrimeSkeleton width="100%" height="30px"></PrimeSkeleton>
                <PrimeSkeleton width="100%" height="30px"></PrimeSkeleton>
            </div>
            <div className="flex items-center justify-center mt-2 gap-2">
                <PrimeSkeleton size="3rem" shape="circle"></PrimeSkeleton>
                <PrimeSkeleton size="4rem" shape="circle"></PrimeSkeleton>
                <PrimeSkeleton size="3rem" shape="circle"></PrimeSkeleton>
            </div>
        </>
    )
}
