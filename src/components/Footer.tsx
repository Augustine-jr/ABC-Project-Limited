import React from 'react'
import { Link } from 'react-router-dom'; 
import { assets } from '../assets/assets';

const Footer:  React.FC = () => { // Define Footer as a functional component

  return (
    <div className='pt-20'>

     <footer className="footer bg-[#d1c7a3] text-black p-10 rounded-t-2xl">
          <aside>
    <Link to='/'><img src={assets.ABC_Logo} alt="ABC Logo" className="w-20 md:w-40 pt-10" /></Link>
  </aside>
  <nav>
    <h6 className="footer-title">Products</h6>
    <a className="link link-hover">Timber</a>
    <a className="link link-hover">Nails</a>
    <a className="link link-hover">Leather</a>
    <a className="link link-hover">Plywood</a>
  </nav>
  <nav>
  <h6 className="footer-title">Support</h6>
  <a className="link link-hover">Shipping & Delivery</a>
  <a className="link link-hover">Order Tracking</a>
  <a className="link link-hover">Returns & Exchanges</a>
  <a className="link link-hover">FAQs</a>
</nav>
<nav>
    <h6 className="footer-title flex flex-row">Get In Touch</h6>
          <a href="https://www.facebook.com" className="link link-hover">Facebook</a>
          <a href="https://www.instagram.com" className="link link-hover">Instagram</a>
          <a href="https://x.com" className="link link-hover">X</a>
           <a href="https://wa.me/2349077579138" target="_blank" rel="noopener noreferrer" className="link link-hover">WhatsApp</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Careers</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <nav>
    <h6 className="footer-title">Payment Options</h6>
          <div className="flex gap-4 flex-col">
            <img src={assets.paystack_logo} alt="Paystack" className="w-20" />
            <img src={assets.interswitch_logo} alt="interswitch" className="w-20" />
          </div>
  </nav>
  <nav>
    <h6 className="footer-title">Contact Us</h6>
          <p>1234 Main Street, Lagos, Nigeria</p>
          <p>Phone: +234-123-4567</p>
          <p>Email: info@abcproject.com</p> 
  </nav>  
   <button className="footer-title" onClick={() => window.scrollTo(0, 0)}>
          Back to Top
        </button>      
</footer>

   <div className=' bg-[#d1c7a3]'>
    <hr className='pb-5' />
      <p className="text-center text-black text-xs">
        &copy; {new Date().getFullYear()} ABC Project LTD. All rights reserved.
      </p>
      <p className="text-center text-black text-xs">
        Designed by <a href="https://www.abcproject.com" className="link link-hover">ABC Project</a>
      </p>
    </div>
      
      </div>
  )
}

export default Footer