import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-[#d1c7a3]'>
      {/* Hero left side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-xs md:text-sm lg:text-base'>NAIL IT WITH OUR BESTSELLERS</p>
          </div>
          <h1 className='text-xl sm:text-3xl lg:text-4xl leading-relaxed font-semibold'>Timber For Every Project</h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-xs md:text-sm lg:text-base'>SHOP THE TOOLS YOU NEED</p>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
          </div>
        </div>
      </div>
      {/* Hero right side */}
       <img src={ assets.placeholder_icon } alt = "Placeholder Icon" className="w-full sm:w-1/2 object-cover" />
    </div>
  )
}

export default Hero