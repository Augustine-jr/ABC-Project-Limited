import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {

      const [visible, setVisible] = useState(false);
      const toggleMenu = () => {
        setVisible(!visible)
      }

  return (
    <div className={'flex justify-between w-full items-center py-5 px-6 font-bold bg-[#ebe6d7] text-gray-700'}>
      
    <img src={assets.ABC_Logo } alt="ABC Logo" className='w-20 md:w-40' />
  
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
         <img src={assets.search_icon} alt="Search Icon" className='w-7 cursor-pointer' />

          <div className='group relative'>
            <img className='w-7 cursor-pointer'  src={assets.profile_icon} alt="Profile Icon"  />
             <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 bg-[#d1c7a3] rounded'>
               <div className='flex flex-col gap-2 w-36 py-3 px-5 text-gray-700 rounded'>
                 <p className='cursor-pointer explore hover:text-black'>My Profile</p>
                  <p className='cursor-pointer explore hover:text-black'>Orders</p>
                  <p className='cursor-pointer explore hover:text-black'>Logout</p>
               </div>
             </div>

          </div>
           <Link to='/cart' className='relative'>
            <img src={assets.pickuptruck_icon} alt="Picktruck Icon" className='w-8 min-w-5 cursor-pointer' />
             <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
           </Link>
           {/*<img onClick={toggleMenu} src={visible ? assets.menu_icon : assets.cancel_icon} alt="Menu Icon" className='w-8 cursor-pointer transition-all sm:hidden ' />*/}
      </div>
         
         {/* Sidebar menu for smaller screen*/}
         <div className={`absolute top-20 right-0 overflow-hidden bg-red-500 duration-700 transition-all  ${visible ? 'w-full' : 'w-0'}`}>
              <div className='flex flex-col text-gray-600'>
                <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3'>
                  <img src={assets.backarrow_icon} alt="Back Arrow Icon" className='w-5' />
                  <p>Close</p>

              </div>




         </div>

    </div>
    </div>
  )

}

  


export default Navbar