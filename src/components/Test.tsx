import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);
  const location = useLocation();

  const toggleMenu = () => {
    const newVisibleState = !visible;
    setVisible(newVisibleState);
    setMenuActive(!menuActive);
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

  return (
    <div className={`fixed top-0 left-0 w-full z-50 px-6 py-5 transition-all duration-300 ${isHeroSection ? 'bg-transparent' : 'bg-[#ebe6d7]'}`}>
      <div className="flex justify-between w-full items-center py-5 px-6 font-bold">
        <Link to='/'>
          <img 
            src={isHeroSection ? assets.light_logo : assets.dark_logo} 
            alt="ABC Logo" 
            className="w-20 md:w-40" 
          />
        </Link>

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

        <div className="flex items-center gap-6">
          <img src={assets.search_icon} alt="Search Icon" className={`w-7 cursor-pointer ${isHeroSection ? 'text-white' : 'text-gray-700'}`} />
          <div className="group relative">
            <img className={`w-7 cursor-pointer ${isHeroSection ? 'text-white' : 'text-gray-700'}`} src={assets.profile_icon} alt="Profile Icon" />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 bg-[#d1c7a3] rounded">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 text-gray-700 rounded">
                <p className="cursor-pointer explore hover:text-black">My Profile</p>
                <p className="cursor-pointer explore hover:text-black">Orders</p>
                <p className="cursor-pointer explore hover:text-black">Logout</p>
              </div>
            </div>
          </div>

          <Link to="/cart" className="relative">
            <img src={assets.pickuptruck_icon} alt="Picktruck Icon" className={`w-8 min-w-5 cursor-pointer ${isHeroSection ? 'text-white' : 'text-gray-700'}`} />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
          </Link>

          <div onClick={toggleMenu} className={`menu-toggle ${menuActive ? 'active' : ''} w-8 h-8 cursor-pointer flex flex-col justify-around items-center transition-transform duration-500 sm:hidden`}>
            <img src={assets.menu_icon} alt='menu icon' className='w-8' />
          </div>
        </div>
      </div>

      {/* Sidebar menu for smaller screens */}
      <div className={`fixed top-0 right-0 overflow-hidden bg-[#ebe6d7]  duration-700 transition-all ${visible ? 'w-full' : 'w-0'} h-full`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={() => {
            setVisible(false);
            setMenuActive(false);
            document.body.style.overflow = 'auto';
          }} className="flex items-center gap-4 p-3 pt-3 cursor-pointer">
            <img src={assets.backarrow_icon} alt="Back Arrow Icon" className="w-5" />
            <p>Back</p>
          </div>
          {['HOME', 'MATERIALS', 'ABOUT', 'CONTACT'].map((text, index) => (
            <NavLink
              key={index}
              to={`/${text.toLowerCase()}`}
              className={`p-3 border-b border-[#d1c7a3] hover:bg-[#ebe6d7] transition-transform duration-500 transform ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
              style={{ transitionDelay: `${100 * (index + 1)}ms` }}
              onClick={() => {
                setVisible(false);
                setMenuActive(false);
                document.body.style.overflow = 'auto';
              }}
            >
              <p className={isHeroSection ? 'text-white' : 'text-gray-700'}>
                {text}
              </p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
