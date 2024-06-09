import Image from "next/image"
//ANCHOR - project components
import FeaturedProducts from "@/components/Featured-Products/FeaturedProducts"
import HomeShopSection from "@/components/Shop-Section/HomeShopSection"
import Testimonials from "@/components/Testimonials-Section/Testimonials"

export default function Home() {
  return (
    <>
      <section className="py-5">
        <FeaturedProducts />
      </section>
      <section className="py-5">
        <HomeShopSection />
      </section>
      <section className="py-5">
        <Testimonials />
      </section>
    </>
  )
}
