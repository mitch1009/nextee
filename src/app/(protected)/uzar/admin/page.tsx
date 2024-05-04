import { AdminGuard } from '@/components/AdminGuard'
import React from 'react'

async function page() {
  return (
    <div>
        <AdminGuard>
            <h1>admin Page </h1>
        </AdminGuard>
    </div>
  )
}

export default page