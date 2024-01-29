'use client';
import React from 'react'
import Nav from './Nav'
import Link from 'next/link'
import Image from 'next/image'
import {logo2, logo} from "@/assets"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FiMenu } from "react-icons/fi";
import { Separator } from '@radix-ui/react-separator'
import NavItems from './NavItems'

const Header = () => {
  return (
    <div className="bg-secondary">
 <div className="relative flex lg:hidden">
 <Sheet>
        <SheetTrigger className="align-middle">
        <FiMenu className="text-primary  text-2xl absolute top-10 right-10"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-secondary text-primary lg:hidden">
           <Image
           src={logo2}
           alt="logo"
           width={300}
           height={38}
           />
           <Separator className="border border-gray-50" />
           <NavItems/>
        </SheetContent>
        </Sheet>
  </div>
        <div className="lg:p-10 text-primary bg-secondary p-5 flex-col lg:flex-row flex lg:flex-1  w-full  m-auto items-start lg:items-center">
        <Link href="/">
        <Image alt="logo"  className="bg-secondary h-full" width={300} src={logo2}/>
        </Link>
        <Link href="/">
        {/* <h1 className="font-satisfy font-bold text-primary text-4xl p-5 lg:flex-1">Mother <br/>Goose Lactation</h1> */}
        </Link>

        <div className="flex-1 flex flex-row justify-end">
        <Nav/>
        </div>
        </div>
   
       
     
    </div>
  )
}

export default Header