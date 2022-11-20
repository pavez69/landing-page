import React, {useState} from 'react'
import { RiSunLine, RiMenu3Fill, RiCloseLine } from "react-icons/ri";

export  const Header = () => {

   const [showMenu, setShowMenu] = useState(false)
  return (
    <header className='flex items-center justify-between xl:justify-start w-full p-4 h-[10-uvh] z-50'>
   <div className=' xk:w-1/6 text-center'>

    <a href='#' className='text-2xl font-bold relative p-1 bg-white'>
      Floreria SunShine<span className='text-primary text-5xl'>.</span>{""}
      <RiSunLine className='absolute -left-3 -botton-3 text-primary -z-10'/>
      </a>
   </div>
        <nav 
      className={`fixed bg-emerald-400 w-[80%] md:w-[40%] xl:w-full h-full ${
        showMenu ? "left-0" : "-left-full"
      } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
    >
      
          <a href='#' className=''>
            Encuentranos</a>
            <a href='#' className=''>
            Contacto</a>
            <a href='#' className=''>
            Flores</a>
            <a href='#' className=''>
            Creadora</a>
            <a href='#' className=''>
            Social</a>
            
        </nav>

        <button onClick={()=> setShowMenu(!showMenu)}className='text-2xl p-2'>
          <RiMenu3Fill />
          </button>
    </header>
  )
}
