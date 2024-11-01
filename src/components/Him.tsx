import React from 'react';
import { assets } from '../assets/assets';

const Him = () => {
  return (
    <div className="relative hero min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        src={ assets.hero_video } // Replace this with your video path
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0"></div>

      {/* Hero Content */}
      <div className="hero-content text-neutral-content text-center relative z-10">
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-xs md:text-sm lg:text-base'>NAIL IT WITH OUR BESTSELLERS.</p>
          </div>
          <h1 className='text-xl sm:text-3xl lg:text-4xl leading-relaxed font-semibold'>Timber For Every Project</h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-xs md:text-sm lg:text-base'>SHOP THE TOOLS YOU NEED</p>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Him;
