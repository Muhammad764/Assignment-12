import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../Hooks/useAdmin';
import auth from '../../firebase.init';

const Dashboard = () => {
  const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle " />
            <div className="drawer-content ">
        <h2 className='text-2xl font-bold text-center py-5 text-secondary'>Welcome to Dashboard</h2>
       <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-secondary shadow-lg text-white font-bold">
                    
      <li><Link to="/dashboard">My Orders</Link></li>
      <li><Link to="/dashboard/review">Add Review</Link></li>
      <li><Link to="/dashboard/profile">My Profile</Link></li>
            {admin && <>
            <li><Link to="/dashboard/orders">Manage All Orders</Link></li>
      <li><Link to="/dashboard/added">Add A Product</Link></li>
      <li><Link to="/dashboard/users">Make Admin</Link></li>
      <li><Link to="/dashboard/manage">Manage Product</Link></li>
            
            </>
        
        }
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;