import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function ExSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
         navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation ,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>  <div className="">
        <div
          className="card  bg-transparent "
        >
          <div className="card-img">
           <Link to ="/experiences"><img
              src="/images/rooms/bonfire.jpg"
              className="Manaliimg"
              alt="..." 
            />
            </Link> 
          </div>
          <div className="card-body pb-5 ">
          
              <Link to ="/experiences">
                <p className="p1 text-[1.3rem] ps-3 pt-3">
              {" "}
           Bonfire<br/> <span className="text-[1.2rem]">Explore</span>
            </p>
            </Link> 
           
          </div>
        </div>
      </div></SwiperSlide>
        <SwiperSlide>     <div className="">
        <div
          className="card bg-transparent"
        >
          <div className="card-img">
             <Link to ="/experiences"> <img
              src="/images/rooms/rooftop.jpg"
              className="Manaliimg"
              alt="..."
            />
            </Link>
          </div>
          <div className="card-body pb-5">
         <Link to ="/experiences"> <p className="p1 text-[1.3rem] ps-3 pt-3">
              {""}
            Roof top <br/> <span className="text-[1.2rem]">Explore</span>
            </p>
            </Link>
            
          </div>
        </div>
      </div></SwiperSlide>
        <SwiperSlide>  
          
           <div className="">
             <Link to ="/experiences">
        <div
          className="card bg-transparent "
        >
          <div className="card-img">
            <img
              src="/images/rooms/pool1.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body pb-5">
          <p className="p1 text-[1.3rem] ps-3 pt-3">
              {" "}
             Pool<br/> <span className="text-[1.2rem]">Explore</span>
            </p>
          </div>
        </div>
        </Link>
      </div></SwiperSlide>
        <SwiperSlide>     <div className="">

           <Link to ="/experiences">
        <div
          className="card bg-transparent"
        >
          <div className="card-img">
            <img
              src="/images/rooms/yoga.jpg"
              className="Manaliimg w-[100%] h-[400px] object-cover"
              alt="..."
            />
          </div>
          <div className="card-body pb-5 ">
          <p className="p1 text-[1.3rem] ps-3 pt-3">
              {""}
               Yoga & Meditation <br/> <span className="text-[1.2rem]">Explore</span>
            </p>
          </div>
        </div>
        </Link>
      </div></SwiperSlide>
        <SwiperSlide>     <div className="">
            <Link to ="/experiences">
        <div
          className="card bg-transparent"
        >
          <div className="card-img">
            <img
              src="/images/rooms/spa.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body pb-5  ">
           <p className="p1 text-[1.3rem] ps-3 pt-3">
              {" "}
               Spa & Wellness <br/> <span className="text-[1.2rem]">Explore</span>
            </p>
          </div>
        </div>
        </Link>
      </div></SwiperSlide>
        <SwiperSlide>  <div className="">
            <Link to ="/experiences">
        <div
          className="card bg-transparent "
        >
          <div className="card-img">
            <img
              src="/images/rooms/lounge.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body pb-5 ">
         <p className="p1 text-[1.3rem] ps-3 pt-3">
              {""}
          Lounge Events <br/> <span className="text-[1.2rem]">Explore</span>
            </p>
          </div>
        </div>
        </Link>
      </div></SwiperSlide>
      
      </Swiper>
    </>
  );
}
