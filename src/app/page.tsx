import Image from "next/image"
//ANCHOR - project components
import FeaturedProducts from "@/components/home/Featured-Products/FeaturedProducts"
import HomeShopSection from "@/components/home/Shop-Section/HomeShopSection"
import Testimonials from "@/components/home/Testimonials-Section/Testimonials"
import Newsletter from "@/components/home/Newsletter-Section/Newsletter"

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
      <section>
        <Newsletter />
      </section>
    </>
  )
}
