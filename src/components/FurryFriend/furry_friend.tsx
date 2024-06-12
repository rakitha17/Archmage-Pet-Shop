"use client";
import React from 'react';
import Image from 'next/image';
import style from './furry_friend.module.scss'
import Image2 from './../../images/2.png';
import Image3 from './../../images/3.png';

export function Furry_friendComponent() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-12 pb-5">
            <p className="about-us">About Us</p>
            <h2 className={style.Furry}>Furry Friends Family</h2>
          </div>
          <div className="col-6 col-md-3">
            <Image
              src={Image2}
              alt="furry-cat"
              layout="responsive"
              width={300} // Adjust these values based on your image size
              height={400} // Adjust these values based on your image size
              className="img-fluid"
            />
          </div>
          <div className="col-6 col-md-3">
            <Image
              src={Image3}
              alt="furry-cat"
              layout="responsive"
              width={300} // Adjust these values based on your image size
              height={400} // Adjust these values based on your image size
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-6 text-start my-md-auto pt-5 ps-md-5">
            <h3 className={style.FurryHead}>Welcome to Our Pet Shop</h3>
            <p className='py-3'>At Our Pet Shop, we believe that pets are not just animals; they are beloved members of our families. Our passion for animals and commitment to their well-being drive everything we do.</p>
            <button className={style.FurryButton}>Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
