import { fetchHeader } from "@/utils/fetching/fetch"

const getFeatures = async () => {
    const { headers, user } = await fetchHeader()
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/features`, {
        headers,
        cache: "no-cache"
    })
    if (res.status != 200) {
        throw new Error(res.statusText)
    }
    return { user, ...await res.json() }
}
export default getFeatures