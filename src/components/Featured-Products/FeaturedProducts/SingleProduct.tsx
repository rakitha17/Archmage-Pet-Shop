"use client";

import React from 'react'
import styles from '@/styles/featured-products/single-product.module.scss';
//ANCHOR - components
import Image from 'next/image';
import Card from 'react-bootstrap/Card';

type Props = {
  image: any,
  name: string
}

function SingleProduct(props: Props) {
  return (
    <Card className={`${styles.single_card} border-0 rounded-4 text-center`}>
      <Card.Body className='p-5'>
        <Image src={props.image} alt={props.name} className='product-image' />
        <Card.Title className='text-capitalize fw-semibold mt-4 mb-0'>{props.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default SingleProduct;