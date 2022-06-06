import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';
import './LoadReview.css'
import Slider from 'react-slick/lib/slider';


const LoadReview = () => {
    const [reviews, setReviews] = useState([])
    
    useEffect(() => {
        fetch('https://agile-retreat-61796.herokuapp.com/review')
       .then(res => res.json())
      .then(data => setReviews(data))  
    }, [])
    
     const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
        initialSlide: 0,
         autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div> 
            <div className='m-10'>
                <Slider  {...settings}>
                {
                reviews.map(review => <SingleReview
                    key={review._id}
                    review ={review}
                ></SingleReview>)
                }
                </Slider>
            </div>
       </div>
    );
};

export default LoadReview;