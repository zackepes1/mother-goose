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
import { blogposts, howitworks } from '@/constants'
import { Button } from '../ui/button'

const Blog = () => {
  return (
    <div>
    <section id='blog' className="text-primary">
      <div className="flex flex-col items-center justify-center p-10">
      <h1 className="text-5xl py-10 px-5 items-center text-center">
      Bloom with Breastfeeding: Discover Our Inspiring Blog
                <span>
                    <h2 className="text-2xl py-5">
                    Whether you&apos;re a seasoned pro or just starting your breastfeeding journey, our blog is your haven for insightful articles, expert tips, and heartwarming stories.
                    </h2>
                </span>
            </h1>
            <p>At Mother Goose Lactation, we believe that breastfeeding is more than just nourishment. It&apos;s a journey of connection, discovery, and empowerment. And our blog is dedicated to sharing this journey with you in every beautiful, messy, and triumphant moment.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full w-full gap-5 p-10 lg:max-w-[80%] m-auto">
        {blogposts.map((works) => (
          <div key={works.id}>
      <Card className="h-full relative text-primary">
  <CardHeader>
    <CardTitle>{works.title}</CardTitle>
  </CardHeader>
  <CardContent>
  <Image className="object-contain rounded-xl" src={works.img} alt={works.title}/>
  {works.contents.map ((contents) =>(
      <div key={contents.id}>
      <p className="flex justify-start items-start p-2">{contents.content}</p>
    </div>
    ))}
  </CardContent>
<CardFooter className="flex flex-row">
  <Button className="absolute bottom-5 right-5 text-secondary bg-primary">Read More</Button>
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