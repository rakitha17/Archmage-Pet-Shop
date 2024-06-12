//ANCHOR - components
import Image from "next/image"
import { Container, Row, Col, Button } from 'react-bootstrap';
//ANCHOR - project components
import FeaturedProducts from "@/components/home/Featured-Products/FeaturedProducts"
import HomeShopSection from "@/components/home/Shop-Section/HomeShopSection"
import Testimonials from "@/components/home/Testimonials-Section/Testimonials"
import Newsletter from "@/components/home/Newsletter-Section/Newsletter"
import { Furry_friendComponent } from "@/components/FurryFriend/furry_friend";
import { Save50Component } from "@/components/Save50/save50";
import { BlogComponent } from "@/components/Blog/blog";
import { GalleryComponent } from "@/components/PetGallery/gallery";
import { MapComponent } from "@/components/Map/map";
import { NewsLetterComponent } from "@/components/NewsLetter/newsletter";
import { BreadCrumbComponent } from "@/components/Breadcrumb/breadcrumb";
import { CarouselComponent } from "@/components/Carousel/carousel";
 
export default function Home() {
  return (
    <>
      {/* <Button variant="primary" className="btn-one">Primary</Button> */}
      <CarouselComponent />
      <BreadCrumbComponent/>
      <Furry_friendComponent/>
      <FeaturedProducts />
      <HomeShopSection />
      {/* <Save50Component/> */}
      <Testimonials />
      <BlogComponent/>
      <GalleryComponent/>
      <MapComponent/>
      <NewsLetterComponent/>
      {/* <Newsletter /> */}
    </>
  )
}
