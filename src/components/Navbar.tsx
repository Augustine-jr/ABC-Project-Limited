import React, { useEffect, useState } from 'react'; // import React and useState hook for managing state changes
import { Link, NavLink, useLocation,  } from 'react-router-dom'; // import Link and NavLink for navigation between pages
import { assets } from '../assets/assets'; // Import assests (like images/icons) used in the navbar

const Navbar = () => {
  // state to control whether the sidebar menu is visible or not
  const [visible, setVisible] = useState(false);  

  // state to control whether the hamburger icon (on small screens) is active or not
  const [menuActive, setMenuActive] = useState(false); // Controls the hamburger icon state
  const [isHeroSection, setIsHeroSection] = useState(true);
  const location = useLocation();

  // Function to toggle menu visibility and hamburger button state
  const toggleMenu = () => {
    const newVisibleState = !visible
    setVisible(!visible);  // Toggle the sidebar menu visibility (show/hide)
    setMenuActive(!menuActive); // Toggle the hamburger icon's active state (open/close)

    //Disable scroll when menu is visible, enable when it's hidden
  document.body.style.overflow = newVisibleState ? 'hidden' : 'auto';
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsHeroSection(false);
      } else {
        setIsHeroSection(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
   //update navbar background based on route change
   useEffect(() => {
    document.body.style.overflow = 'auto' // Ensure scroll is enbaled when changing routes
   }, [location]);


  return (
    <div className={`fixed top-0 left-0 w-full z-50 px-6 py-5 transition-all duration-300 ${isHeroSection ? 'bg-transparent' : 'bg-[#ebe6d7]'}`}>
    <div className="flex justify-between w-full items-center py-5 px-6 font-bold">
      {/* Logo: Displays the logo of the website */}
      <Link to='/'><img src={isHeroSection ?  assets.ABC_light : assets.ABC_Logo} alt="ABC Logo" className="w-20 md:w-40" /></Link>

      {/* Desktop Menu Links */}
      <ul className={`hidden sm:flex gap-5 text-sm ${isHeroSection ? 'text-white' : 'text-gray-700'}`}>
        {['HOME', 'MATERIALS', 'ABOUT', 'CONTACT'].map((text, index) => (
          <NavLink key={index} to={`/${text.toLowerCase()}`} className='flex flex-col items-center gap-1'>
            <p className={isHeroSection ? 'text-white' : 'text-gray-700'}>
              {text}
            </p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        ))}
      </ul>


      {/* Icons and Menu Toggle for smaller screens */}
      <div className="flex items-center gap-6 justify-between">
        {/* Search Icon */}
        <img
          src={isHeroSection ? assets.search_icon_light : assets.search_icon}
          alt="Search Icon"
          className={`w-7 cursor-pointer ${isHeroSection ? 'w-[20px]' : ''}`}
        />


        {/* Profile Icon with dropdown menu */}
        <div className="group relative">
          <img className="w-7 cursor-pointer" src={isHeroSection ?  assets.profile_icon_light : assets.profile_icon} alt="Profile Icon" />
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
    </div>

      {/* Sidebar menu for smaller screens (when hamburger menu is clicked) */}
      <div className={`fixed top-0 right-0 overflow-hidden bg-[#ebe6d7]  duration-700 transition-all ${visible ? 'w-full' : 'w-0'} h-full`}>
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
          
          {/* sidebar menu links */}
        {/*Array of navigation link texts: HOME, MATERIALS, ABOUT, and CONTACT*/}
{['HOME', 'MATERIALS', 'ABOUT', 'CONTACT'].map((text, index) => (
    <NavLink
        // Each NavLink component requires a unique key, so we use the array index
        key={index}

        // 'to' property sets the route path for each link
        // Converts the link text to lowercase and sets it as the route path, e.g., '/home', '/materials'
        to={`/${text.toLowerCase()}`}

        // CSS classes for styling and animations
        className={`p-3 border-b border-[#d1c7a3] hover:bg-[#ebe6d7] transition-transform duration-500 transform ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        }`}

        // Adds a delay for each link's animation so they slide in one after another
        // Delay increases by 100ms for each link, creating a staggered effect
        style={{ transitionDelay: `${100 * (index + 1)}ms` }}

        // onClick event handler that hides the sidebar and re-enables page scrolling
        onClick={() => {
            setVisible(false);      // Hides the sidebar by setting visibility to false
            setMenuActive(false);    // Resets the active menu state
            document.body.style.overflow = 'auto'; // Re-enables page scroll
        }}
    >
        {/* Display the link text */}
        {text}
    </NavLink>
))}

        </div>
      </div>
    </div>
  );
};

export default Navbar; // Export the component for use in other parts of the application
