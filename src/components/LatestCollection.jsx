import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';


// The 'LatestCollection' component displays a section that shows the latest supplies
// along with a title and a short description.
const LatestCollection = () => {
  // useContext is a React hook that allows us to access the products from the global state (ShopContext)
  const { products } = useContext(ShopContext);

  return (
    <div className='my-10'>
      {/* 
        - The 'text-center' class centers the content.
        - 'py-8' adds padding on the top and bottom.
        - 'text-3xl' makes the text large.
      */}
      <div className='text-center py-8 text-3xl'>
        
        {/* 
          - Here, we use the 'Title' component with 'LATEST' and 'SUPPLIES' as the text.
          - The 'text1' prop is 'LATEST', and the 'text2' prop is 'SUPPLIES'.
        */}
        <Title text1={'LATEST'} text2={'SUPPLIES'} />
        
        {/* 
          - This 'p' element displays the description text about the latest supplies.
          - The 'w-3/4' class gives the paragraph a width of 75%.
          - 'm-auto' centers the text horizontally.
          - The 'text-xs', 'sm:text-sm', and 'md:text-base' classes control the text size for different screen sizes.
          - 'text-black' sets the text color to black.
        */}
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-black'>
          Quality building materials don't have to break the bank. Discover our competitive prices on a wide range of woods and nails, without compromising on quality.
        </p>
      </div>
    </div>
  );
}

export default LatestCollection;