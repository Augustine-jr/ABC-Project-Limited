import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="">
      {/* Your About page content will go here >*/}
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.placeholder_icon}  alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ab. Molestias placeat vitae iste dignissimos corporis omnis nostrum delectus quibusdam illo! Possimus temporibus enim blanditiis, provident itaque quibusdam. Inventore, esse!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat laudantium cupiditate eligendi commodi iste consequuntur nulla illo nobis amet labore eaque culpa mollitia officiis, ea quisquam alias exercitationem. Quasi, cumque?</p>
          <b className='text-gray-800'>Our Misson</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, placeat, quas quaerat reiciendis itaque nemo autem quo voluptatibus molestias deleniti! Officia, nisi veniam. Quas, architecto.</p>
        </div>
      </div>
    </div>
  )
}

export default About