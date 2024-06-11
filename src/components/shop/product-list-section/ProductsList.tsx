import React from "react"
//ANCHOR - components
import { Col, Container, Row } from "react-bootstrap"
//ANCHOR - project components
import SingleShopItem from "@/components/home/Shop-Section/HomeShopSection/SingleShopItem"
import ShopButtonComponent from "@/components/home/Shop-Section/HomeShopSection/ShopButtonComponent"
//ANCHOR - resources
import image1 from "../../../../public/images/shop/product1.png"
import image2 from "../../../../public/images/shop/product2.png"
import image3 from "../../../../public/images/shop/product3.png"
import image4 from "../../../../public/images/shop/product4.png"
import image5 from "../../../../public/images/shop/product5.png"
import image6 from "../../../../public/images/shop/product6.png"
import image7 from "../../../../public/images/shop/product7.png"
import image8 from "../../../../public/images/shop/product8.png"

const productList = [
  { image: image1, name: "Dogs Foods", price: "200" },
  { image: image2, name: "Dogs Foods", price: "150" },
  { image: image3, name: "Shampoo", price: "300" },
  { image: image4, name: "Vitamins", price: "200" },
  { image: image5, name: "Shampoo", price: "300" },
  { image: image6, name: "Vitamines", price: "200" },
  { image: image7, name: "Dogs Foods", price: "200" },
  { image: image8, name: "Dogs Foods", price: "150" },
]

export default function ProductsList() {
  return (
    <section className="py-5 my-5">
      <Container>
        <div className="pb-5 mb-5">
          <Row className="gy-4">
            {productList.map((val, idx) => {
              return (
                <Col xs={12} md={6} lg={3} key={idx}>
                  <SingleShopItem
                    name={val.name}
                    price={val.price}
                    image={val.image}
                  />
                </Col>
              )
            })}
          </Row>
        </div>
        <div className="text-center">
          <ShopButtonComponent btnName="Load More" />
        </div>
      </Container>
    </section>
  )
}
