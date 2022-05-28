import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import './LoadReview.css'

const LoadReview = () => {
    const [reviews, setReviews] = useState([])
    
    useEffect(() => {
        fetch('https://agile-retreat-61796.herokuapp.com/review')
       .then(res => res.json())
      .then(data => setReviews(data))  
    },[])
    return (
        <div> 
            
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
                slidesPerView={3}
                pagination={{ clickable: true }}
                scrollbar={{draggable:true}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
       <SwiperSlide>
            <div className='load-review pl-6 lg:px-8 pb-6 pt-24'>
                 {
                reviews.map(review => <SingleReview
                    key={review._id}
                    review ={review}
                ></SingleReview>)
            }
            </div>
        </SwiperSlide>
    </Swiper>
        </div>
    );
};

export default LoadReview;