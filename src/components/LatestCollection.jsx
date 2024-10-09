import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';


const LatestCollection = () => {

const { products }  = useContext(ShopContext)


  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'SUPPLIES'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-black'>
          Quality building materials don't have to break the bank. Discover our competitive prices on a wide range of woods and nails, without compromising on quality.
        </p>
      </div>
    </div>
  )
}

export default LatestCollection