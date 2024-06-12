import React from 'react'
import styles from '@/styles/contact/contact-form-section/contact-details.module.scss'
//ANCHOR - project componets
import SingleContact from './ContactDetails/SingleContact'
//ANCHOR - resources
import telIcon from '../../../../../public/images/contact/telephone.svg'
import locationIcon from '../../../../../public/images/contact/location.svg'
import emailIcon from '../../../../../public/images/contact/email.svg'

const contactInfoList = [
  {icon: telIcon, name: 'Phone', details: '+123 456 789'},
  {icon: locationIcon, name: 'Address', details: 'No. 17, 5th Street, Colombo 07'},
  {icon: emailIcon, name: 'Email', details: 'petshop@gmail.com'},
]

export default function ContactDetails() {
  return (
    <div className={`${styles.contact_image} d-flex align-items-center`}>
      <div className='px-3 px-lg-5 mx-4'>
        {
          contactInfoList.map((val, idx) => {
            return <SingleContact key={idx} icon={val.icon} name={val.name} details={val.details} />
          })
        }
      </div>
    </div>
  )
}
