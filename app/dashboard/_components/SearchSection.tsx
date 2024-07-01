import { Search, SearchSlashIcon } from 'lucide-react'
import React from 'react'

export default function SearchSection({onSearchInput}:any) {
  return (
<div className="p-10 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-950 flex flex-col justify-center items-center text-white">
        <h2 className='text-3xl font-bold'>Browse All Templates</h2>
        <p>Create nything you want</p>
        <div className='w-full flex justify-center'>
            <div className='flex gap-2 items-center p-2 border rounded-md bg-gray-300 my-6 w-[50%]'>
                <Search className='text-primary '/>
                <input type='text' placeholder='Search' onChange={(event)=>onSearchInput(event.target.value)}
                className='bg-transparent outline-none text-black w-full' />
            </div>
        </div>
    </div>
  )
}

