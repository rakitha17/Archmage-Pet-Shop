"use client"

import React from 'react'
import Image from 'next/image'
import style from './herobanner.module.scss'
import Image25 from './../../images/hero-banner/25.png'

export function HeroBannerComponent () {
  return (
    <div className="section position-relative">
        <div className="container-fluid ">
            <div className="row">
                <div className="col-12 p-0">
                    <div className=''>
                        <Image
                        className="img-fluid"
                        src={Image25.src}
                        alt="First slide"
                        width={2000}
                        height={600}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="container ">
            <div className={style.heroText}>
                <h1 className=''>Furry Friends Family</h1>
            </div>
        </div>
    </div>
  )
}
