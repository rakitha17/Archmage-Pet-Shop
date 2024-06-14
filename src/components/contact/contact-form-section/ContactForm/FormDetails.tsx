"use client"

import React from "react"
import styles from "@/styles/contact/contact-form-section/form-details.module.scss"
//ANCHOR - components
import Form from "react-bootstrap/Form"
import { Button } from "react-bootstrap"

function FormDetails() {
  return (
    <div className={`${styles.form_container} p-5 shadow-sm rounded-2`}>
      <Form>
        <Form.Group className="pb-2 mb-4" controlId="exampleForm.ControlInput1">
          <Form.Label>Name *</Form.Label>
          <Form.Control
            type="text"
            className={`${styles.input_fields} border-0 rounded-0`}
          />
        </Form.Group>
        <Form.Group className="pb-2 mb-4" controlId="exampleForm.ControlInput2">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            className={`${styles.input_fields} border-0 rounded-0`}
          />
        </Form.Group>
        <Form.Group className="pb-2 mb-4" controlId="exampleForm.ControlInput3">
          <Form.Label>Phone *</Form.Label>
          <Form.Control
            type="tel"
            className={`${styles.input_fields} border-0 rounded-0`}
          />
        </Form.Group>
        <Form.Group
          className="pb-2 mb-4"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            className={`${styles.input_fields} border-0 rounded-0`}
          />
        </Form.Group>
        <div className="text-center">
          <Button type="submit" className={`${styles.submit_btn} btn fw-bold`}>
            Send
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default FormDetails
