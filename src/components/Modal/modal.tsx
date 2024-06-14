"use client";

import React from "react";
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";
import styles from "./modal.module.scss";
import Image from "next/image";
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import popupImage from "./../../images/modal/adorable-dog-with-owner-pet-shop (1)@2x.png"; // Use your actual image

interface ModalComponentProps {
  show: boolean;
  handleClose: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  show,
  handleClose,
}) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Body className={styles.modalBody}>
        <Container className="p-0">
          <Row>
            <Col md={4}>
              <Image
                src={popupImage}
                alt="Sample Image"
                layout="responsive"
                className={`${styles.PopImage} d-flex`}
              />
            </Col>
            <Col md={8}>
              <div className={styles.content}>
                <h2 className={styles.label}>The Best Pets Foods</h2>
                <h3 className={styles.discount}>Get 30% Off</h3>
                <p className={styles.sub}>
                  Subscribe now and receive a discount on your first order.
                </p>
                <Row className="row-cols-2">
                  <Form className="m-0 p-0">
                    <Form.Group
                      className={`${styles.fromG} mb-3 cols col-md-12`}
                      controlId="formBasicEmail"
                    >
                      <Form.Control
                        type="email"
                        placeholder="Enter Your Email Address"
                        className={styles.formC}
                      />
                    </Form.Group>
                  </Form>
                  <Button
                    variant="primary"
                    type="submit"
                    className={`${styles.subscribeButton} col-md-4`}
                  >
                    Subscribe
                  </Button>
                </Row>
                <p className={styles.signup}>Signup for exclusive updates</p>
                <div className={styles.socialIcons}>
                  <FaWhatsapp />
                  <FaFacebook />
                  <FaInstagram />
                  <FaYoutube />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
