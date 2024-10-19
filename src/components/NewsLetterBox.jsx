import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; 
import validator from 'validator';

const NewsLetterBox = () => {
  const [email, setEmail] = useState(''); // This holds the email input from the user

  // This function runs when the form is submitted
  const onSubmitHandler = async (event) => {
    event.preventDefault(); // Prevent the page from refreshing when the form is submitted

   // Use validator to check if the email is valid
  if (!validator.isEmail(email)) {
    toast.error('Please enter a valid email address.', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'custom-toast',
      progressClassName: 'custom-toast-progress',
    });
      return; // Exit if email is invalid
    }

    // Check if email already exists (Placeholder for now)
    const existingEmails = ['existing@email.com', 'another@existing.email.com']; // Replace with real checks later
    if (existingEmails.includes(email)) {
      toast.error('This email address is already registered.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: 'custom-toast', 
        progressClassName: 'custom-toast-progress'
      });
      return; // Exit if email is already registered
    }

    try {
      // Simulate sending the email to the backend (axios part)
      // We'll comment out this part since you don't have a backend yet
      /*
      const response = await axios.post('https://yourbackend.com/api/subscribe', { email });
      
      if (response.status === 200) {
        toast.success('You have successfully subscribed!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: 'custom-toast',
          progressClassName: 'custom-toast-progress'
        });
        setEmail(''); // Clear the email input after successful subscription
      } else {
        toast.error('Failed to subscribe. Please try again later.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: 'custom-toast',
          progressClassName: 'custom-toast-progress'
        });
      }
      */

      // For now, simulate success
      toast.success('You have successfully subscribed!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: 'custom-toast',
        progressClassName: 'custom-toast-progress'
      });

      setEmail(''); // Clear the input after subscription

    } catch (error) {
      // If there's an error (like network or server issue), show an error toast
      toast.error('An error occurred. Please try again later.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: 'custom-toast', 
        progressClassName: 'custom-toast-progress'
      });
    }
  };

  return (
    <div className='text-center pt-8'>
      <ToastContainer /> {/* Toast container to display success/error messages */}

      <p className='text-lg sm:text-2xl md:text-3xl font-medium text-gray-800'>
        Stay Updated with the Latest Building Materials and Offers
      </p>
      <p className='text-gray-400 mt-3 text-sm sm:text-base pb-3'>
        Sign up for our newsletter to receive exclusive offers, product updates, and expert advice on building materials, tools, and supplies for your next project.
      </p>

      {/* Form to get the email */}
      <form onSubmit={onSubmitHandler} className="rounded-md border-2 border-solid border-[#d1c7a3] flex items-center max-w-md mx-auto">
        <input
          className="px-2 py-3 outline-none w-full sm:w-64 md:w-80 lg:w-[300px] font-normal text-base border-none flex-1 bg-[#ebe6d7] 
          focus:bg-[#ebe6d7] focus:outline-none focus:ring-0 focus:border-[#d1c7a3]" 
          name="email" 
          placeholder="Enter your email"
          type="email"
          value={email} 
          onChange={(event) => setEmail(event.target.value)} 
          required
        />
        <button className="bg-[#d1c7a3] text-black p-2 font-bold text-sm sm:text-base flex-shrink-0 py-4">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
