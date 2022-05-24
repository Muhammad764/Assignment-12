import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid'

const Section3 = () => {
    return (
      <div className='lg:flex lg:gap-x-48 bg-secondary py-10 pl-10'>
         <div><h1 className="lg:pl-12 mb-5 text-5xl font-bold text-primary ">CALL US ON +44 (0) 778877878</h1></div>
         <div><button className="btn btn-primary  text-white">Get Started <ArrowRightIcon className='w-8 pl-2'></ArrowRightIcon> </button></div>

        
      </div>
             
    
    );
};

export default Section3;