import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth, { DefaultSession } from "next-auth"
import azureAd from "next-auth/providers/microsoft-entra-id"
import Google from "next-auth/providers/google"
import { db } from "./database"
import { env } from "process"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role: "ADMIN" | "USER"
    } & DefaultSession["user"]
  }
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [env.NODE_ENV === "development" ? Google : azureAd],
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