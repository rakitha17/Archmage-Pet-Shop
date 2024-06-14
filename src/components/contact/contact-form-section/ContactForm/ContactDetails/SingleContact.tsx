import React from "react"
//ANCHOR - components
import Image from "next/image"

type Props = {
  icon: any
  name: string
  details: string
}

export default function SingleContact(props: Props) {
  return (
    <div className="d-flex py-4 my-3">
      <div className="me-5">
        <Image src={props.icon} alt={`${props.name} Image`} />
      </div>
      <div className="text-white fw-medium">
        <p className="mb-3">{props.name}</p>
        <p className="mb-0">{props.details}</p>
      </div>
    </div>
  )
}
