const Search = ({ ...rest }: React.InputHTMLAttributes<HTMLInputElement>) => {
    return <div className="flex justify-content-end">
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <input type="text" className={`bg-white focus:outline-none p-2 pl-8 shadow-lg text-gray-600 font-thin ${rest.className}`} placeholder="Search name" {...rest} />
        </span>
    </div>
}
export default Search