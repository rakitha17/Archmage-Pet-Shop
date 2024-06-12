import React from 'react'
import styles from '@/styles/contact/banner-section/contact-banner.module.scss'

export default function ContactBanner() {
  return (
    <div className={`${styles.banner_image_container} position-relative`}>
      <div className="container">
        <div className={`${styles.banner_text} position-absolute`}>
          <h1 className="display-3 text-white fw-bold">
            Contact Pet Haven
          </h1>
        </div>
      </div>
    </div>
  )
}
