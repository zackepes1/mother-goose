import React from 'react'
import Image from 'next/image'
import { consultation, plan, support } from '@/assets'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { howitworks } from '@/constants'

const HowItWorks = () => {
  return (
    <div>
    <section id='howitworks' className="text-primary">
      <div className="flex flex-col items-center justify-center px-10">
      <h1 className="text-5xl py-10 px-5 items-center text-center lg:tracking-tighter lg:leading-12 font-raleway font-bold">
      Navigating breastfeeding with ease, step-by-step.
                <span>
                    <h2 className="text-2xl py-5 font-normal lg:tracking-tight">
                    Discover the simple process of achieving your feeding goals with personalized support.
                    </h2>
                </span>
            </h1>
            <p className="text-lg  font-montserrat lg:leading-8 lg:max-w-[80%]">Breastfeeding is a precious journey, but it can also be accompanied by uncertainties and questions. At Mother Goose Lactation, we believe in making it a smooth and empowered experience for you and your little one. Here&apos;s how our process works:</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-full w-full gap-5 p-10">
        {howitworks.map((works) => (
          <div key={works.id}>
      <Card className="h-full  text-primary">
  <CardHeader>
    <CardTitle className="font-raleway font-bold text-3xl text-center">{works.title}</CardTitle>
  </CardHeader>
  <CardContent>
  <Image className="object-contain rounded-xl" src={works.img} alt={works.title}/>
  </CardContent>
  {works.contents.map ((contents) =>(
      <div key={contents.id}>
    <CardFooter className="text-primary font-montserrat lg:leading-8 lg:tracking-tight">
      <li className="flex justify-start items-start">{contents.content}</li>
      </CardFooter>
    </div>
    ))}
</Card>
        </div>
        ))}
      </div>
    </section>
</div>
  )
}

export default HowItWorks