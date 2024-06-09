import React, { useRef } from "react"
//ANCHOR - components
import Carousel from "react-bootstrap/Carousel"
import { Col, Row } from "react-bootstrap"
//ANCHOR - resources
import styles from "@/styles/testimonials-section/swiper-component.module.scss"
import image from "../../../../public/images/testimonial-section/image.png"
import Image from "next/image"

export const PrevButton = React.forwardRef<HTMLSpanElement>((props, ref) => {
  return (
    <span aria-hidden="true" className={styles.prev_button} ref={ref}></span>
  )
})

export const NextButton = React.forwardRef<HTMLSpanElement>((props, ref) => {
  return (
    <span aria-hidden="true" className={styles.next_button} ref={ref}></span>
  )
})

function SwiperComponent() {
  const prevIconElement = React.useRef<HTMLSpanElement>(null)
  const nextIconElement = React.useRef<HTMLSpanElement>(null)

  React.useEffect(() => {
    let parentElmPrev = prevIconElement.current?.parentElement
    let parentElmNext = nextIconElement.current?.parentElement

    if (parentElmPrev) {
      parentElmPrev.style.opacity = "1"
    }
    if (parentElmNext) {
      parentElmNext.style.opacity = "1"
    }
  }, [])

  return (
    <Carousel
      indicators={false}
      prevIcon={<PrevButton ref={prevIconElement} />}
      nextIcon={<NextButton ref={nextIconElement} />}
    >
      <Carousel.Item>
        <Row className="align-items-center gy-4">
          <Col xs={12} md={2}></Col>
          <Col xs={12} md={5}>
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi.
            </p>
            <p className="mb-0">
              <small>- John Treve -</small>
            </p>
            <div className="d-flex">
              {[1, 2, 3, 4, 5].map((val) => {
                return <span key={val} className={styles.ratings}></span>
              })}
            </div>
          </Col>
          <Col xs={12} md={3}>
            <Image
              src={image}
              alt="Man with a dog"
              className={styles.carousel_image}
            />
          </Col>
          <Col xs={12} md={2}></Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  )
}

export default SwiperComponent

//NOTE - previous written code
/* export const PrevButton = () => {
  return <span aria-hidden="true" className={styles.prev_button}></span>
}

export const NextButton = () => {
  const currentElm = React.useRef<HTMLSpanElement>(null)
  console.log(currentElm)

  if (currentElm.current?.parentElement?.className == "carousel-control-next") {
    console.log("yes")
  } else {
    console.log("no")
  }

  if (currentElm.current?.parentNode?.querySelector(".carousel-control-next")) {
    console.log("yes")
  } else {
    console.log("no")
  }

  return (
    <span
      ref={currentElm}
      aria-hidden="true"
      className={styles.next_button}
    ></span>
  )
}

function SwiperComponent() {
  const prevIconElement = React.useRef<HTMLSpanElement>(null)

  return (
    <Carousel
      indicators={false}
      prevIcon={<PrevButton ref={prevIconElement} />}
      nextIcon={<NextButton />}
    >
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default SwiperComponent */
