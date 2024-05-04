'use client'
import React from 'react'
import { trpClient } from '@/server/trpc/client'

const TrpcPage = () => {
    const hello = trpClient.main.hello.useQuery({ name: "Trpc" })
    return (
        <div className="text-2xl rounded-md p-8 border border-dashed mx-auto max-w-3xl bg-gray-100 my-8">{
            hello.isLoading ? <div>Loading data...</div> :
                <div>
                    {hello.data}

                </div>
        }</div>
    )
}

export default TrpcPage