'use client'
import { trpClient } from '@/server/trpc/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/react-query'
import React, { useState } from 'react'
import superjson from 'superjson'
/**
 * Creates a server provider component that wraps the given children with a trpc client and a query client.
 *
 * @param {Object} props - The props object.
 * @param {string} props.url - The URL of the server.
 * @param {React.ReactNode} props.children - The children to be wrapped by the server provider.
 * @return {JSX.Element} The server provider component.
 */
const ServerProvider = ({ children, url }: { url: string, children: React.ReactNode }) => {
    const [queryCliet] = useState(() => new QueryClient())
    const [trpcClientInstance] = useState(trpClient.createClient({
        links: [
            httpBatchLink({
                transformer: superjson,
                url,
            })
        ]
    }))
    return (
        <trpClient.Provider client={trpcClientInstance} queryClient={queryCliet}>
            <QueryClientProvider client={queryCliet}>
                {children}
            </QueryClientProvider>
        </trpClient.Provider>
    )
}

export default ServerProvider