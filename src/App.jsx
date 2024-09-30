import React from 'react'        // Import React library to use JSX and build components
import { Routes, Route } from 'react-router-dom'   // Import Routes and Route to handle navigation

// Define the main App component
const App = () => {
  return (
    // Apply responsive padding with Tailwind CSS
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

      {/* Routes container to handle different URL paths */}
      <Routes>
        {/* When user visits the root URL (/), render the Home component */}
        <Route path='/' element={<Home />} />
        
        {/* Define other routes for different pages */}
        <Route path='/collections' element={<Collections />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products/:productId' element={<Product />} />  {/* productId is dynamic */}
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />

        {/* Catch-all route for any undefined paths */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      
    </div>
  )
}

// Export the App component so it can be used in other files
export default App
