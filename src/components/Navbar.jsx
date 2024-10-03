import React from 'react'
import { assets } from '../assets/assests'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={'flex justify-between w-full items-center py-5 px-6 font-bold bg-[#f3efef] text-gray-700'}>
      
    <img src={assets.ABC_Logo } alt="ABC Logo" className='w-40' />
  
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        
        <NavLink to='/' className='flex flex-col items-center gap-1'>
           <p>HOME</p>
           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/materials' className='flex flex-col items-center gap-1'>
           <p>MATERIALS</p>
           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
           <p>ABOUT</p>
           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
           <p>CONTACT</p>
           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

      </ul>

      <div className='flex items-center gap-6'>
         <img src={assets.search_icon} alt="Search Icon" className='w-5 cursor-pointer' />

          <div className='group relative'>
            <img className='w-5 cursor-pointer'  src={assets.profile_icon} alt="Profile Icon"  />
          </div>
      </div>
    </div>
  )
}

  


export default Navbar