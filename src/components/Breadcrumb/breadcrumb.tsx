"use client"
import React from 'react'
import style from './breadcrumb.module.scss'

export function BreadCrumbComponent(){
  return (
    <div className={`section ${style.sectionGreen}`}>
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className={(style.lightgreen,'breadcrumb pt-3 pb-3')}>
                    <li className="breadcrumb-item">
                        <a className={(style.linkColor, 'link-underline link-underline-opacity-0')}>Home</a>
                        <i className="fa fa-angle-right mx-2" aria-hidden="true"></i>
                    </li>
                    <li className="breadcrumb-item">
                        <a className={(style.linkColor, 'link-underline link-underline-opacity-0')}>About Us</a>
                        <i className="fa fa-angle-right mx-2" aria-hidden="true"></i>
                    </li>
                </ol>
            </nav>
        </div>
    </div>
  )
}
