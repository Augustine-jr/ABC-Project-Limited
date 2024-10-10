import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext' // Importing ShopContext to use the global state (context)
import { Link } from 'react-router-dom'; // Importing Link to create clickable links to other pages

// 'ProductItem' component is used to display each product (id, image, name, price)
const ProductItem = ({id, image, name, price}) => {

  // Accessing 'currency' from ShopContext, which is the currency symbol like $ or ₦
  const { currency } = useContext(ShopContext);

  // This is the UI for a product, showing its image, name, and price
  return (
    // 'Link' component makes the product clickable and sends the user to the product details page using the product id
    <Link className='text-gray-700 cursor-pointer' to={`/products/${id}`}>

      {/* Container for the image with hidden overflow */}
      <div className='overflow-hidden'>
         {/* Product image with a hover effect that makes it zoom in slightly */}
         <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
      </div>
      {/* Displaying the product name below the image */}
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      {/* Displaying the price with the currency symbol */}
      <p className='text-sm font-medium' style={{ color: 'rgb(100, 88, 50)'}}>{currency}{price}</p>
    </Link> 
  )
}


export default ProductItem
