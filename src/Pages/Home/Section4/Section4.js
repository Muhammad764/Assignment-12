import React from 'react';
import img1 from './imag/pic1.jpg'
import img2 from './imag/pic2.jpg'
import img3 from './imag/pic3.jpg'
import img4 from './imag/pic4.jpg'
import img5 from './imag/pic5.jpg'

const Section4 = () => {
    return (
        <div className='flex px-8 pt-16 pb-20 gap-x-4'>
            <div><img className='shadow-lg' src={img1} alt="brand" /></div>
            <div><img className='shadow-lg' src={img2} alt="brand" /></div>
            <div><img className='shadow-lg' src={img3} alt="brand" /></div>
            <div><img className='shadow-lg ' src={img4} alt="brand" /></div>
            <div><img className='shadow-lg' src={img5} alt="brand" /></div>
        </div>
    );
};

export default Section4;