"use client";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Image1 from './../../images/1.png';
import style from './carousel.module.scss'

export function CarouselComponent() {
  return (
    <div className="container-fluid p-0">
      <div className="col-12 col-md-12">
        <Carousel className={style.CarouselControls}>
          <Carousel.Item>
            <Image
              className="img-fluid"
              src={Image1.src}
              alt="First slide"
              width={2000}
              height={600}
            />
            <Carousel.Caption className='text-start'>
              <h1 className=' text-white banner-text'>Furry Friends Haven</h1>
              <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
              <button className={style.BannerButton}>Shop Now</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="img-fluid"
              src={Image1.src}
              alt="First slide"
              width={2000}
              height={600}
            />
            <Carousel.Caption className='text-start'>
              <h1 className=' text-white banner-text'>Furry Friends Haven</h1>
              <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
              <button className={style.BannerButton}>Shop Now</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="img-fluid"
              src={Image1.src}
              alt="First slide"
              width={2000}
              height={600}
            />
            <Carousel.Caption className='text-start'>
              <h1 className=' text-white banner-text'>Furry Friends Haven</h1>
              <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
              <button className={style.BannerButton}>Shop Now</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    </div>
  );
}
