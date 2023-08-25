import NextAuth from "next-auth/next";
// import nextAuthOptions from "@/constant/nextAuthOption";
import { NextAuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import UserJwtInterface from "@/utils/Interfaces/UserJwtInterface";

const nextAuthOptions: NextAuthOptions = {
    providers: [
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET
        // }),
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                credential: { label: 'Username or Email', type: 'text' },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept':'application/json'
                        },
                        body: JSON.stringify(credentials),
                    });
                    if (res.status == 200) {
                        const data = await res.json();
                        return { ...data.user, token: data.token };
                    }
                   
                    return null
            }
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user }
        },
        async session({ session, token, user }) {
            const userData: UserJwtInterface = <UserJwtInterface>{
                name: token.name,
                token: token.token,
                email: token.email
            }
            session.user = userData

            return session;
        }
    },
    pages: {
        error: '/login',
        signIn: '/login',
    }
}
const handler = NextAuth(nextAuthOptions)
export { handler as GET, handler as POST }