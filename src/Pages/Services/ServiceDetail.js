import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId} = useParams()
    const [service,setService] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
      <div className='pt-36 pb-16'>
        <div className="card w-1/2  shadow-xl">
         <figure><img src={service.image} alt="leather component" /></figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{service.name}</h2>
            <p>{service.description}</p>
            <p className='text-lg font-medium'>Price: {service.price}</p>
            <p className='text-lg font-medium'>Minimum Order Quantity: {service.minimumOrderQuantity}</p>
            <p className='text-lg font-medium'>Available Quantity: {service.availableQuantity}</p>
            <div className="card-actions">
            </div>
       </div>
     </div>
            
        </div>
    );
};

export default ServiceDetail;