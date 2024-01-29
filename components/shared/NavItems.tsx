'use client';

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {

    const pathname= usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 text-primary">
{headerLinks.map((link) => {
    const isActive = pathname === link.route;
    return (
      <div className="flex flex-col" key={link.route}>
        <li

        className={`${
          isActive && 'text-primary-500'
        } flex-center p-medium-16 whitespace-nowrap`}
      >
        <Link href={link.route}>{link.label}</Link>
      </li>
      </div>
    )
})}
    </ul>
  )
}

export default NavItems