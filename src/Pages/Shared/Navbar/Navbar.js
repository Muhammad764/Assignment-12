import React from 'react';
import { Link } from 'react-router-dom';
import image from "./logo-1.png"

const Navbar = () => {
    return (
        <div className="navbar hero-overlay bg-opacity-60 px-12 py-6 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="reviews">Reviews</Link></li>
        <li><Link to="contact">Contact Us</Link></li>
        <li><Link to="login">Login</Link></li>
        
      </ul>
    </div>
    <img className='w-48' src={image} alt="logo website" />
  </div>
        <div className="navbar-end hidden lg:flex">
          
    <ul className="menu menu-horizontal  p-0">
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="reviews">Reviews</Link></li>
        <li><Link to="contact">Contact Us</Link></li>
        <li><Link to="login">Login</Link></li>
        
    </ul>
        </div>
      </div>
      
    );
};

export default Navbar;