import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [visible, setVisible] = useState(false);  // Controls the sidebar menu visibility
  const [menuActive, setMenuActive] = useState(false); // Controls the hamburger icon state

  // Function to toggle menu visibility and button state
  const toggleMenu = () => {
    setVisible(!visible);
    setMenuActive(!menuActive); // Toggle the hamburger icon between active and inactive
  };

  return (
    <div className="flex justify-between w-full items-center py-5 px-6 font-bold bg-[#ebe6d7] text-gray-700">
      {/* Logo */}
      <img src={assets.ABC_Logo} alt="ABC Logo" className="w-20 md:w-40" />

      {/* Desktop Menu Links */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/materials" className="flex flex-col items-center gap-1">
          <p>MATERIALS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Icons and Menu Toggle for smaller screens */}
      <div className="flex items-center gap-6">
        {/* Search Icon */}
        <img src={assets.search_icon} alt="Search Icon" className="w-7 cursor-pointer" />

        {/* Profile Icon */}
        <div className="group relative">
          <img className="w-7 cursor-pointer" src={assets.profile_icon} alt="Profile Icon" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 bg-[#d1c7a3] rounded">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 text-gray-700 rounded">
              <p className="cursor-pointer explore hover:text-black">My Profile</p>
              <p className="cursor-pointer explore hover:text-black">Orders</p>
              <p className="cursor-pointer explore hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <img src={assets.pickuptruck_icon} alt="Picktruck Icon" className="w-8 min-w-5 cursor-pointer" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
        </Link>

        {/* Hamburger Menu for small screens */}
        <div
          onClick={toggleMenu}
          className={`menu-toggle ${menuActive ? 'active' : ''} w-8 h-8 cursor-pointer flex flex-col justify-around items-center transition-transform duration-500 sm:hidden`}
        >
          <img src={assets.menu_icon} alt='menu icon' className='w-8' />
        </div>
      </div>

      {/* Sidebar menu for smaller screen */}
      <div className={`absolute top-0 right-0 overflow-hidden bg-[#d1c7a3] duration-700 transition-all ${visible ? 'w-[55%]' : 'w-0'} h-1/2`}>
        <div className="flex flex-col text-gray-600">
          {/* Back Button */}
          <div onClick={() => {
            setVisible(false);
            setMenuActive(false); // Reset both states to close the menu and the sidebar
          }} className="flex items-center gap-4 p-3 pt-3 cursor-pointer">
            <img src={assets.backarrow_icon} alt="Back Arrow Icon" className="w-5" />
            <p>Back</p>
          </div>

          {/* Sidebar Menu Links with animations */}
          <NavLink
            to="/"
            className={`p-3 hover:bg-[#ebe6d7] transition-transform duration-500 transform ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
            style={{ transitionDelay: '100ms' }} // Delay for the first link
          >
            Home
          </NavLink>
          <NavLink
            to="/materials"
            className={`p-3 hover:bg-[#ebe6d7] transition-transform duration-500 transform ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
            style={{ transitionDelay: '200ms' }} // Delay for the second link
          >
            Materials
          </NavLink>
          <NavLink
            to="/about"
            className={`p-3 hover:bg-[#ebe6d7] transition-transform duration-500 transform ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
            style={{ transitionDelay: '300ms' }} // Delay for the third link
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={`p-3 hover:bg-[#ebe6d7] transition-transform duration-500 transform ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
            style={{ transitionDelay: '400ms' }} // Delay for the fourth link
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
