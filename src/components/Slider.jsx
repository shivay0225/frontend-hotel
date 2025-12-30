import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const MySlider = () => {

  
        const settings = {
       
    infinite: false,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
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
          slidesToShow: 1,
          slidesToScroll:1,
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
    <>
   <div className="slider">
    <Slider   {...settings}>
      
        <div className="px-4">
        <div
          className="card  bg-transparent h-[700px] "
        >
          <div className="card-img">
            <img
              src="/images/hotels/Manali.jpg"
              className="Manaliimg"
              alt="..." 
            />
          </div>
          <div className="card-body pb-5 ">
            <p className="p1 text-[1.3rem] ps-3 pt-3">
              {" "}
              The SR Haven <br/> Manali (Himacahal Pradesh){""}
            </p>
           
          </div>
        </div>
      </div>
      <div className=" px-2">
        <div
          className="card bg-transparent h-[700px]"
        >
          <div className="card-img">
            <img
              src="/images/hotels/masouri.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body pb-5">
         <p className="p1 text-[1.3rem] ps-3 pt-3">
              {""}
              The SR Haven <br /> Masoori (Uttarakhand)
            </p>
          </div>
        </div>
      </div>
      <div className="px-2">
        <div
          className="card bg-transparent h-[700px]"
        >
          <div className="card-img">
            <img
              src="/images/hotels/dharamshalaimg.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body pb-5">
          <p className="p1 text-[1.3rem] ps-3 pt-3">
              {" "}
              The SR Haven <br /> Dharamshala (HimachalPradesh)
            </p>
          </div>
        </div>
      </div>
      <div className="px-2">
        <div
          className="card bg-transparent h-[700px]"
        >
          <div className="card-img">
            <img
              src="/images/hotels/dhalousi.jpg"
              className="Manaliimg w-[100%] h-[400px] object-cover"
              alt="..."
            />
          </div>
          <div className="card-body pb-5 ">
          <p className="p1 text-[1.3rem] ps-3 pt-3">
              {""}
              The SR Haven <br /> Dhalousie (HimachalPradesh)
            </p>
          </div>
        </div>
      </div>
      <div className="px-2">
        <div
          className="card bg-transparent"
        >
          <div className="card-img">
            <img
              src="/images/hotels/nainital.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body pb-5  ">
           <p className="p1 text-[1.3rem] ps-3 pt-3">
              {" "}
              The SR Haven <br /> Nainital – Bhimtal- (Uttarakhand)
            </p>
          </div>
        </div>
      </div>
      <div className="px-2">
        <div
          className="card bg-transparent h-[700px] "
        >
          <div className="card-img">
            <img
              src="/images/hotels/darjleeng.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body pb-5 ">
         <p className="p1 text-[1.3rem] ps-3 pt-3">
              {""}
              The SR Haven <br/> Darjeeling (West Bengal)
            </p>
          </div>
        </div>
      </div>
    </Slider>
</div>
  
   
    </>
  )
    

}



export default MySlider

