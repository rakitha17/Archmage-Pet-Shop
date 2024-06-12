import React from "react"
import styles from "@/styles/shop/banner-section/banner.module.scss"

export default function Banner() {
  return (
    <div className={`${styles.banner_image_container} position-relative`}>
      <div className="container">
        <div className={`${styles.banner_text} position-absolute`}>
          <h1 className="display-3 text-white fw-bold">
            Furry Friends Emporium
          </h1>
        </div>
      </div>
    </div>
  )
}
