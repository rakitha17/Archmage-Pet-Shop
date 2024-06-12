import React from "react"
import styles from "@/styles/home/newsletter-section/input-field-component.module.scss"
//ANCHOR - components
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"

function InputFieldComponent() {
  return (
    <InputGroup className={`${styles.input_group}`} size="lg">
      <Form.Control
        type="email"
        placeholder="Enter your email address"
        aria-label="Enter your email address"
        aria-describedby="basic-addon2"
        className={`${styles.input_field} fw-light`}
      />
      <Button className={`${styles.submit_btn} fw-medium`} id="button-addon2">
        Subscribe
      </Button>
    </InputGroup>
  )
}

export default InputFieldComponent

//NOTE - previous button group
/* <div className={styles.form_container}>
  <div className={styles.input_field_container}>
    <Form.Control
      type="email"
      placeholder="Enter your email address"
      className={`${styles.input_field} rounded-0`}
    />
  </div>
  <div className={styles.btn_container}>
    <Button type="submit" className={`${styles.submit_btn} btn rounded-0`}>
      Subscribe
    </Button>
  </div>
</div> */
