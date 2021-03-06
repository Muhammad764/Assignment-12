import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import image from "./logo-1.png"

const Navbar = () => {
  const [user] = useAuthState(auth);
  
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
};

    return (
        <div className="navbar bg-secondary text-white  px-12 sticky top-0 z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52">
        <li><Link to="/">Home</Link></li>
              
        
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li>{user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
        
      </ul>
    </div>
    <Link to="/">
       <img  className='lg:w-48 ml-12 lg:ml-0' src={image} alt="logo website" />     
    </Link>
  </div>
        <div className="navbar-end hidden lg:flex">
          
    <ul className="menu menu-horizontal  p-0">
        
        {
          user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
       <li>{user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to="/signup" className=' font-semibold border-2 hover:btn-primary'>Register</Link>}</li>
        
    </ul>
        </div>
        <div className="nav-end pl-24 lg:pl-0">
      <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
        </div>
      </div>
      
    );
};

export default Navbar;