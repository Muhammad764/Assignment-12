import React from 'react';
import {ArrowRightIcon} from '@heroicons/react/solid'
import './Banner.css'

const Banner = () => {
    return (
      <div className="bg-img">
  <div className="hero"></div>
  <div className="hero-content text-center">
    <div className="pt-48">
    <h1 className="mb-5 text-6xl  text-white font-bold">Looking for a US <br /> Leather Manufacturer?</h1>
    <p className="mb-5 text-white text-2xl ">From startups to global brands, we supply <br /> the world’s best leather goods.</p>
      <button className="btn btn-primary rounded-full text-white">In Details <ArrowRightIcon className='w-8 pl-3'></ArrowRightIcon></button>
      <button className="btn btn-primary ml-4 rounded-full text-white">Get a Quote <ArrowRightIcon className='w-8 pl-3'></ArrowRightIcon></button>
    </div>
  </div>
</div>
    );
};

export default Banner;