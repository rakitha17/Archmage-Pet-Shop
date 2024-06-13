import React from 'react'
//ANCHOR - project components
import { BreadCrumbComponent } from '@/components/Breadcrumb/breadcrumb'
import PrivacyPolicyBanner from '@/components/privacy-policy/banner-section/PrivacyPolicyBanner'
import PrivacyPolicyBody from '@/components/privacy-policy/body-section/PrivacyPolicyBody'

export default function PrivacyPolicy() {
  return (
    <>
      <PrivacyPolicyBanner />
      <BreadCrumbComponent />
      <PrivacyPolicyBody />
    </>
  )
}
