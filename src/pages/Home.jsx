import React from 'react'
import Hero from '../components/Hero'// Imported this from Hero.jsx into the Home.jsx page so whenever we open HOme page it will display whatever is in Hero.jsx

const Home = () => {
  return (
    <div>
       <Hero />
    </div>
  )
}



export default Home