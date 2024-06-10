import { CarouselComponent } from "@/components/Carousel/carousel";
import Image from "next/image";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Furry_friendComponent } from "@/components/FurryFriend/furry_friend";
import { Save50Component } from "@/components/Save50/save50";



 
export default function Home() {
  return (
    <div>
      {/* <Button variant="primary" className="btn-one">Primary</Button> */}
      <CarouselComponent />
      <Furry_friendComponent/>
      <Save50Component/>
    </div>
  );
}
