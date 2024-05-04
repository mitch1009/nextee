import React from 'react'
import CustomLink from './CustomLink'
import { AdminData, ProfileData } from './MenuData'
export const SubmenuSwitch = () => {
  return {
    profile: <CustomLink data={ProfileData} />,
    admin: <CustomLink data={AdminData} />

  }
}