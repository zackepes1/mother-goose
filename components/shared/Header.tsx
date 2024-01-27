'use client';
import React from 'react'
import Nav from './Nav'
import Link from 'next/link'
import Image from 'next/image'
import {logo} from "@/assets"
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
        <SheetContent className="flex flex-col gap-6 bg-secondary text-primary  md:hidden">
           <Image
           src={logo}
           alt="logo"
           width={128}
           height={38}
           />
           <Separator className="border border-gray-50" />
           <NavItems/>
        </SheetContent>
        </Sheet>
  </div>
        <div className="lg:p-10 text-primary bg-secondary flex flex-col lg:flex-row w-full justify-center  m-auto items-center lg:max-w-7xl">
        <Link href="/">
        <Image alt="logo"  className="bg-secondary h-full" width={100} src={logo}/>
        </Link>
        <Link href="/">
        <h1 className="font-mountains text-primary text-4xl p-5 lg:flex-1">Mother Goose Lactation</h1>
        </Link>
        <Nav/>
        </div>
       
     
    </div>
  )
}

export default Header