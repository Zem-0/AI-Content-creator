import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

export default function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-gray-300' >
      <div className='flex gap-2 items-center p-2 border rounded-md max-w-xl bg-white'>
        <Search/>
        <input type='text' placeholder='Search...'/>
      </div>
      <div className=' flex gap-5 justify-items-center'>
        <h2 className='bg-primary p-1 rounded-full text-2xl text-white on hover:size-50'>Join Now</h2>
        <UserButton/>
      </div>
    </div>
  )
}
