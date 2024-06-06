import { CarouselComponent } from "@/components/carousel";
import Image from "next/image";
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../styles/carousel.scss"



 
export default function Home() {
  return (
    <div>
      {/* <Button variant="primary" className="btn-one">Primary</Button> */}
      <CarouselComponent />
    </div>
  );
}
