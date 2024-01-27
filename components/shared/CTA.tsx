import React from 'react'
import { Button } from '../ui/button'

const CTA = () => {
  return (
    <div className="bg-primary p-24 m-auto flex flex-col justify-center items-center">
      <h1 className="text-5xl lg:max-w-[50%] text-center p-10">Embrace Confidence, Nourish Your Bond, Embrace the Joy.</h1>
      <h2>It all starts with one click. Book your consultation and embark on a smooth breastfeeding journey with Mother Goose Lactation.</h2>
      <div className="flex flex-row items-center justify-center p-5">
            <Button className="text-primary" variant={'secondary'}>Book Now</Button>
            </div>
    </div>
  )
}

export default CTA