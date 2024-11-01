import React, { useEffect, useState } from 'react'; // import React and useState hook for managing state changes
import { Link, NavLink, useLocation,  } from 'react-router-dom'; // import Link and NavLink for navigation between pages
import { assets } from '../assets/assets'; // Import assests (like images/icons) used in the navbar

const Navbar = () => {
  // state to control whether the sidebar menu is visible or not
  const [visible, setVisible] = useState(false);  

  // state to control whether the hamburger icon (on small screens) is active or not
  const [menuActive, setMenuActive] = useState(false); // Controls the hamburger icon state
  const location = useLocation();

  // Function to toggle menu visibility and hamburger button state
  const toggleMenu = () => {
    const newVisibleState = !visible
    setVisible(!visible);  // Toggle the sidebar menu visibility (show/hide)
    setMenuActive(!menuActive); // Toggle the hamburger icon's active state (open/close)

    //Disable scroll when menu is visible, enable when it's hidden
  document.body.style.overflow = newVisibleState ? 'hidden' : 'auto';
  };

   //update navbar background based on route change
   useEffect(() => {
    document.body.style.overflow = 'auto' // Ensure scroll is enbaled when changing routes
   }, [location]);


  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 px-6 py-5 transition-all duration-300 ${
        location.pathname === '/' ? 'bg-transparent' : 'bg-[#ebe6d7]'
      } text-gray-700`}
    >
    <div className="flex justify-between w-full items-center py-5 px-6 font-bold">
      {/* Logo: Displays the logo of the website */}
      <Link to='/'><img src={assets.ABC_Logo} alt="ABC Logo" className="w-20 md:w-40" /></Link>

      {/* Desktop Menu Links */}
      <ul className="hidden sm:flex gap-5 text-sm text-white">
        {['HOME', 'MATERIALS', 'ABOUT', 'CONTACT'].map((text, index) => (
          <NavLink key={index} to={`/${text.toLowerCase()}`} className='flex flex-col items-center gap-1'>
            <p>{text}</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        ))}
      </ul>


      {/* Icons and Menu Toggle for smaller screens */}
      <div className="flex items-center gap-6">
        {/* Search Icon */}
        <img src={assets.search_icon} alt="Search Icon" className="w-7 cursor-pointer" />

        {/* Profile Icon with dropdown menu */}
        <div className="group relative">
          <img className="w-7 cursor-pointer" src={assets.profile_icon} alt="Profile Icon" />
          {/* Dropdown menu appears when hovering over the profile icon */}
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 bg-[#d1c7a3] rounded">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 text-gray-700 rounded">
              {/* Profile options */}
              <p className="cursor-pointer explore hover:text-black">My Profile</p>
              <p className="cursor-pointer explore hover:text-black">Orders</p>
              <p className="cursor-pointer explore hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          {/* Cart icon with item count */}
          <img src={assets.pickuptruck_icon} alt="Picktruck Icon" className="w-8 min-w-5 cursor-pointer" />
          {/* Display the number of items in the cart */}
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
        </Link>

        {/* Hamburger Menu for small screens */}
        <div
          onClick={toggleMenu} // when clicked, it will toggle the menu visibility and hamburger icon state
          className={`menu-toggle ${menuActive ? 'active' : ''} w-8 h-8 cursor-pointer flex flex-col justify-around items-center transition-transform duration-500 sm:hidden`}
        >
          {/* Hamburger Menu icon (3  horizontal lines) */}
          <img src={assets.menu_icon} alt='menu icon' className='w-8' />
        </div>
      </div>

      {/* Sidebar menu for smaller screens (when hamburger menu is clicked) */}
      <div className={`absolute top-0 right-0 overflow-hidden bg-inherit  duration-700 transition-all ${visible ? 'w-full' : 'w-0'} h-full`}>
        <div className="flex flex-col text-gray-600">
          {/* Back Button  to close the sidebar menu */}
          <div onClick={() => {
            setVisible(false); // close the sidebar menu
            setMenuActive(false); // set hamburger menu to inactive
            document.body.style.overflow = 'auto'; // Enable scroll again
          }} className="flex items-center gap-4 p-3 pt-3 cursor-pointer">
            {/* Back Arrow Icon */}
            <img src={assets.backarrow_icon} alt="Back Arrow Icon" className="w-5" />
            <p>Back</p>
          </div>

          {/* Sidebar Menu Links with animations */}
          {/* Home Link in Sidebar */}
          <NavLink onClick={() => {
            setVisible(false);
            setMenuActive(false);
            document.body.style.overflow = 'auto';
          }}
            to="/"
            className={`p-3 border-b border-[#d1c7a3] hover:bg-[#ebe6d7] transition-transform duration-500 transform ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
            style={{ transitionDelay: '100ms' }} // Delay for the first link to slide in
          >
            Home
          </NavLink>

          {/* Materials Link in Sidebar */}
          <NavLink onClick={() => {
            setVisible(false);
            setMenuActive(false);
            document.body.style.overflow = 'auto';
          }}
            to="/materials"
            className={`p-3  border-b border-[#d1c7a3] hover:bg-[#ebe6d7] transition-transform duration-500 transform ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
            style={{ transitionDelay: '200ms' }} // Delay for the second link
          >
            Materials
          </NavLink>

          {/* About Link in Sidebar */}
          <NavLink onClick={() => {
            setVisible(false);
            setMenuActive(false);
            document.body.style.overflow = 'auto';
          }}
            to="/about"
            className={`p-3  border-b border-[#d1c7a3] hover:bg-[#ebe6d7] transition-transform duration-500 transform ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
            style={{ transitionDelay: '300ms' }} // Delay for the third link
          >
            About
          </NavLink>

          {/* Contact Link in Sidebar */}
          <NavLink onClick={() => {
            setVisible(false);
            setMenuActive(false);
            document.body.style.overflow = 'auto';
          }}
            to="/contact"
            className={`p-3  border-b border-[#d1c7a3] hover:bg-[#ebe6d7] transition-transform duration-500 transform ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
            style={{ transitionDelay: '400ms' }} // Delay for the fourth link
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar; // Export the component for use in other parts of the application
