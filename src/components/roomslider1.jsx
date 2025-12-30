import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function RoomSlider1() {
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
          <Link to={"/suites"} >
          <div className="card-img">
            <img
              src="/images/rooms/suites1.jpg"
              className="Manaliimg"
              alt="..." 
            />
          </div>
          <div className="card-body pb-5 ">
            <p className="p1 text-[1.3rem] ps-3 pt-3">
              {" "}
            SUITES <br/> <span> EXPLORE</span>
            </p>
           
          </div>
          </Link>
        </div>
      </div></SwiperSlide>
        <SwiperSlide>     <div className="">
        <div
          className="card bg-transparent"
        >
          <Link to={"/gardenroom"} >
          <div className="card-img">
            <img
              src="/images/rooms/room1.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body pb-5">
         <p className="p1 text-[1.3rem] ps-3 pt-3">
              {""}
              PREMIER GARDEN VIEW ROOM <br /> <span> EXPLORE</span>
            </p>
          </div>
          </Link>
        </div>
      </div></SwiperSlide>
        <SwiperSlide>   <div className="">
        <div
          className="card bg-transparent "
        >
          <Link to={"/poolroom"} >
          <div className="card-img">
           <img
              src="/images/rooms/room2.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body pb-5">
          <p className="p1 text-[1.3rem] ps-3 pt-3">
              {" "}
              PREMIER POOL VIEW ROOM <br /> <span> EXPLORE</span>
            </p>
          </div>
           </Link>
        </div>
      </div></SwiperSlide>
        <SwiperSlide>     <div className="">
        <div
          className="card bg-transparent"
        >
          <Link to={"/deluxeroom"} >
          <div className="card-img">
           <img
              src="/images/rooms/deluxeroom1.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body pb-5 ">
          <p className="p1 text-[1.3rem] ps-3 pt-3">
              {""}
             DELUXE GARDEN VIEW ROOM <br /> <span> EXPLORE</span>
            </p>
          </div>
          </Link>
        </div>
      </div></SwiperSlide>
        <SwiperSlide>     <div className="">
        <div
          className="card bg-transparent"
        >
          <Link to={"/superdeluxeroom"}>
          <div className="card-img">
              <img
              src="/images/rooms/deluxeroom.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body pb-5 ">
          <p className="p1 text-[1.3rem] ps-3 pt-3">
              {""}
            SUPER DELUXE ROOM <br /> <span> EXPLORE</span>
            </p>
          </div>
          </Link>
        </div>
      </div></SwiperSlide>
        <SwiperSlide>  <div className="">
        <div
          className="card bg-transparent "
        >
          <Link to={"/familyroom"}>
          <div className="card-img">
               <img
              src="/images/rooms/room3.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body pb-5 ">
          <p className="p1 text-[1.3rem] ps-3 pt-3">
              {""}
              FAMILY ROOM <br /> <span> EXPLORE</span>
            </p>
          </div>
          </Link>
        </div>
      </div></SwiperSlide>
      
      </Swiper>
    </>
  );
}
