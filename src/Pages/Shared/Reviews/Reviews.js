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
           <div className="pt-4 px-4">
                <div className="avatar ">
               <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://api.lorem.space/image/face?hash=64318" />
                 </div>
               </div>
                <h1 className="text-2xl pt-2">Viven Burrows</h1>
                <div className="rating pt-2">
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
        </div>
                <h3>Cross-over leather handbag</h3>
                <p>I was very pleased with the cross-over leather handbag I ordered. The quality was excellent and the color was perfect, exactly what I wanted. Prompt service and a great product.</p>
          </div>
          </div>
          <div>
            <div className="pt-4 px-4">
                <div className="avatar ">
               <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://api.lorem.space/image/face?hash=92310" />
                 </div>
               </div>
                <h1 className="text-2xl pt-2">Can Yamen</h1>
                <div className="rating pt-2">
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked/>
        </div>
                <h3>Fantastic service!</h3>
                <p>Absolutely amazing !
                Super fast delivery and beautiful products - can see them lasting for years and years and these are certainly investment pieces.
                100% would recommend and will be coming back for more </p>
          </div>
          </div>
          <div>
                      <div>
            <div className="pt-4 px-4">
                <div className="avatar ">
               <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://api.lorem.space/image/face?hash=92310" />
                 </div>
               </div>
                <h1 className="text-2xl pt-2">Amansas alina</h1>
                <div className="rating pt-2">
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
        </div>
                <h3>Fantastic service!</h3>
                <p>Absolutely amazing !
                Super fast delivery and beautiful products - can see them lasting for years and years and these are certainly investment pieces.
                100% would recommend and will be coming back for more </p>
          </div>
        </div>
    </div>
          <div>
           <div className="pt-4 px-4">
                <div className="avatar ">
               <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://api.lorem.space/image/face?hash=80245" />
                 </div>
               </div>
                <h1 className="text-2xl pt-2">Neil</h1>
                <div className="rating pt-2">
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
        </div>
                <h3>Fantastic company and buyer experience</h3>
                <p>Ordered a sheepskin stool on 16/3 and delivered on 17/3. Great service and item is very good quality. Really really pleased. Thank you very much.</p>
          </div>
          </div>
          <div>
             <div className="pt-4 px-4">
                <div className="avatar ">
               <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://api.lorem.space/image/face?hash=80245" />
                 </div>
               </div>
                <h1 className="text-2xl pt-2">peter hilton</h1>
                <div className="rating pt-2">
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
        </div>
                
                <p>Ordered sheepskin leather aviator.
                Good confirmation arrived free postage within 2 days.
                Quality looks fab.
                The only think I would suggest to purchasers is order a size bigger on a standard fit.</p>
                </div>
          </div>
        </Slider>
      </div>
    );
  }
}
