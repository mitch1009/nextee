'use client'

import { appName } from '@/types/general'
import { useParams } from 'next/navigation'
import React from 'react'

export const Welcome = () => {
  const {id} = useParams()
  return (
    <div>Welcome to {appName} on {id}</div>
  )
}
