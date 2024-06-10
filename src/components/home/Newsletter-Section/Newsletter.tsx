import React from 'react'
import styles from '@/styles/home/newsletter-section/newsletter.module.scss';
//ANCHOR - components
import { Col, Container, Row } from 'react-bootstrap'
//ANCHOR - project components
import InputFieldComponent from './Newsletter/InputFieldComponent';

export default function Newsletter() {
  return (
    <div className={`${styles.main_container} py-5`}>
      <Container className='py-5'>
        <Row className='align-items-center gy-5 gy-md-0'>
          <Col xs={12} md={7}>
            <h1 className={`${styles.heading} fw-medium`}>Get In With Some Pet News</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
          </Col>
          <Col xs={12} md={5}>
            <InputFieldComponent />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
