"user client"
import React from 'react'
import Image from 'next/image';
import style from './save50.module.scss'
import Image12 from './../../images/12.png';

export function Save50Component () {
  return (
    <section className=' position-relative'>
      <div className="container-fluid p-0">
          <div className="col-12 col-md-12">
          <Image
              src={Image12}
              alt="save-banner"
              layout="responsive"
              width={300} // Adjust these values based on your image size
              height={400} // Adjust these values based on your image size
              className="img-fluid save-banner"
            />
              <div className={`position-absolute top-50 start-50 translate-middle text-center ${style.OffDev}}`}>
                  <p className='text-white'>Buy 1 Get 1</p>
                  <h1 className={style.Save50Text}>Save 50% Off</h1>
                  <p className='text-white'>Safe and effective products</p>
                  <h4 className={style.GreenText}>Shop for your pet</h4>
                  <button className={style.ShopButton}>Shop Now</button>
              </div>             
          </div>
      </div>
    </section>
  )
}
