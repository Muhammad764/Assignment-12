import React from 'react';

const Service = ({ service }) => {
    const {image,name,description,price,minimumOrderQuantity,availableQuantity} = service
    return (
        <div className='px-10 py-6'>
           <div className="card bg-base-100  shadow-xl">
                <figure><img src={image}alt="Shoes" /></figure>
          <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    
            <div className="card-actions justify-between">
             <p className='text-3xl pt-1 font-medium' >{price}</p>
             <button className="btn btn-primary text-white">BOOK NOW</button>
          </div>
         </div>
         </div> 
           
        </div>
    );
};

export default Service;