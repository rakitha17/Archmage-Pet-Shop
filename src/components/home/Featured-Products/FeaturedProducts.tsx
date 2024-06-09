import React from "react"
//ANCHOR - components
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
//ANCHOR - resources
import dogImage from "../../../../public/images/home/featured-products/1.png"
import catImage from "../../../../public/images/home/featured-products/2.png"
import birdImage from "../../../../public/images/home/featured-products/3.png"
import fishImage from "../../../../public/images/home/featured-products/4.png"
import SingleProduct from "./FeaturedProducts/SingleProduct"

const productItems = [
  { image: dogImage, name: "dogs foods" },
  { image: catImage, name: "cats foods" },
  { image: birdImage, name: "birds foods" },
  { image: fishImage, name: "fish foods" },
]

function FeaturedProducts() {
  return (
    <Container>
      <Row className="gy-4">
        {productItems.map((val, idx) => {
          return (
            <Col xs={12} md={6} lg={3}>
              <SingleProduct key={idx} image={val.image} name={val.name} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default FeaturedProducts
