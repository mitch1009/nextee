
import { auth, signIn, signOut } from "@/lib/auth"
import { Session } from "next-auth"
import { redirect } from "next/navigation"
import { FC } from "react"

export const SigninOutButton: FC<{ option?: string }> = async ({ option = "signin" }) => {
    const session = await auth() as Session
    return (
        <form
            action={async () => {
                "use server"
                if (!session) {
                    await signIn()
                } else {
                    await signOut({ redirect: false, redirectTo: "/" })
                    redirect("/")
                }
            }}
        >

            <button type="submit" className="bg-[#163a59] hover:bg-[#163a59] text-white font-bold py-2 text-lg px-4 rounded">
                <span>
                    {session ? <span>Sign out {session.user.name}</span> : <span>Sign in</span>}
                </span>
            </button>

        </form>
    )
} 