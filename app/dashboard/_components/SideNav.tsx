"use client"
import { FileClock, Home, Settings2Icon, Wallet2Icon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

export default function SideNav() {
  const MenuList=[
  {
    name:'Home',
    icon:Home,
    path:'/dashboard'
  },
  {
    name:'History',
    icon:FileClock,
    path:'/dashboard/history'
  },
  {
    name:'Billing',
    icon:Wallet2Icon,
    path:'/dashboard/billing'
  },
  {
    name:'Setting',
    icon:Settings2Icon,
    path:'/dashboard/setting'
  },
  ]
  const path=usePathname();
  useEffect(()=>{
     const activeMenu=MenuList.find((item)=>item.path===path);
  })
  return (
    <div className='h-screen p-5 shadow-sm border bg-gray-300'>
      <div className='flex justify-center'>
        <Image src={'/logo.svg'} alt={''} width={120} height={100}></Image>
      </div>
      <hr className='my-6 border'/>
      <div className='mt-3'>
        {MenuList.map((menu,index)=>(
          <Link href={menu.path}>
          <div className={`flex gap-2 mb-2 p-3
          hover:bg-primary hover:text-white rounded-lg
          cursor-pointer items-center
          ${path==menu.path && 'bg-primary text-white'}
          `}>
          
            <menu.icon className='h-7 w-7'/>
            <h2 className='text-xl'>{menu.name}</h2>
          </div>
          </Link>
          ))}
      </div>
      
      
    </div>
  )
}

