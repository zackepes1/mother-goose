import { hero } from '@/assets'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div>
        <section id='hero' className="flex text-primary bg-secondary m-auto overflow-hidden">
            <div className="flex flex-col lg:flex-1 p-10">
            <h1 className="text-5xl py-10 px-5 items-center text-center">
                Embark on a Smooth Breastfeeding Journey
                <span>
                    <h2 className="text-2xl py-5">
                        Expert guidance and support for you and your precious little one.
                    </h2>
                </span>
            </h1>
            <p className="text-base p-5">
            The early days of motherhood are filled with wonder, but breastfeeding can also present its own set of challenges. That&apos;s where I come in, your personal lactation consultant. With Mother Goose Lactation, you don&apos;t have to navigate this journey alone. I offer tailored guidance and support to help you achieve your breastfeeding goals, whether you&apos;re a first-time mom or facing feeding difficulties.
            </p>
            <div className="flex flex-col items-center justify-center">
            <Button className="bg-primary">Learn More</Button>
            </div>
            </div>
            <div className="flex flex-col lg:flex-1 p-10">
                <Image src={hero} alt="mother" className="rounded-2xl shadow-md hidden lg:flex"/>
            </div>
        </section>
    </div>
  )
}

export default Hero