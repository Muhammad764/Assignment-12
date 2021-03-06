import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import img from './site 1.jpeg'

const Section1 = () => {
    return (
        <div>
            <div className="hero min-h-screen lg:px-12 ">
           <div className="hero-content flex-col lg:flex-row">
          <img className='lg:w-1/2 lg:pl-4' src={img} alt="bag" />
          <div className='lg:px-8 lg:pl-16'>
           <h1 className="text-5xl font-bold">Our Capabilities</h1>
            <p className="py-6">You’ve been inspired–now it’s time to make it happen. Transform your ideas into reality with Manufacturer Leather’s manufacturing capabilities. With over four decades of experience in leather craftsmanship and manufacturing</p>
            <button className="btn btn-primary text-white">Learn More<ArrowRightIcon className='w-8 pl-3'></ArrowRightIcon></button>
           </div>
          </div>
         </div>
        </div>
    );
};

export default Section1;