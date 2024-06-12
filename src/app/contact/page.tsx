import React from "react"
//ANCHOR - project components
import ContactBanner from "@/components/contact/banner-section/ContactBanner"
import { BreadCrumbComponent } from "@/components/Breadcrumb/breadcrumb"
import ContactForm from "@/components/contact/contact-form-section/ContactForm"
import Newsletter from "@/components/home/Newsletter-Section/Newsletter"

export default function ContactUs() {
  return (
    <>
      <ContactBanner />
      <BreadCrumbComponent />
      <ContactForm />
      <Newsletter />
    </>
  )
}
