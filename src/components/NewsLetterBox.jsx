import React from 'react'

const NewsLetterBox = () => {
  return (
    <div className='text-center pt-10'>
       <p className='text-lg sm:text-2xl md:text-3xl font-medium text-gray-800'>Stay Updated with the Latest Building Materials and Offers</p>
       <p className='text-gray-400 mt-3 text-sm sm:text-base'>Sign up for our newsletter to receive exclusive offers, product updates, and expert advice on building materials, tools, and supplies for your next project.</p>
       <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUB</button>
       </form>
    </div>
  )
}

export default NewsLetterBox