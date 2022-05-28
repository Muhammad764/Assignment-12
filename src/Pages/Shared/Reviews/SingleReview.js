import React from 'react';

const SingleReview = ({ review }) => {
    const {name,image,description} = review
    return (
        <div>
            <div className="card w-80 lg:w-96 h-80 bg-base-100 shadow-lg  mt-5">
  <div className="avatar pl-24 lg:pl-36  pt-4 lg:px-16">
  <div className="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={image} />
  </div>
</div>
  <div className="card-body">
                    <h2 className="card-title lg:pl-24">{name}</h2>
                    <div className="rating lg:pl-24">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" onChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" onChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" onChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" onChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" onChecked />
</div>
        <p className="pb-5">{description}</p>
    <div className="card-actions justify-end">

    </div>
  </div>
</div>
        </div>
    );
};

export default SingleReview;