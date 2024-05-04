'use client'
import { trpClient } from '@/server/trpc/client'
import React from 'react'

export const HelloTest = ({ option }: any) => {
 const c=  trpClient.main.hello
  const data = {
    trpc: c.useQuery({ name: option }),
  }
  return (
    Object.entries(data).map(([k, v]:any) => <div key={k} className='text-2xl rounded-md p-8 border border-dashed mx-auto max-w-3xl bg-gray-100 my-8'>
      {k==='trpc' ? v['data'] : v}
    </div>
    ))
}
