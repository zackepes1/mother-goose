import React from 'react'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { blogposts} from '@/constants'
import { Button } from '../ui/button'

const Blog = () => {
  return (
    <div>
    <section id='blog' className="text-primary">
      <div className="flex flex-col items-center justify-center p-10">
      <h1 className="text-5xl items-center text-center p-5 lg:tracking-tighter lg:leading-12 font-raleway font-bold">
      Bloom with Breastfeeding: Discover Our Inspiring Blog
                <span>
                    <h2 className="text-2xl py-5 font-normal lg:tracking-tight">
                    Whether you&apos;re a seasoned pro or just starting your breastfeeding journey, our blog is your haven for insightful articles, expert tips, and heartwarming stories.
                    </h2>
                </span>
            </h1>
            <p className="text-lg p-5 font-montserrat lg:leading-8">At Mother Goose Lactation, we believe that breastfeeding is more than just nourishment. It&apos;s a journey of connection, discovery, and empowerment. And our blog is dedicated to sharing this journey with you in every beautiful, messy, and triumphant moment.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-full w-full gap-5 p-10 lg:max-w-[80%] m-auto">
        {blogposts.map((works) => (
          <div key={works.id}>
      <Card className="h-full relative text-primary">
  <CardHeader>
    <CardTitle className="font-raleway font-bold text-3xl text-center">{works.title}</CardTitle>
  </CardHeader>
  <CardContent>
  <Image className="object-contain rounded-xl" src={works.img} alt={works.title}/>
  {works.contents.map ((contents) =>(
      <div key={contents.id}>
      <p className="flex justify-start font-montserrat items-start pb-10 p-2">{contents.content}</p>
    </div>
    ))}
  </CardContent>
<CardFooter className="text-primary lg:leading-8 lg:tracking-tight">
  <Button className="absolute bottom-5 right-5 bg-primary font-raleway text-lg">Read More</Button>
</CardFooter>
</Card>
        </div>
        ))}
      </div>
    </section>
</div>
  )
}

export default Blog