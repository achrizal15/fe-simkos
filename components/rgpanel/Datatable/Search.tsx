
import { useEffect, useState } from "react"
import { useDebounce } from "usehooks-ts"
interface SearchInterface extends React.InputHTMLAttributes<HTMLInputElement> {
    debounce: {
        (value: string)
    }
}
const Search = ({ debounce = () => { }, ...rest }: SearchInterface) => {
    const [value, setValue] = useState<string>('')
    const debouncedValue = useDebounce(value, 800)

    // Fetch API (optional)
    useEffect(() => {
        debounce(debouncedValue)
    }, [debouncedValue])
    return <div className="flex justify-content-end md:w-auto w-full">
        <span className="p-input-icon-left w-full">
            <i className="pi pi-search" />
            <input type="text"
                className={`bg-white focus:outline-none w-full p-2 pl-8 shadow-lg text-gray-600 font-thin ${rest.className}`} placeholder="Search name"
                onChange={(event) => setValue(event.target.value)}
                {...rest} />
        </span>
    </div>
}
export default Search