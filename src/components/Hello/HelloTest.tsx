'use client'
import { trpClient } from '@/server/trpc/client'
import React from 'react'

export const HelloTest = ({option}: any) => {
  const trpc = trpClient.main.hello.useQuery({name: option})
  return (
    <div className='text-2xl p-8 border border-dashed mx-auto max-w-3xl bg-gray-100 my-8'>
      <pre>
        {JSON.stringify(trpc.data, null, 2)}
      </pre>
    </div>
  )
}
