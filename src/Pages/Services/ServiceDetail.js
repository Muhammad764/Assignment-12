import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import axios from 'axios';
import { toast } from 'react-toastify';

const ServiceDetail = () => {
    const { serviceId} = useParams()
    const [service, setService] = useState({})
    const [user] = useAuthState(auth);

    const handleSubmit = event => {
        event.preventDefault()
        const order = {
            name:user.displayName,
            email: user.email,
            service:service.name,
            serviceId:serviceId,
            quantity: event.target.quantity.value,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }

        axios.post('https://agile-retreat-61796.herokuapp.com/order', order)
            .then(response => {
                const { data } = response
                if (data.insertedId) {
                    toast.success('Your order is Booked!')
                    event.target.reset()
                }
        })
    }

    useEffect(() => {
        const url = `https://agile-retreat-61796.herokuapp.com/service/${serviceId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    }, [serviceId])
    
    return (
      <div className='flex lg:mt-20 pb-16 px-10 gap-x-10 '>
        <div className="card w-1/2  shadow-xl">
        <figure>
        <img src={service.image} alt="leather component" />
        </figure>
       
    <div className="card-body items-center text-center">
            <h2 className="card-title">{service.name}</h2>
            <p>{service.description}</p>
            <p className='text-lg font-medium'>Price: {service.price}</p>
            <p className='text-lg font-medium'>Minimum Order Quantity: {service.minimumOrderQuantity}</p>
            <p className='text-lg font-medium'>Available Quantity: {service.availableQuantity}</p>
         </div>
            </div>
        <div className="card w-1/2  shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className='text-secondary text-3xl font-bold pb-5'>Book Your Order</h2>
                    { <form onSubmit={handleSubmit} >
                    <input type="name" value={user.displayName} className="input input-bordered w-full" readOnly disabled />
                    <input type="email" value={user.email} className="input input-bordered w-full mt-3" readOnly disabled />
                        <input type="number" name='quantity' placeholder="Quantity" className="input input-bordered w-full mt-3" required />
                
                    <input type="text" name='address' placeholder="Address" className="input input-bordered w-full mt-3" required/>
                    <input type="number" name='phone' placeholder="Phone" className="input input-bordered w-full mt-3" required />
                    <input type="submit" name='submit' value="Place Order" className="btn btn-secondary text-white input input-bordered w-full mt-3" />
                </form> }
                    
         </div>
      </div>      
</div>
    );
};

export default ServiceDetail;