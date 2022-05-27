import React, { Component } from "react";
import Slider from "react-slick";


export default class Reviews extends Component {
  
  render() {
    
    const settings = {
      
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
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
      <div className="px-16 py-12">
        <Slider {...settings}>
            <div className="pt-4 px-4">
                <div className="avatar ">
               <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://api.lorem.space/image/face?hash=80245" />
                 </div>
               </div>
                <h1 className="text-2xl pt-2">Jill Boulter</h1>
                <div className="rating pt-2">
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
        </div>
                <h3>Great service - great product</h3>
                <p>Ordered a sheepskin stool on 16/3 and delivered on 17/3. Great service and item is very good quality. Really really pleased. Thank you very much.</p>
          </div>
        <div>  
      </div>
        </Slider>
      </div>
    );
  }
}
