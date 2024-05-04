import { helloAction } from '@/server/actions'
import React from 'react'

async function ActionsPage() {
    const hello = helloAction("Server Actions")
  return (
    <div className='text-2xl rounded-md p-8 border border-dashed mx-auto max-w-3xl bg-gray-100 my-8'>
        {hello}
    </div>
  )
}

export default ActionsPage