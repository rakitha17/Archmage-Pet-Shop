"use client";

import React from "react"
//ANCHOR - components
import Card from "react-bootstrap/Card"
import Image from "next/image"
//ANCHOR - components
import styles from '@/styles/home/shop-section/single-shop-section.module.scss'
//ANCHOR - resources
import cartIcon from '../../../../../public/images/home/shop-section/cart.svg'

type Props = {
  name: string
  image: any
  price: string
}

export default function SingleShopItem(props: Props) {
  return (
    <Card className="border-0">
      <Card.Body className="p-0 mb-3">
        <Image src={props.image} alt={props.name} className={styles.single_image} />
      </Card.Body>
      <Card.Footer className="p-0 bg-white border-0">
        <div className="d-flex justify-content-between">
          <p className="text-capitalize fw-semibold mb-0">{props.name}</p>
          <span className={`${styles.carticon_container} d-flex justify-content-center align-items-center`}>
            <Image src={cartIcon} alt="Add to cart icon" width={16.75} height={12.89} />
          </span>
        </div>
        <p className={`${styles.price_tag} fw-bold`}>{`$ ${props.price}`}</p>
      </Card.Footer>
    </Card>
  )
}
