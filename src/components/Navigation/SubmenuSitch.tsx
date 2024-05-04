import React from 'react'
import { AdminData, ProfileData } from './MenuData'
import CustomLink from './CustomLink'
export const SubmenuSwitch = () => {
  return {
    profile: <CustomLink data={ProfileData} />,
    admin: <CustomLink data={AdminData} />

  }
}