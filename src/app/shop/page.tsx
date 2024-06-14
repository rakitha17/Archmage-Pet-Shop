import React from 'react'
//ANCHOR - project components
import Banner from '@/components/shop/banner-section/Banner'
import ProductsList from '@/components/shop/product-list-section/ProductsList'
import Newsletter from '@/components/home/Newsletter-Section/Newsletter'
import { BreadCrumbComponent } from '@/components/Breadcrumb/breadcrumb'

export default function ShopPage() {
  return (
    <>
      <Banner />
      <BreadCrumbComponent />
      <ProductsList />
      <Newsletter />
    </>
  )
}
