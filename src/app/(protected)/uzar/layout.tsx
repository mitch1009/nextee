import React from 'react'
import { auth } from "@/lib/auth"
import { Session } from 'next-auth'
import { NavigationLayout } from '@/components'

async function layout({ children }: any) {
    const { user } = await auth() as Session
    return (
        <div>
            <NavigationLayout session={{user}}>{children}</NavigationLayout>
        </div>
    )
}

export default layout