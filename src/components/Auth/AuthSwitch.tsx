import React from 'react'
import { TAuthOption } from './AuthDto'

export const AuthSwitch = (): Record<Partial<TAuthOption>, React.ReactNode> => {
    return {
        signin: <div>signin</div>,
        signup: <div>signup</div>,
        "verify-request": <div>verifyRequest</div>,
        "forgot-password": <div>forgotPassword</div>,
        "reset-password": <div>resetPassword</div>,
    }
}
