"use client";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Image1 from './../../public/1.png';

export function CarouselComponent() {
  return (
    <div className="container-fluid p-0">
      <div className="col-12 col-md-12">
        <Carousel>
          <Carousel.Item>
            <Image
              className="img-fluid"
              src={Image1.src}
              alt="First slide"
              width={2000}
              height={600}
            />
            <Carousel.Caption>
              <h3 className='text-start text-white banner-text'>Furry Friends Haven</h3>
              <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className='banner-button'>Shop Now</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="img-fluid"
              src={Image1.src}
              alt="Second slide"
              width={2000}
              height={600}
            />
            <Carousel.Caption>
              <h3 className='text-start text-white banner-text'>Furry Friends Haven</h3>
              <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className='banner-button'>Shop Now</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="img-fluid"
              src={Image1.src}
              alt="Third slide"
              width={2000}
              height={600}
            />
            <Carousel.Caption>
              <h3 className='text-start text-white banner-text'>Furry Friends Haven</h3>
              <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className='banner-button'>Shop Now</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    </div>
  );
}
