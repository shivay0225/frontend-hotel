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

export default function MySlider2() {
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
            <Link to="/dining">
        <div
          className="card  bg-transparent "
        >
          <div className="card-img">
             <img
              src="/images/hotels/d5.jpg"
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
        </Link>
      </div></SwiperSlide>
        <SwiperSlide> <div className="">
          <Link to="/dining">
        <div
          className="card bg-transparent"
        >
          <div className="card-img">
            <img
              src="/images/hotels/d6.jpg"
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
        </Link>
      </div></SwiperSlide>
        <SwiperSlide>   <div className="">
            <Link to="/dining">
        <div
          className="card bg-transparent "
        >
          <div className="card-img">
            <img
              src="/images/hotels/d4.jpg"
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
        </Link>
      </div></SwiperSlide>
        <SwiperSlide>     <div className="">
            <Link to="/dining">
        <div
          className="card bg-transparent"
        >
          <div className="card-img">
         <img
              src="/images/hotels/d7.jpg"
              className="Manaliimg"
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
        </Link>
      </div></SwiperSlide>
        <SwiperSlide>     <div className="">
            <Link to="/dining">
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
        </Link>
      </div></SwiperSlide>
        <SwiperSlide>  <div className="">
            <Link to="/dining">
        <div
          className="card bg-transparent "
        >
          <div className="card-img">
              <img
              src="/images/hotels/d2.jpg"
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
        </Link>
      </div></SwiperSlide>
      
      </Swiper>
    </>
  );
}
