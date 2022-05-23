import React, { useEffect, useState } from 'react';
import Service from './Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    
    useEffect(() => {
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className='services-container py-20'>
                 {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                
                ></Service>)
                }
           </div>
        </div>
    );
};

export default Services;