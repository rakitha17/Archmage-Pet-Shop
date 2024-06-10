"use client"

import React from 'react'
import Image from 'next/image'
import style from './blog.module.scss'
import Image14 from './../../images/blog-home/14.png'
import Image15 from './../../images/blog-home/15.png'
import Image16 from './../../images/blog-home/16.png'

export function BlogComponent (){

  return (
    <div className={(style.SectionBg,'section py-5')}>
        <div className="container">
            <div className="row text-center">
                <div className="col-12 pb-5">
                    <p className="about-us">Blogs</p>
                    <h2 className={style.Furry}>Furry Friends Forum</h2>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100 border-0">
                        <Image src={Image14.src} 
                        className="img-fluid" 
                        alt="Card image 1"
                        width={2000}
                        height={600} />
                        
                        <div className="card-body">
                            <h5 className="card-title">Blog 01</h5>
                            <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                            </p>
                            <a href='/' className={(style.ReadMore, 'link-underline link-underline-opacity-0')}>Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-0">
                        <Image src={Image15.src} 
                        className="img-fluid" 
                        alt="Card image 2"
                        width={2000}
                        height={600} />
                        
                        <div className="card-body">
                            <h5 className="card-title">Blog 02</h5>
                            <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                            </p>
                            <a href='/' className={(style.ReadMore, 'link-underline link-underline-opacity-0')}>Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-0">
                        <Image src={Image16.src} 
                        className="img-fluid" 
                        alt="Card image 2"
                        width={2000}
                        height={600} />
                        
                        <div className="card-body">
                            <h5 className="card-title">Blog 03</h5>
                            <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                            </p>
                            <a href='/' className={(style.ReadMore, 'link-underline link-underline-opacity-0')}>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className='text-center pt-5 '>
                        <button className={style.MoreBlogs}>More Blogs</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}