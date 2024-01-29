import React from 'react'
import { Button } from '../ui/button'

const CTA = () => {
  return (
    <div className="bg-gradient-to-br from-pink-400 to-pink-600 p-10 xl:p-24 m-auto flex flex-col justify-center items-center">
      <h1 className="text-5xl items-center text-center p-5 lg:tracking-tighter lg:leading-12 font-raleway font-bold">Embrace Confidence, Nourish Your Bond, Embrace the Joy.</h1>
      <h2 className="text-2xl items-center text-center p-5 font-normal lg:tracking-tight font-raleway">It all starts with one click. Book your consultation and embark on a smooth breastfeeding journey with Mother Goose Lactation.</h2>
      <div className="flex flex-row items-center justify-center p-5">
            <Button className="text-primary font-raleway font-bold text-lg" variant={'secondary'}>Book Now</Button>
            </div>
    </div>
  )
}

export default CTA