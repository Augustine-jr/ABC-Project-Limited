import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Him = () => {
  return (
    <div className="relative hero min-h-screen overflow-hidden ">
      {/* Image Background */}
      <img
        src={assets.hero_image} // Replace this with your image path
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Hero Content */}
      <div className="hero-content text-center relative z-10 flex items-center justify-center h-full ">
        <motion.h1
          className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Timber For Every Project
        </motion.h1>
      </div>
    </div>
  
  );
};

export default Him;
