import React from 'react';
import Him from '../components/Him'; // Hero section
import LatestCollection from '../components/LatestCollection'; // Latest Collection component
import BestSeller from '../components/BestSeller'; // Best Seller component
import OurPolicy from '../components/OurPolicy'; // Policy section
import NewsLetterBox from '../components/NewsLetterBox'; // Newsletter subscription box

const Home = () => {
  return (
    <div>
      {/* Full-width Hero section */}
      <div className="w-full">
        <Him /> {/* The hero video and content */}
      </div>

      {/* Main content with layout constraints */}
      <div className="px-4 sm:px-10 md:px-10 max-w-[1720px] mx-auto bg-[#ebe6d7] text-gray-900 py-8">
        <LatestCollection />
        <BestSeller />
        <OurPolicy />
        <NewsLetterBox />
      </div>
    </div>
  );
};

export default Home;
