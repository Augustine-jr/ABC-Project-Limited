import React, { useContext, useEffect, useState } from 'react'
// We're importing React and some special tools like useContext, useEffect, and useState.

// We're bringing in ShopContext to get the list of products, Title to show the heading, and ProductItem for each product.
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {

  // We get all the products from  ShopContext.
  const { products } = useContext(ShopContext);

  // We create an empty array to keep only the best-selling products.
  const [bestSeller, setBestSeller] = useState([]);

  // When the page loads, we want to find the best-sellers.
  useEffect(() => {
    // We look at all the products and keep only the ones marked as 'bestseller'.
    const bestProduct = products.filter((item) => item.bestseller);
    // We take the first 4 products from the best sellers and put them in our bestSeller box.
    setBestSeller(bestProduct.slice(0, 4))
  }, [products]) // This happens when the 'products' data changes.

   
  // Display loading message if products haven't loaded yet
  if (!products.length) return <p>Loading...</p>;

  return (
    <div className='my-10'> {/* Adds space around the section */}
      <div className='text-center text-3xl py-8'> {/* Centered title and some padding */}
       {/* Title component shows "BEST SELLERS" */}
       <Title text1='BEST' text2='SELLERS' />
       <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base'>
         {/* A small description below the title */}
         These products have sold the most in the past 30 days. You may also want to check out our popular products.
       </p>
      </div>

      {/* Grid layout for showing products, 2 columns on small screens, 4 on larger screens */}
      <div className='grid grid-cols-2 divide-[#d1c7a3] divide-y md:divide-y-0 border-[#d1c7a3] border-y divide-x sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-0'>
        {/* We go through each best-seller and show it on the screen */}
        {
          bestSeller.map((item, index) => (
             <div key={index} className="p-4"> {/* Each product has padding around it */}
               {/* Render each product with fallback image and name */}
               <ProductItem 
               id={item._id} 
               image={item.image || 'https://via.placeholder.com/150'} // Fallback image 
               name={item.name || ''}  // Add fallback name to product
               price={item.price} 
               />
             </div>
          ))}
      </div>
    </div>
  )
}

export default BestSeller
