"use client"
import React from 'react'
import style from './breadcrumb.module.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';

export function BreadCrumbComponent(){
  return (
    <div className={`section ${style.sectionGreen}`}>
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className={(style.lightgreen,'breadcrumb pt-3 pb-3')}>
                    <li className="breadcrumb-item">
                        <a className={`link-underline link-underline-opacity-0 ${style.linkColor}`}>Home</a>
                        <i className="fa fa-angle-right mx-2" aria-hidden="true"></i>
                        <a className={`link-underline link-underline-opacity-0 ${style.linkColor}`}>About Us</a>
                    </li>
                    {/* <li className="breadcrumb-item">
                        <a className={`link-underline link-underline-opacity-0 ${style.linkColor}`}>About Us</a>
                        
                    </li> */}
                </ol>
            </nav>
        </div>
    </div>
  )
}
