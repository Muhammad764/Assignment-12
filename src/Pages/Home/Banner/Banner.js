import React from 'react';
import {ArrowRightIcon} from '@heroicons/react/solid'
import './Banner.css'


const Banner = () => {
  
    return (
      <div className="bg-img">
  <div className="hero"></div>
  <div className="hero-content text-center">
    <div className="pt-40">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-logo font-semibold text-zinc-50 text-center select-none leading-tight mb-4 font-[cursive]">Looking for a US <p className='mt-4 ml-8'>Leather Manufacturer?</p></h1>
    <p className="mb-5 text-slate-300 text-2xl ">From startups to global brands, we supply <br /> the world’s best leather goods.</p>
      <button className="btn btn-primary rounded-full text-white">In Details <ArrowRightIcon className='w-8 pl-3'></ArrowRightIcon></button>
      <button className="btn btn-primary ml-4 rounded-full text-white">Get a Quote <ArrowRightIcon className='w-8 pl-3'></ArrowRightIcon></button>
    </div>
  </div>
</div>
    );
};

export default Banner;