import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
interface UserJwt extends JWT {
    token: string,
    email: string,
    name: string
}
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                credential: { label: 'Credential', type: 'text' },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    const res = await fetch(`http://127.0.0.1:8000/api/login`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(credentials),
                    });
                    const data = await res.json();
                    return data.user;
                } catch (error) {
                    return new Error(error)
                }
            }
        }),
    ],
    callbacks: {
        // async jwt({ token, user }) {
        //     return { ...token, ...user }
        // },
        // async session({ session, token, user }) {
        //     const userData: UserJwt = <UserJwt>{
        //         name: token.name,
        //         token: token.token,
        //         email: token.email
        //     }
        //     session.user = userData
        //     return session;
        // }
    },
    pages: {
        error: '/login',
        signIn: '/login',

    }
})
export { handler as GET, handler as POST }