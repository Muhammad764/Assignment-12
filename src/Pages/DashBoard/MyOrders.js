import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {TrashIcon} from '@heroicons/react/solid'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
    const [orders,setOrder] = useState([])
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

        const handelDelete = id => {
        const proceed = window.confirm('Are You Sure?')
        if(proceed){
            const url = `https://agile-retreat-61796.herokuapp.com/order/${id}`;
            fetch(url, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
            console.log(data)
            const remaining = orders.filter(order => order._id !== id);
            setOrder(remaining);
            })
        }
    }
      
     useEffect(() => {
       if (user) {
            fetch(`https://agile-retreat-61796.herokuapp.com/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    
                    setOrder(data);
                });
        }
    }, [user])
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Quantity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
            {
             orders.map((order, index) => <tr
             key={order._id}
             >
           <th>{index + 1}</th>
           <td>{order.name}</td>
        <td>{order.email}</td>
        <td>{order.quantity}</td>
        <td>
           <button onClick={()=>handelDelete(order._id)} className="btn btn-outline btn-sm btn-error"><TrashIcon className='w-6 py-1'></TrashIcon></button>
    
        </td>
      </tr> )                     
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;