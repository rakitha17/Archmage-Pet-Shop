"use client"
import { BreadCrumbComponent } from '@/components/Breadcrumb/breadcrumb'
import React from 'react'
import Image from 'next/image'
import style from './blog.module.scss'
import Image14 from './../../images/blog-home/14.png'
import Image15 from './../../images/blog-home/15.png'
import Image16 from './../../images/blog-home/16.png'
import Image31 from './../../images/blog page/31.png'
import Image32 from './../../images/blog page/32.png'
import Image33 from './../../images/blog page/33.png'
import { NewsLetterComponent } from '@/components/NewsLetter/newsletter'

export default function page () {
  return (
    <div>
        {/* <HeroBannerComponent/> */}
        <BreadCrumbComponent/>

        <div className="section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <div className={`card h-100 ${style.card}`}>
                                    <Image src={Image14.src} 
                                    className="img-fluid" 
                                    alt="Card image 1"
                                    width={2000}
                                    height={600} />
                                    
                                    <div className="card-body">
                                        <h5 className={`card-title ${style.cardTitle}`}>Blog 01</h5>
                                        <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                                        </p>
                                        <a href='/' className={`link-underline link-underline-opacity-0 ${style.ReadMore}`}>Read More{" >>"}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className={`card h-100 ${style.card}`}>
                                    <Image src={Image15.src} 
                                    className="img-fluid" 
                                    alt="Card image 2"
                                    width={2000}
                                    height={600} />
                                    
                                    <div className="card-body">
                                        <h5 className={`card-title ${style.cardTitle}`}>Blog 02</h5>
                                        <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                                        </p>
                                        <a href='/' className={`link-underline link-underline-opacity-0 ${style.ReadMore}`}>Read More{" >>"}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className={`card h-100 ${style.card}`}>
                                    <Image src={Image16.src} 
                                    className="img-fluid" 
                                    alt="Card image 2"
                                    width={2000}
                                    height={600} />
                                    
                                    <div className="card-body">
                                        <h5 className={`card-title ${style.cardTitle}`}>Blog 03</h5>
                                        <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                                        </p>
                                        <a href='/' className={`link-underline link-underline-opacity-0 ${style.ReadMore}`}>Read More{" >>"}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className={`card h-100 ${style.card}`}>
                                    <Image src={Image31.src} 
                                    className="img-fluid" 
                                    alt="Card image 2"
                                    width={2000}
                                    height={600} />
                                    
                                    <div className="card-body">
                                        <h5 className={`card-title ${style.cardTitle}`}>Blog 03</h5>
                                        <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                                        </p>
                                        <a href='/' className={`link-underline link-underline-opacity-0 ${style.ReadMore}`}>Read More{" >>"}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className={`card h-100 ${style.card}`}>
                                    <Image src={Image32.src} 
                                    className="img-fluid" 
                                    alt="Card image 2"
                                    width={2000}
                                    height={600} />
                                    
                                    <div className="card-body">
                                        <h5 className={`card-title ${style.cardTitle}`}>Blog 03</h5>
                                        <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                                        </p>
                                        <a href='/' className={`link-underline link-underline-opacity-0 ${style.ReadMore}`}>Read More{" >>"}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className={`card h-100 ${style.card}`}>
                                    <Image src={Image33.src} 
                                    className="img-fluid" 
                                    alt="Card image 2"
                                    width={2000}
                                    height={600} />
                                    
                                    <div className="card-body">
                                        <h5 className={`card-title ${style.cardTitle}`}>Blog 03</h5>
                                        <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                                        </p>
                                        <a href='/' className={`link-underline link-underline-opacity-0 ${style.ReadMore}`}>Read More{" >>"}</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className='text-center pt-5 '>
                                <button className={style.MoreBlogs}>Load More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

        <NewsLetterComponent/>
    </div>
  )
}
