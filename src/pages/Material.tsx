import React, { useContext, useState } from 'react'; // Importing React, useContext, and useState hooks
import { ShopContext } from '../context/ShopContext'; // Importing the ShopContext for accessing shop data
import { ShopContextType } from '../types'; // Importing ShopContextType for TypeScript type safety
import { ToastContainer, toast } from 'react-toastify'; // Importing ToastContainer and toast for notifications
import 'react-toastify/dist/ReactToastify.css'; // Importing CSS for toast notifications
import { assets } from '../assets/assets'; // Importing assets such as icons
import axios, { AxiosError } from 'axios'; // Importing axios for making API requests

const Material = () => {
  // Using the ShopContext to access product data
  const context = useContext(ShopContext);
  
  // Error handling if context is not available (not wrapped in provider)
  if (!context) {
    throw new Error('Material component must be used within a ShopContextProvider');
  }

  // Destructuring products from the context for easy access
  const { products } = context;

  // State variables for filter controls and loading state
  const [showFilter, setShowFilter] = useState(false); // To toggle the visibility of the filter options
  const [minPrice, setMinPrice] = useState<string>(''); // State for minimum price input
  const [maxPrice, setMaxPrice] = useState<string>(''); // State for maximum price input
  const [loading, setLoading] = useState(false); // State to show loading status during filtering

  // Function to apply the price filter
  const applyFilter = async () => {
    // Convert string inputs to numbers for filtering
    const min = Number(minPrice);
    const max = Number(maxPrice);

    // Validating the price inputs
    if (min < 0 || max < 0) {
      toast.error('Invalid price range. Please enter positive numbers.');
      return; // Early exit if validation fails
    }
    if (min > max) {
      toast.error('Invalid price range. Minimum price cannot be greater than maximum price.');
      return; // Early exit if validation fails
    }
    
    try {
      setLoading(true); // Set loading state to true while fetching data
      const response = await axios.get('/api/products', {
        params: { // Sending price range as query parameters
          minPrice: min,
          maxPrice: max,
        },
      });

      // Handle the response based on the status code
      if (response.status === 200) {
        console.log(response.data); // Log the filtered products (can be used to update state)
        toast.success(`Filtered products from ${min} to ${max}`); // Notify success
      } else {
        toast.warn(`Unexpected response with status code: ${response.status}`);
      }
    } catch (error) {
      const axiosError = error as AxiosError; // Type assertion for error handling

      // Handle errors based on the status code
      if (axiosError.response) {
        const statusCode = axiosError.response.status;

        if (statusCode === 400) {
          toast.error('Bad request. Please check the Filter inputs.');
        } else if (statusCode === 404) {
          toast.error('No products found with the given price range.');
        } else if (statusCode === 500) {
          toast.error('Server error. Please try again later.');
        } else {
          toast.error(`An error occurred: ${statusCode}`);
        }

        console.error('Server responded with an error:', axiosError.response.status);
      } else if (axiosError.request) {
        // The request was made but no response was received
        toast.error('No response from the server. Please try again later.');
      } else {
        // Error setting up the request
        toast.error('An error occurred while setting up the request.');
      } 
    } finally {
      setLoading(false); // Reset loading state after the request is complete
    }
  };

  // Function to reset filters
  const resetFilters = () => {
    setMinPrice(''); // Clear minimum price
    setMaxPrice(''); // Clear maximum price
    setShowFilter(false); // Hide filter options after reset
    toast.info('Filters have been reset'); // Notify user
  };

  // Render the component
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2' onClick={() => setShowFilter(!showFilter)}>
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? '' : '-rotate-90'}`} src={assets.dropdown_icon} alt="Dropdown Logo" />
        </p>
        
        {/* Category Filter */}
        <div className={`border border-[#d1c7a3] pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {/* Checkbox for each category */}
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Timber'} /> Timber
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Plywood'} /> Plywood
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Nails'} /> Nails
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Leather'} /> Leather
            </p>
          </div>
        </div>
        
        {/* Price Filter */}
        <div className={`border border-[#d1c7a3] pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Price Range</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <div className='flex gap-2'>
              <input
                type='number'
                placeholder='Min Price'
                aria-label='Minimum Price'
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)} // Update minPrice on change
                className='border border-[#d1c7a3] px-2 py-1 w-[98px] bg-white'
              />
              <input
                type='number'
                placeholder='Max Price'
                aria-label='Maximum Price'
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)} // Update maxPrice on change
                className='border border-[#d1c7a3] px-2 py-1 w-[98px] bg-white text-black'
              />
            </div>
            <button
              onClick={applyFilter} // Apply filter on click
              className='mt-3 bg-[#d1c7a3] text-black rounded-md py-2 mr-4 px-4 hover:bg-[#bfb292] transition-all duration-200'
              disabled={!minPrice || !maxPrice} // Disable button if inputs are empty
            >
              {loading ? 'Filtering...' : 'Apply Filter'} // Show loading text if applicable
            </button>
            <button onClick={resetFilters} className='mt-3 bg-gray-300 text-black rounded-md py-2 mr-4 px-4'>
              Reset Filters // Reset filters button
            </button>
          </div>
        </div>
      </div>
      
      {/* Toast Container for notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable pauseOnFocusLoss />
    </div>
  );
}

export default Material;
