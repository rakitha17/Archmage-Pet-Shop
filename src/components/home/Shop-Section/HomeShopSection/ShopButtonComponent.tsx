import React from 'react'
//ANCHOR - components
import Button from 'react-bootstrap/Button';
//ANCHOR - resources
import styles from '@/styles/home/shop-section/shop-button-component.module.scss'

type Props = {
  btnName: string
}

function ShopButtonComponent(props: Props) {
  return <Button className={`${styles.btn_style} fw-bold`}>{props.btnName}</Button>
}

export default ShopButtonComponent;