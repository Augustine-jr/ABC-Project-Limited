import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const Material = () => {


  const { products } = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const applyFilter = async () => {

    // Convert string inputs to numbers
    const min = Number(minPrice);
    const max = Number(maxPrice);


   if (min < 0 || max < 0) {
     toast.error('Invalid price range. Please enter positive numbers.');
     return;
   }
   if (min > max) {
     toast.error('Invalid price range. Minimum price cannot be greater than maximum price.');
     return;
   }
   
   try {
    const response = await axios.get('/api/products', {
      params: {
        minPrice: min,
        maxPrice: max,
      },
    });


    // Handle the response based on the status code
    if (response.status === 200) {
      console.log(response.data); // Handle the filtered products
      toast.success(`Filtered products from ${min} to ${max}`);
    } else {
      toast.warn(`Unexpected response with status code: ${response.status}`);
    }
  } catch (error) {
    // Handle errors based on the status code
    if (error.response) {
      const statusCode = error.response.status;

      if (statusCode === 400) {
        toast.error('Bad request. Please check the Filter inputs.');
      } else if (statusCode === 404) {
        toast.error('No products  found with the given price range.');
      } else if (statusCode === 500) {
         toast.error('Server error. Please try again later.')
      } else {
        toast.error(`An error occurred: ${statusCode}`);
      }

      console.error('Server responded with an error:', error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        toast.error('No response from the server. Please try again later.');
        console.error('No response from server:', error.request);
      } else {
        // Error setting up request
        toast.error('An error occurred while setting up the request.');
        console.error('Error setting up request:', error.message);
      } 
   }
  };

 
   

  const resetFilters = () => {
    setMinPrice('');
    setMaxPrice('');
    setShowFilter(false); // Hide filter options after reset
    toast.info('Filters have been reset');
  };

  
  
   


  return (
    <div className=" flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      
       {/* Filter Options */}
       <div className='min-w-60'>
          <p className='my-2 text-xl flex items-center cursor-pointer gap-2' onClick={() => setShowFilter(!showFilter)}>FILTERS</p>
          {/* Category Filter */}
          <div className={`border border-[#d1c7a3] pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
             <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
             <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
               <p className='flex gap-2'>
                  <input className='w-3' type='checkbox'  value={'Timber'}/> Timber
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox'  value={'Plywood'}/> Plywood
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox'  value={'Nails'}/> Nails
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox'  value={'Leather'}/> Leather
              </p>
             </div>
          </div>
          {/* Price Filter */}
          <div className={`border border-[#d1c7a3] pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
             <p className='mb-3 text-sm font-medium'>Price Range</p>
             <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <div className='flex gap-2'>
                  <input
                    type='number'
                    placeholder='Min Price'
                    aria-label='Minimum Price'
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className='border border-[#d1c7a3] px-2 py-1  w-[98px] bg-white'
                  />
                  <input
                    type='number'
                    placeholder='Max Price'
                     aria-label='Maximum Price'
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className='border border-[#d1c7a3] px-2 py-1 w-[98px] bg-white text-black'
                  />
                </div>
      <button
      onClick={applyFilter}
      className='mt-3 bg-[#d1c7a3] text-black rounded-md py-2 mr-4 px-4 hover:bg-[#bfb292] transition-all duration-200'
      disabled={!minPrice || !maxPrice || minPrice > maxPrice}
      >
        Apply Filter
      </button>
       <button onClick={resetFilters} className='mt-3 bg-gray-300 text-black rounded-md py-2 mr-4 px-4'>
              Reset Filters
            </button>
             </div>
          </div>
       </div>
         <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable pauseOnFocusLoss />
    </div>
  )
}

export default Material