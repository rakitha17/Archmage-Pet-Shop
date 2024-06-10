"use client"

import React from "react"
import styles from "@/styles/common/footer-section/footer.module.scss"
//ANCHOR - components
import { Container, Nav } from "react-bootstrap"
import Image from "next/image"
import Link from "next/link"
//ANCHOR - resources
import logoIcon from "../../../../public/images/common/footer-section/LOGO.png"
import whatspp from "../../../../public/images/common/footer-section/whatsapp.svg"
import facebook from "../../../../public/images/common/footer-section/facebook.svg"
import instagram from "../../../../public/images/common/footer-section/instagram.svg"
import youtube from "../../../../public/images/common/footer-section/youtube.svg"
import navigationIcon from "../../../../public/images/common/footer-section/location.svg"
import telephoneIcon from "../../../../public/images/common/footer-section/telephone.svg"

const socialLinks = [
  { icon: whatspp, path: "/", alt: "Connect with whatsapp" },
  { icon: facebook, path: "/", alt: "Connect with facebook" },
  { icon: instagram, path: "/", alt: "Connect with instagram " },
  { icon: youtube, path: "/", alt: "Connect with youtube" },
]

const footerNavLinks = [
  { item: "Home", path: "/" },
  { item: "About Us", path: "/about-us" },
  { item: "Shop", path: "/shop" },
  { item: "Blogs", path: "/blogs" },
  { item: "FAQs", path: "/faqs" },
  { item: "Contact Us", path: "/contact-us" },
  { item: "Privacy Policy", path: "/privacy-policy" },
  { item: "Terms & Conditions", path: "/terms-and-conditions" },
]

export default function Footer() {
  return (
    <>
      <footer className={`${styles.footer_section} py-5`}>
        <Container className="text-center py-5">
          <Link href={"/"}>
            <Image
              src={logoIcon}
              alt="Home of Brocelle"
              width={90}
              height={90}
            />
          </Link>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
            <br /> incididunt ut labore et dolore magna.
          </p>
          <div className="d-flex justify-content-center">
            {socialLinks.map((val, idx) => {
              return (
                <Link key={idx} href={val.path} className="mx-2">
                  <span
                    className={`${styles.social_icon_container} d-block`}
                    role="img"
                  >
                    <Image
                      src={val.icon}
                      alt={val.alt}
                      className={styles.social_icons}
                    />
                  </span>
                </Link>
              )
            })}
          </div>
          <div>
            <address>
              <div className="d-flex flex-column flex-md-row justify-content-center my-5 mt-md-4 py-5 py-md-0">
                <span className="d-flex align-items-center justify-content-center me-md-5 mb-4 mb-md-0">
                  <Image src={navigationIcon} alt="" className="me-3 " />
                  <p className="m-0">Lorem ipsum dolor sit amet, consectetur</p>
                </span>
                <span className="d-flex align-items-center justify-content-center">
                  <Image src={telephoneIcon} alt="" className="me-3 " />
                  <p className="m-0 text-white text-decoration-none">
                    +123 456 7890
                  </p>
                </span>
              </div>
            </address>
          </div>
          <div>
            <Nav className="flex-column flex-lg-row justify-content-center">
              {footerNavLinks.map((val, idx) => {
                return (
                  <Nav.Link
                    key={idx}
                    href={val.path}
                    className="text-white text-decoration-none mb-2"
                  >
                    {val.item}
                  </Nav.Link>
                )
              })}
            </Nav>
          </div>
        </Container>
      </footer>
      <div className="bg-black py-3">
        <Container className="d-lg-flex justify-content-between text-white text-center text-lg-start">
          <p className="m-0"><small className="me-2">Copyright © {`${new Date().getFullYear()}`} Pet Shop (Pvt) Ltd.</small><small>All Rights Reserved.</small></p>
          <p className="m-0"><small className="me-2">Designed & Developed By</small><small className={styles.archmage}>Archmage Solutions</small></p>
        </Container>
      </div>
    </>
  )
}
