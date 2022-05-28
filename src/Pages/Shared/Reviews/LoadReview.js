import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';
import './LoadReview.css'

const LoadReview = () => {
    const [reviews, setReviews] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/review')
       .then(res => res.json())
      .then(data => setReviews(data))  
    },[])
    return (
        <div> 
            <div className='load-review pl-6 lg:px-8 pb-16 pt-24'>
                 {
                reviews.map(review => <SingleReview
                    key={review._id}
                    review ={review}
                ></SingleReview>)
            }
           </div>
        </div>
    );
};

export default LoadReview;