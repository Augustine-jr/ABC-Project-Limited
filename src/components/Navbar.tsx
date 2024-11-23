import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";  // Importing navigation components from react-router-dom
import { assets } from "../assets/assets";  // Importing assets (images/icons)
import { motion, AnimatePresence } from "framer-motion";  // Importing Framer Motion for animations
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);  // State to manage the visibility of the mobile menu
  const [menuActive, setMenuActive] = useState(false);  // State to track the active state of the menu toggle
  const location = useLocation();  // Hook to get the current route location

  const { setShowSearch, getCartCount } = useContext(ShopContext);  // Remove type assertion

  // Function to toggle the mobile menu's visibility and manage body scroll
  const toggleMenu = () => {
    const newVisibleState = !visible;  // Toggle the visibility state
    setVisible(newVisibleState);
    setMenuActive(!menuActive);  // Toggle the menu active state

    // Disable scroll when the menu is visible, enable when hidden
    document.body.style.overflow = newVisibleState ? "hidden" : "auto";
  };

  // Ensure scroll is enabled when changing routes (e.g., after clicking a link)
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, [location]);  // Re-run whenever the route changes

  // Variants for Framer Motion animations (used for sidebar animation)
  const sidebarVariants = {
    hidden: { x: "100%" },  // Sidebar starts off-screen
    visible: { x: 0, transition: { type: "spring", stiffness: 120 } },  // Sidebar slides in smoothly
    exit: { x: "100%", transition: { type: "spring", stiffness: 120 } },  // Sidebar slides out smoothly
  };

  return (
    <div>
      {/* Main Navbar container with animation */}
      <motion.div
        className={"flex items-center justify-between transition-all duration-300"}  // Flex layout for navbar
        initial={{ y: -100 }}  // Initial Y position for sliding effect
        animate={{ y: 0 }}  // Final Y position after animation
        transition={{ duration: 0.5, ease: "easeInOut" }}  // Smooth easing for animation
      >
        {/* Navbar content */}
        <div className="flex justify-between w-full items-center py-5 px-12 font-bold">
          {/* Logo and link to the homepage */}
          <Link to="/">
            <motion.img
              src={assets.ABC_Logo}  // Logo image
              alt="ABC Logo"
              className="w-[100px] md:w-40"
              animate={{ opacity: 0.8 }}  // Fade-in effect
              transition={{ duration: 0.5 }}  // Smooth transition
            />
          </Link>

          {/* Main navigation links */}
          <motion.ul className="hidden sm:flex gap-5 text-sm text-gray-700">
            {["HOME", "MATERIALS", "ABOUT", "CONTACT"].map((text) => (
              <NavLink
                key={text}
                to={text.toLowerCase() === "home" ? "/" : `/${text.toLowerCase()}`}  // Route to the appropriate section
                className="flex flex-col items-center gap-1 relative"
              >
                <motion.p
                  initial={{ color: "#999999" }}  // Initial color (light grey)
                  animate={{ color: "#333333" }}  // Final color (dark grey)
                  transition={{ duration: 0.5 }}  // Smooth transition
                >
                  {text}
                </motion.p>

                   {window.location.pathname === (text.toLowerCase() === "home" ? "/" : `/${text.toLowerCase()}`) && (
  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ebe6d7] via-[#d1c7a3] to-[#645832] transition-all duration-300" />
)}
              </NavLink>
            ))}
          </motion.ul>
          

          {/* Icons and buttons */}
          <div className="flex items-center gap-6 justify-between">
            {/* Search icon */}
            <motion.img
              onClick={() => setShowSearch(true)}  // Show the search bar on click
              src={assets.search_icon}  // Search icon
              alt="Search Icon"
              className="w-7 cursor-pointer"
              animate={{ opacity: 0.8 }}  // Fade-in effect
              transition={{ duration: 0.5 }}  // Smooth transition
            />

            {/* Profile icon and dropdown */}
            <div className="group relative">
              <motion.img
                className="w-7 cursor-pointer"
                src={assets.profile_icon}  // Profile icon
                alt="Profile Icon"
                animate={{ opacity: 0.8 }}  // Fade-in effect
                transition={{ duration: 0.5 }}  // Smooth transition
              />
              {/* Dropdown menu (appears on hover) */}
              <div className="group-hover:block hidden absolute z-50 dropdown-menu right-0 pt-4 bg-[#d1c7a3] rounded">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 text-gray-700 rounded">
                  <p className="cursor-pointer explore hover:text-black">My Profile</p>
                  <p className="cursor-pointer explore hover:text-black">Orders</p>
                  <p className="cursor-pointer explore hover:text-black">Logout</p>
                </div>
              </div>
            </div>

            {/* Cart icon */}
            <Link to="/cart" className="relative">
              <motion.img
                src={assets.pickuptruck_icon}  // Cart icon
                alt="Pickuptruck Icon"
                className="w-8 min-w-5 cursor-pointer"
                animate={{ opacity: 0.8 }}  // Fade-in effect
                transition={{ duration: 0.5 }}  // Smooth transition
              />
              {/* Cart item count */}
              <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                {getCartCount()}
              </p>
            </Link>

            {/* Menu toggle button for mobile */}
            <div
              onClick={toggleMenu}
              className={`menu-toggle ${menuActive ? "active" : ""} w-8 h-8 cursor-pointer flex flex-col justify-around items-center transition-transform duration-500 sm:hidden`}
            >
              <img src={assets.menu_icon} alt="menu icon" />
            </div>
          </div>
        </div>

        {/* Mobile sidebar menu with animation */}
        <AnimatePresence>
          {visible && (
            <motion.div
              className="fixed top-0 right-0 bg-[#ebe6d7] w-full h-full z-50 sm:hidden"
              variants={sidebarVariants}  // Apply animation variants
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Sidebar content */}
              <div className="flex flex-col text-gray-600 p-6">
                <div
                  onClick={() => {
                    setVisible(false);  // Close the menu
                    setMenuActive(false);  // Reset the menu active state
                    document.body.style.overflow = "auto";  // Re-enable scrolling
                  }}
                  className="flex items-center gap-4 p-3 pt-3 cursor-pointer"
                >
                  <img src={assets.backarrow_icon} alt="Back Arrow Icon" className="w-5" />
                  <p>Back</p>
                </div>

                {/* Mobile navigation links */}
                {["HOME", "MATERIALS", "ABOUT", "CONTACT"].map((text, index) => (
                  <NavLink
                    key={index}
                    to={text.toLowerCase() === "home" ? "/" : `/${text.toLowerCase()}`}  // Route to the appropriate section
                    className="p-3 border-b border-[#d1c7a3] hover:bg-[#ebe6d7] transition-transform duration-500 transform"
                    style={{ transitionDelay: `${100 * (index + 1)}ms` }}  // Stagger transition delays for links
                    onClick={() => {
                      setVisible(false);  // Close the menu when a link is clicked
                      setMenuActive(false);  // Reset the menu active state
                      document.body.style.overflow = "auto";  // Re-enable scrolling
                    }}
                  >
                    {text}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Navbar;
