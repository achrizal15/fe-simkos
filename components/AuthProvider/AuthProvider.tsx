'use client'
import { SessionProvider, SessionProviderProps } from "next-auth/react"
interface AuthProviderProps extends SessionProviderProps {
    children: React.ReactNode
}
const AuthProvider: React.FC<AuthProviderProps> = ({ children, ...rest }) => {
    return (
        <SessionProvider {...rest}>
            {children}
        </SessionProvider>
    )
}
export default AuthProvider