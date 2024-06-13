import React from 'react'
import styles from '@/styles/privacy-policy/banner-section/privacy-policy-banner.module.scss'

export default function PrivacyPolicyBanner() {
  return (
    <div className={`${styles.banner_image_container} position-relative`}>
      <div className="container">
        <div className={`${styles.banner_text} position-absolute`}>
          <h1 className="display-3 text-white fw-bold">
          Pet Shop Privacy Notice
          </h1>
        </div>
      </div>
    </div>
  )
}
