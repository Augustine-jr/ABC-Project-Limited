import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext' // Importing ShopContext to access the global state (products)
import Title from './Title'; // Importing the 'Title' component to show the section title
import ProductItem from './ProductItem'; // Importing 'ProductItem' to show each product

// 'LatestCollection' component displays a section with the latest products
const LatestCollection = () => {
  
  // Accessing 'products' from ShopContext, which is a list of all products available
  const { products } = useContext(ShopContext);

  // Creating a state 'latestProducts' to store the latest 10 products
  const [latestProducts, setLatestProducts] = useState([]);

  // Using 'useEffect' to update 'latestProducts' whenever 'products' changes
  useEffect(() => {
    // Slicing the first 10 products from the 'products' list and storing them in 'latestProducts'
    setLatestProducts(products.slice(0, 10));
  }, [products]) // 'useEffect' will re-run whenever 'products' changes

  return (
    <div className='my-10'>
      {/* Title Section */}
      <div className='text-center py-8 text-3xl'>
        {/* Passing 'LATEST' and 'SUPPLIES' to the 'Title' component to display the section title */}
        <Title text1={'LATEST'} text2={'SUPPLIES'} />
        {/* A short description text under the title about the quality of the products */}
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-black'>
          Quality building materials don't have to break the bank. Discover our competitive prices on a wide range of woods and nails, without compromising on quality.
        </p>
      </div>

      {/* Grid Section for displaying products */}
      {/* We create a grid layout to display the products. The number of columns changes based on screen size */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          // Mapping over the 'latestProducts' array to display each product using the 'ProductItem' component
          latestProducts.map((item, index) => (
            // Each 'ProductItem' takes the product's id, image, name, and price as props
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
        }
      </div>
    </div>
  );
}

export default LatestCollection;
