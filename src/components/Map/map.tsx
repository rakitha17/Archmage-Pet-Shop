"use client"
import React from 'react'
import style from './map.module.scss'
import Image from 'next/image'
import Image23 from './../../images/map/23.png'

export function MapComponent () {
  return (

    <div className="section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0">
                <Image
                    src={Image23}
                    alt="furry-cat"
                    layout="responsive"
                    width={300} // Adjust these values based on your image size
                    height={400} // Adjust these values based on your image size
                    className="img-fluid"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
