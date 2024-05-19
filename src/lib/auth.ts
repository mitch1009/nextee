import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { db } from "./database";
import { AdapterUser } from "next-auth/adapters";
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: TRoleProps[]; // allow user to have multiple roles
    } & AdapterUser;
  }
}

export declare type TRoleProps = "ADMIN" | "USER" | any; // add role type definitions
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  theme: {
    colorScheme: "light",
    logo: "https://nextjs.org/static/twitter-logo.png", // change to your logo
  },
  pages: {
    newUser: "/welcome",
  },

  callbacks: {
    redirect: () => {
      return "/uzar";
    },
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.role = (user as any).role ; // include the role in the session
      }
      return session;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role ; // include the role in the token
      }
      return token; 
    }
  },
  // switch to jwt strategy for the sake of Prisma Provider
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(db) as any,
});
