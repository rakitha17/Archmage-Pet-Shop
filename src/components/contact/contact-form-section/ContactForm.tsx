import React from "react"
//ANCHOR - components
import { Col, Container, Row } from "react-bootstrap"
//ANCHOR - project components
import ContactDetails from "./ContactForm/ContactDetails"
import FormDetails from "./ContactForm/FormDetails"

export default function ContactForm() {
  return (
    <section className="py-5 my-5">
      <Container>
        <Row className="g-5 align-items-center">
          <Col xs={12} lg={6}>
            <div className="mb-5 mb-lg-0">
              <ContactDetails />
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="mt-5 mt-lg-0">
              <FormDetails />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
