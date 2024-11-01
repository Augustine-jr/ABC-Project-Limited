import React from 'react'
import Hero from '../components/Hero'// Imported this from Hero.jsx into the Home.jsx page so whenever we open HOme page it will display whatever is in Hero.jsx
import LatestCollection from '../components/LatestCollection'// Imported this from LatestCollection
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
import Footer from '../components/Footer'
import Him from '../components/Him'

const Home = () => {
  return (
    <div>
       <Him />
       <LatestCollection />
       <BestSeller />
       <OurPolicy />
       <NewsLetterBox />
    </div>
  )
}


 
export default Home