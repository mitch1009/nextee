import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth, { DefaultSession } from "next-auth"
import Google from "next-auth/providers/google"
import { db } from "./database"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role: "ADMIN" | "USER"
    } & DefaultSession["user"]
  }
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [ Google],
  pages: {
    newUser:"/welcome",
    signIn: "/auth/signin",
  },
  callbacks: {
    redirect: () => {
      return "/uzar"
    }
  },
  adapter: PrismaAdapter(db),
})