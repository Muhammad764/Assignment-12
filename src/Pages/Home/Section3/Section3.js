import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid'

const Section3 = () => {
    return (
      <div className='flex lg:gap-x-48 bg-secondary py-10 lg:pl-10 px-5'>
         <div><h1 className="lg:pl-20 mb-5 text-lg lg:text-5xl font-bold text-primary "><p className='pl-8 lg:pl-20 lg:pb-2'>CALL US ON</p>  +44 (0) 778877878</h1></div>
         <div><button className="btn btn-primary ml-5 mt-2 lg:ml-48 lg:mt-8 text-white">Get Started <ArrowRightIcon className='w-8 pl-2'></ArrowRightIcon> </button></div>

        
      </div>
             
    
    );
};

export default Section3;