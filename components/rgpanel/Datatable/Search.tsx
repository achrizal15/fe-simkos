'use client'
import PrimeInputText from "@/components/core/Input/PrimeInputText"
import { InputTextProps } from "primereact/inputtext"
import { useEffect, useState } from "react"
import { useDebounce } from "usehooks-ts"
interface SearchInterface extends InputTextProps {
    debounce: {
        (value: string)
    }
}
const Search = ({ debounce = (value) => { }, ...rest }: SearchInterface) => {
    const [value, setValue] = useState<string>('')
    const debouncedValue = useDebounce(value, 800)

    // Fetch API (optional)
    useEffect(() => {
        debounce(debouncedValue)
    }, [debouncedValue])
    return <div className="flex justify-content-end md:w-auto w-full">
        <span className="p-input-icon-left w-full">
            <i className="pi pi-search" />
            <PrimeInputText placeholder="Search name"
            className="w-full md:w-auto"
                onChange={(event) => setValue(event.target.value)}
                {...rest}/>
        </span>
    </div>
}
export default Search