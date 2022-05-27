import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';
import './LoadReview.css'

const LoadReview = () => {
    const [reviews, setReviews] = useState([])
    
    useEffect(() => {
        fetch('review.json')
       .then(res => res.json())
      .then(data => setReviews(data))  
    },[])
    return (
        <div> 
            <div className='load-review pl-24 pt-16'>
                 {
                reviews.map(review => <SingleReview
                    key={review.id}
                    review ={review}
                ></SingleReview>)
            }
           </div>
        </div>
    );
};

export default LoadReview;