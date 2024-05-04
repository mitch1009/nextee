'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import { AuthSwitch } from './AuthSwitch'
import { TAuthOption } from './AuthDto'

export const RenderAuth = () => {
    const {option} = useParams()
    const render = AuthSwitch()[option as TAuthOption]
  return (
    <div>
        {render}
    </div>
  )
}
