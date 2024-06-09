"use client"

import React from 'react'
import styles from "@/styles/testimonials-section/testimonials.module.scss"
//ANCHOR - components
import { Container } from 'react-bootstrap'
//ANCHOR - project components
import SwiperComponent from './Testimonials/SwiperComponent'

export default function Testimonials() {
  return (
    <Container>
      <div className="text-center mb-5">
        <h1 className="h6 fw-light">Testimonial</h1>
        <h2 className={`${styles.heading} h1 fw-bold`}>
        Furry Friends’ Raves
        </h2>
      </div>
      <div className='py-5'>
        <SwiperComponent />
      </div>
    </Container>
  )
}
