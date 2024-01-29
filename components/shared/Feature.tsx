import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { baby } from '@/assets'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Feature = () => {
  return (
    <section id='feature' className="flex text-primary bg-secondary items-center py-10 lg:p-10">
          <div className="lg:flex-1 flex flex-col lg:flex-row items-center justify-center lg:p-10">
        <Image src={baby} alt="baby" className="rounded-2xl shadow-md items-center justify-center hidden lg:flex"/>
    </div>
    <div className="lg:flex-1 flex flex-col  ">
    <h1 className="text-5xl items-center text-center p-10 lg:tracking-tighter  lg:leading-12 font-raleway font-bold">
    Discover the tools and support you need to thrive.
    </h1>
    <h2 className="text-2xl items-center text-center p-5 font-normal lg:tracking-tight font-raleway">
            Our tools put the power of personalized lactation guidance at your fingertips.
            </h2>
            <div className="flex flex-col  items-center justify-center p-10">
        <Image src={baby} alt="baby" className="rounded-2xl shadow-md items-center justify-center flex lg:hidden"/>
    </div>
    <p className="text-base p-10 font-montserrat lg:leading-8">
    At Mother Goose Lactation, we believe in going beyond one-on-one consultations. Our feeding tracker provides you with additional tools and resources to empower you during your breastfeeding journey. Let&apos;s explore some key features:
    </p>
    <div className="flex flex-row items-center justify-center">
      
    <Carousel className='max-w-[40%] w-[80%] py-5 pb-10'>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    </div>
</section>
  )
}

export default Feature