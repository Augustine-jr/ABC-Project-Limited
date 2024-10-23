import React from 'react';        // Import React library to use JSX and build components
import { Routes, Route, useLocation } from 'react-router-dom';   // Import Routes and Route to handle navigation
import Home from './pages/Home';
import Material from './pages/Material';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


// Define the main App component
const App = () => {
   const location = useLocation(); // Get the current route

   // Define an array of paths where the footer should NOT be displayed
   const FooterRoutes = ['/', '/materials', '/about']
   const NavbarRoutes = ['/', '/materials', '/about']
  return ( 
    <div>

    {NavbarRoutes.includes(location.pathname) && <Navbar />}
      <div className={'px-4 sm:px-10 md:px-10 max-w-[1720px] mx-auto  bg-[#ebe6d7] text-gray-900'}>

      {/* Routes container to handle different URL paths */}
      <Routes>
        {/* When user visits the root URL (/), render the Home component */}
        <Route path='/' element={<Home />} />
        
        {/* Define other routes for different pages */}
        <Route path='/materials' element={<Material />} />
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
    {FooterRoutes.includes(location.pathname) && <Footer />}
    </div>    
       {/* Conditionally render Footer based on the current route */}
    </div>
  
  )
}

// Export the App component so it can be used in other files
export default App