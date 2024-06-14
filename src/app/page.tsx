"use client"
import { CarouselComponent } from "@/components/Carousel/carousel";
import Image from "next/image";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Furry_friendComponent } from "@/components/FurryFriend/furry_friend";
import { Save50Component } from "@/components/Save50/save50";
import { BlogComponent } from "@/components/Blog/blog";
import { GalleryComponent } from "@/components/PetGallery/gallery";
import { MapComponent } from "@/components/Map/map";
import { NewsLetterComponent } from "@/components/NewsLetter/newsletter";
import { BreadCrumbComponent } from "@/components/Breadcrumb/breadcrumb";
import ModalComponent from "@/components/Modal/modal";
import { useState } from "react";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => setShowPopup(false);

  return (
    <div>
      <CarouselComponent />
      <BreadCrumbComponent />
      <Furry_friendComponent />
      <Save50Component />
      <BlogComponent />
      <GalleryComponent />
      <MapComponent />
      <NewsLetterComponent />
      <ModalComponent show={showPopup} handleClose={handleClose} />
    </div>
  );
};

export default HomePage;
