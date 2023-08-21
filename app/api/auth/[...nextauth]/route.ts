import NextAuth from "next-auth/next";
import nextAuthOptions from "@/constant/nextAuthOption";

const handler = NextAuth(nextAuthOptions)
export { handler as GET, handler as POST }