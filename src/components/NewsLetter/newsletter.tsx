"use client"
import React from 'react'
import style from './newsletter.module.scss'

export function NewsLetterComponent (){
  return (
    <div className={`section py-5 ${style.sectionBrown}`}>
        <div className="container mt-5">
            <div className="row no-gutters custom-padding">
                <div className="col-md-6">
                    <h5 className={(style.emailText)}>Get In With Some Pet News</h5>
                    <p className={(style.emailText)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>
                <div className="col-md-6">
                    <div className="search">
                        <input className={(style.inputText)} type="text" placeholder="Enter Your Email" />
                        <button type="button" className={(style.SubscribeButton)}>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
