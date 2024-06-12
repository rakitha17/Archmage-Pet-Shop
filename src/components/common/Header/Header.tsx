"use client"

import React from "react"
import styles from "@/styles/common/header/header.module.scss"
//ANCHOR - components
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

const navbarItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Shop", path: "/shop" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact Us", path: "/contact" },
]

function Header() {
  //SECTION - variables
  const currentPath = usePathname()
  const [expanded, setExpanded] = React.useState<boolean>(false)
  //SECTION - functionalities
  const handleToggle = (nextExpanded: boolean) => {
    setExpanded(nextExpanded)
  }

  return (
    <Navbar
      expand="lg"
      onToggle={handleToggle}
      className={`${
        expanded === false
          ? styles.navigationbar
          : styles.navigationbar_expanded
      } py-0 fixed-top`}
    >
      <Container>
        {expanded === false && (
          <Navbar.Brand href="/" className="py-0">
            <Image
              src="/images/navbar/LOGO.png"
              alt="Home of Borcelle"
              width={90}
              height={90}
            />
          </Navbar.Brand>
        )}
        <div className={`${styles.navbartoggle_container} ms-auto`}>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={styles.toggleBtn}
          >
            {expanded === false ? (
              <FontAwesomeIcon icon={faBars} className="text-white" />
            ) : (
              <FontAwesomeIcon icon={faXmark} className="text-white" />
            )}
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav navbarScroll className="mx-auto text-center">
            <Navbar.Brand href="/" className="d-lg-none mx-auto my-2 my-lg-0">
              <Image
                src="/images/navbar/LOGO.png"
                alt="Home of Borcelle"
                width={132}
                height={132}
              />
            </Navbar.Brand>
            {navbarItems.map((val, idx) => {
              return (
                <Link
                  key={idx}
                  href={val.path}
                  className={`${styles.navLinks} ${
                    currentPath === val.path && styles.activeLink
                  } my-2 my-lg-0 text-white fw-normal text-decoration-none`}
                >
                  {val.name}
                </Link>
              )
            })}
            <Link
              href="/privacy-policy"
              className={`${styles.navLinks} ${
                currentPath === "/privacy-policy" && styles.activeLink
              } my-2 my-lg-0 d-lg-none text-white fw-normal text-decoration-none`}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className={`${styles.navLinks} ${
                currentPath === "/terms-and-conditions" && styles.activeLink
              } my-2 my-lg-0 d-lg-none text-white fw-normal text-decoration-none`}
            >
              Terms & Coditions
            </Link>
          </Nav>

          <div
            className={`${styles.cartIconContainer} ms-auto me-auto ms-lg-3 me-lg-0`}
          >
            <Link href="/cart">
              <Image
                src="/images/common/navbar/cart.svg"
                alt="Go to Cart"
                width={22}
                height={17}
              />
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

//NOTE - previous navbar
/* const [isClicked, setIsClicked] = React.useState(false)
const handleClick = () => {
  setIsClicked(!isClicked)
}
<Navbar
  expand="lg"
  className={`${styles.headerBar} ${isClicked && styles.open} py-0`}
>
  <Container className="h-100 align-items-start align-items-lg-center">
    <Navbar.Brand href="/" className="d-none d-lg-block h-100">
      <Image
        src="/images/navbar/LOGO.png"
        alt="Home of Borcelle"
        width={90}
        height={90}
      />
    </Navbar.Brand>
    <Navbar.Toggle
      aria-controls="basic-navbar-nav"
      onClick={() => handleClick()}
      className={`${styles.toggleBtn} ms-auto`}
    >
      {isClicked ? (
        <FontAwesomeIcon icon={faXmark} className={styles.faIcon} />
      ) : (
        <FontAwesomeIcon icon={faBars} className={styles.faIcon} />
      )}
    </Navbar.Toggle>
    <Navbar.Collapse
      id="basic-navbar-nav"
      className={`${styles.navbarCollapse} text-center`}
    >
      <Nav className="mx-auto">
        <Image
          src="/images/navbar/LOGO.png"
          alt="Home of Borcelle"
          width={132}
          height={132}
          className="d-lg-none mx-auto"
        />
        {navbarItems.map((val, index) => {
          return (
            <Nav.Link
              key={index}
              href={val.path}
              className={[
                styles.navLinks,
                currentPath === val.path && styles.activeLink,
              ].join(" ")}
            >
              {val.name}
            </Nav.Link>
          )
        })}
        <Nav.Link href="/privacy-policy" className={`${styles.navLinks} d-lg-none`}>
          Privacy Policy
        </Nav.Link>
        <Nav.Link href="/terms-and-conditions" className={`${styles.navLinks} d-lg-none`}>
          Terms and Conditions
        </Nav.Link>
      </Nav>
      <div className={`${styles.cartIconContainer} mx-auto`}>
        <Image
          src="/images/navbar/cart.svg"
          alt="Go to Cart"
          width={22}
          height={17}
        />
      </div>
    </Navbar.Collapse>
  </Container>
</Navbar> */