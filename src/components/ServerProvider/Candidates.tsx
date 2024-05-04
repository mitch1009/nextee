'use client'
import { trpClient } from '@/server/client'
import React from 'react'

const Candidates = () => {
  const candidate = trpClient.candidate.hello.useQuery({ name: 'Opher' })
 const stats = trpClient.stats.getStats.useQuery()
  return (
    <div>{
        <pre>{JSON.stringify({candidate, stats:stats.data}, null, 2)}</pre>
    }</div>
  )
}

export default Candidates