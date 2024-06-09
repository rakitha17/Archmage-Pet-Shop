import React from "react"
import styles from "@/styles/home/shop-section/home-shop-section.module.scss"
//ANCHOR - components
import { Container, Row, Col } from "react-bootstrap"
//ANCHOR - project components
import SingleShopItem from "./HomeShopSection/SingleShopItem"
//ANCHOR - resources
import image1 from "../../../../public/images/home/shop-section/1.png"
import image2 from "../../../../public/images/home/shop-section/2.png"
import image3 from "../../../../public/images/home/shop-section/3.png"
import image4 from "../../../../public/images/home/shop-section/4.png"
import ShopButtonComponent from "./HomeShopSection/ShopButtonComponent"

const shopItems = [
  { name: "dogs foods", image: image1, price: "200" },
  { name: "dogs foods", image: image2, price: "150" },
  { name: "shampoo", image: image3, price: "300" },
  { name: "vitamins", image: image4, price: "200" },
]

export default function HomeShopSection() {
  return (
    <Container>
      <div className="text-center mb-5">
        <h1 className="h6 fw-light">Shop</h1>
        <h2 className={`${styles.heading} h1 fw-bold`}>
          Furry Friends Emporium
        </h2>
      </div>
      <div className="py-5 mb-5">
        <Row className="gy-4">
          {shopItems.map((val, idx) => {
            return (
              <Col xs={12} md={6} lg={3}>
                <SingleShopItem
                  key={idx}
                  name={val.name}
                  image={val.image}
                  price={val.price}
                />
              </Col>
            )
          })}
        </Row>
      </div>
      <div className="mb-5 text-center">
        <ShopButtonComponent btnName="Shop More" />
      </div>
    </Container>
  )
}
