import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { hero, logo } from '@/assets'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaYoutubeSquare } from 'react-icons/fa'
import { FaTwitter, FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
        <section id='hero' className="flex text-primary bg-secondary m-auto overflow-hidden">
        <div className="flex flex-col items-start p-10">
          <div className="flex flex-row px-10">
                <Image src={logo} alt="logo" width={100} height={50}/>
                <h1 className="font-mountains text-primary text-4xl p-5">Mother Goose Lactation</h1>
                </div>
                <p className="px-10 py-5 font-semibold">Address:</p>
                  <p className="px-10">123 XXXXX Street<br/> Milford, OH 45150</p>
                  <p className="px-10 py-5 font-semibold">Contact:</p>
                  <p className="px-10">kelsey@mothergooselactation.com</p>
                <div className="flex flex-row lg:justify-center items-center px-10 py-5 gap-3 text-2xl">
                  <FaFacebook/>
                  <FaInstagram/>
                  <FaXTwitter/>
                  <FaLinkedin/>
                  <FaYoutubeSquare/>
                  </div>  
            </div>
            <div className="flex flex-col lg:flex-1 p-10 justify-center items-center leading-10">
           <ul>
           <Link href="/"><li>About Us</li></Link>
           <Link href="/"><li>Consulting Services</li></Link>
           <Link href="/"><li>How it Works</li></Link>
            <Link href="/"><li>Blog</li></Link>
           </ul>
            </div>
        </section>
    </div>
  )
}

export default Footer