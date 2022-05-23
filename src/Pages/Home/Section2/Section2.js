import React from 'react';
import {PencilIcon,GlobeAltIcon,CubeIcon} from '@heroicons/react/solid'

const Section2 = () => {
    return (
        <div className='flex ml-8 px-16 pt-8 pb-20 gap-x-5 services-container'>
            <div>
            <p className='text-2xl text-primary'>Step 1</p>
            <p className='text-4xl font-semibold pt-4'><PencilIcon className='w-16'></PencilIcon> DESIGN AND DRAWINGS</p>
            <p className='pt-4'>The first step in turning your dream into a physical product is the design phase.</p>
            </div>
            <div>
            <p className='text-2xl text-primary'>Step 2</p>
            <p className='text-4xl font-semibold pt-4'><CubeIcon className='w-16'></CubeIcon> SAMPLE PRODUCTION</p>
            <p className='pt-4 '>We move on to making a physical product that you can hold and test.</p>
            </div>
            <div>
            <p className='text-2xl text-primary '>Step 3</p>
            <p className='text-4xl font-semibold pt-4'><GlobeAltIcon className='w-16'></GlobeAltIcon>QUANTITY PRODUCTION</p>
            <p className='pt-4'>Once you’ve approved your sample product, we move onto final production.</p>
            </div>
            
        </div>
    );
};

export default Section2;