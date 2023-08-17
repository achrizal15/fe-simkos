const Input = ({ ...rest }: React.InputHTMLAttributes<HTMLInputElement>) => {
    return <input {...rest} className={`p-2 w-full rounded-lg focus:outline-none ${rest.className}`} />
}
const FormGroup = ({ children,label,id }: { children: React.ReactNode,label:string,id:string }) => {
    return (
        <div className="mb-5">
            <label htmlFor={id} className="text-white mb-2">{label}</label>
            {children}
        </div>
    )
}
export { Input, FormGroup }