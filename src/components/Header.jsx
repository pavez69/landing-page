import React from 'react'
import { RiSunLine } from "react-icons/ri";

export const Header = () => {
  return (
    <header className='flex items-center w-full p-4'>
   <div className=' w-1/6 text-center'>

    <h1 className='text-2xl font-bold'>Floreria SunShine <span className='text-primary text-5xl'>.</span><RiSunLine/></h1>
   </div>
        <nav className=' flex-1 text-center'>
            Nav
        </nav>
    </header>
  )
}
