'use client'
import React from 'react'
import Image from 'next/image'
import style from './gallery.module.scss'
import image17 from './../../images/pet-gallery/17.png'
import image18 from './../../images/pet-gallery/18.png'
import image19 from './../../images/pet-gallery/19.png'
import image20 from './../../images/pet-gallery/20.png'
import image21 from './../../images/pet-gallery/21.png'
import image22 from './../../images/pet-gallery/22.png'

export function GalleryComponent() {

  return (
    <div className="section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 pb-5 text-center">
                    <h2 className={style.PetShop}>@pet_shop</h2>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <Image
                    className="img-fluid"
                    src={image17.src}
                    alt="pet gallery"
                    width={2000}
                    height={600}
                    />
                </div>
                <div className="col-12 col-md-2">
                    <Image
                    className="img-fluid"
                    src={image18.src}
                    alt="pet gallery"
                    width={2000}
                    height={600}
                    />
                </div>
                <div className="col-12 col-md-2">
                    <Image
                    className="img-fluid"
                    src={image19.src}
                    alt="pet gallery"
                    width={2000}
                    height={600}
                    />
                </div>
                <div className="col-12 col-md-2">
                    <Image
                    className="img-fluid"
                    src={image20.src}
                    alt="pet gallery"
                    width={2000}
                    height={600}
                    />
                </div>
                <div className="col-12 col-md-2">
                    <Image
                    className="img-fluid"
                    src={image21.src}
                    alt="pet gallery"
                    width={2000}
                    height={600}
                    />
                </div>
                <div className="col-12 col-md-2">
                    <Image
                    className="img-fluid"
                    src={image22.src}
                    alt="pet gallery"
                    width={2000}
                    height={600}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}