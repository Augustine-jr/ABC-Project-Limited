import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);
  const location = useLocation();

  const toggleMenu = () => {
    const newVisibleState = !visible;
    setVisible(newVisibleState);
    setMenuActive(!menuActive);

    // Disable scroll when menu is visible, enable when hidden
    document.body.style.overflow = newVisibleState ? "hidden" : "auto";
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if scroll position is past the height of the hero section
      if (window.scrollY > window.innerHeight) {
        setIsHeroSection(false);
      } else {
        setIsHeroSection(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "auto"; // Ensure scroll is enabled when changing routes
  }, [location]);

  // Variants for Framer Motion animations on the sidebar
  const sidebarVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 120 } },
    exit: { x: "100%", transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <motion.div
      className={`fixed top-0 left-0 w-full z-50 px-6 py-5 transition-all duration-300 ${
        isHeroSection ? "bg-transparent" : "bg-[#ebe6d7]"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex justify-between w-full items-center py-5 px-6 font-bold">
        <Link to="/">
          <motion.img
            src={isHeroSection ? assets.ABC_light : assets.ABC_Logo}
            alt="ABC Logo"
            className="w-20 md:w-40"
            animate={{ opacity: isHeroSection ? 1 : 0.8 }}
            transition={{ duration: 0.5 }}
          />
        </Link>

        <motion.ul
          className={`hidden sm:flex gap-5 text-sm ${
            isHeroSection ? "text-white" : "text-gray-700"
          }`}
        >
          {["HOME", "MATERIALS", "ABOUT", "CONTACT"].map((text, index) => (
            <NavLink
              key={index}
              to={`/${text.toLowerCase()}`}
              className="flex flex-col items-center gap-1"
            >
              <motion.p
                animate={{ color: isHeroSection ? "#ffffff" : "#333333" }}
                transition={{ duration: 0.5 }}
              >
                {text}
              </motion.p>
            </NavLink>
          ))}
        </motion.ul>

        <div className="flex items-center gap-6 justify-between">
          <motion.img
            src={isHeroSection ? assets.search_icon_light : assets.search_icon}
            alt="Search Icon"
            className={`w-7 cursor-pointer ${isHeroSection ? "w-[20px]" : ""}`}
            animate={{ opacity: isHeroSection ? 1 : 0.8 }}
            transition={{ duration: 0.5 }}
          />

          <div className="group relative">
            <motion.img
              className="w-7 cursor-pointer"
              src={isHeroSection ? assets.profile_icon_light : assets.profile_icon}
              alt="Profile Icon"
              animate={{ opacity: isHeroSection ? 1 : 0.8 }}
              transition={{ duration: 0.5 }}
            />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 bg-[#d1c7a3] rounded">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 text-gray-700 rounded">
                <p className="cursor-pointer explore hover:text-black">My Profile</p>
                <p className="cursor-pointer explore hover:text-black">Orders</p>
                <p className="cursor-pointer explore hover:text-black">Logout</p>
              </div>
            </div>
          </div>

          <Link to="/cart" className="relative">
            <motion.img
              src={isHeroSection ? assets.pickuptruck_light : assets.pickuptruck_icon}
              alt="Picktruck Icon"
              className="w-8 min-w-5 cursor-pointer"
              animate={{ opacity: isHeroSection ? 1 : 0.8 }}
              transition={{ duration: 0.5 }}
            />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              10
            </p>
          </Link>

          <div
            onClick={toggleMenu}
            className={`menu-toggle ${menuActive ? "active" : ""} w-8 h-8 cursor-pointer flex flex-col justify-around items-center transition-transform duration-500 sm:hidden`}
          >
            <img src={assets.menu_icon} alt="menu icon" />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed top-0 right-0 bg-[#ebe6d7] w-full h-full z-50 sm:hidden"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col text-gray-600 p-6">
              <div
                onClick={() => {
                  setVisible(false);
                  setMenuActive(false);
                  document.body.style.overflow = "auto";
                }}
                className="flex items-center gap-4 p-3 pt-3 cursor-pointer"
              >
                <img src={assets.backarrow_icon} alt="Back Arrow Icon" className="w-5" />
                <p>Back</p>
              </div>

              {["HOME", "MATERIALS", "ABOUT", "CONTACT"].map((text, index) => (
                <NavLink
                  key={index}
                  to={`/${text.toLowerCase()}`}
                  className="p-3 border-b border-[#d1c7a3] hover:bg-[#ebe6d7] transition-transform duration-500 transform"
                  style={{ transitionDelay: `${100 * (index + 1)}ms` }}
                  onClick={() => {
                    setVisible(false);
                    setMenuActive(false);
                    document.body.style.overflow = "auto";
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
  );
};

export default Navbar;
