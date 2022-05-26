import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {TrashIcon} from '@heroicons/react/solid'

const MyOrders = () => {
    const [orders,setOrder] = useState([])
    const [user] = useAuthState(auth);

        const handelDelete = id => {
        const proceed = window.confirm('Are You Sure?')
        if(proceed){
            const url = `http://localhost:5000/order/${id}`;
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
        fetch(`http://localhost:5000/order?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
     },[user])
    return (
        <div>
            {/* <h2 className='text-5xl'>orders{order.length}</h2> */}
            <div class="overflow-x-auto">
  <table class="table w-full">
   
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
       orders.map((order,index) =><tr>
           <th>{index + 1}</th>
           <td>{order.name}</td>
        <td>{order.email}</td>
        <td>{order.quantity}</td>
        <td>
           <button onClick={()=>handelDelete(order._id)} class="btn btn-outline btn-sm btn-error"><TrashIcon className='w-6 py-1'></TrashIcon></button>
    
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