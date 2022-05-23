import React from 'react';
import banner1 from './items 3.jpg'
import {ArrowRightIcon} from '@heroicons/react/solid'

const Section3 = () => {
    return (
        <div>
        <div className="hero py-8" style={{backgroundImage: `url(${banner1})`}}>
         <div className="hero-overlay bg-opacity-90"></div>
         <div className="hero-content text-center text-neutral-content">
         <div className="flex justify-between gap-x-64 py-10">
          <h1 className="mb-5 text-5xl font-bold text-primary">CALL US ON +44 (0) 7788 778 78</h1>
         <button className="btn btn-primary text-white">Get Started <ArrowRightIcon className='w-8 pl-2'></ArrowRightIcon> </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Section3;