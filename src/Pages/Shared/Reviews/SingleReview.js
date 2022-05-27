import React from 'react';

const SingleReview = ({ review }) => {
    const {name,image,description} = review
    return (
        <div>
            <div class="card w-64 h-96 bg-base-100  mt-5">
  <div class="avatar pt-4 lg:px-16">
  <div class="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={image} />
  </div>
</div>
  <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <div class="rating">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
</div>
        <p class="pb-5">{description}</p>
    <div class="card-actions justify-end">

    </div>
  </div>
</div>
        </div>
    );
};

export default SingleReview;