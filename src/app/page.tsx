import Image from "next/image"
//ANCHOR - project components
import Testimonials from "@/components/Testimonials-Section/Testimonials"
import FeaturedProducts from "@/components/Featured-Products/FeaturedProducts"

export default function Home() {
  return (
    <>
      <section className="py-5">
        <FeaturedProducts />
      </section>
      <section className="py-5">
        <Testimonials />
      </section>
    </>
  )
}
