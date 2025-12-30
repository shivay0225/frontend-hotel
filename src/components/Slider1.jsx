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

export default function MySlider1() {
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
           <Link to ="/hotelmanali" reloadDocument ><img
              src="/images/hotels/Manali.jpg"
              className="Manaliimg"
              alt="..." 
            />
            </Link> 
          </div>
          <div className="card-body pb-5 ">
          
              <Link to="/hotelmanali" reloadDocument> 
               <p className="p1 text-[1.3rem] ps-3 pt-3">
              {" "}
              The SR Haven <br/> Manali (Himacahal Pradesh){""}
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
           <Link to={"/hotelmasoori"} > <img
              src="/images/hotels/masouri.jpg"
              className="Manaliimg"
              alt="..."
            />
            </Link>
          </div>
          <div className="card-body pb-5">
        <Link to={"hotelmasoori"}> <p className="p1 text-[1.3rem] ps-3 pt-3">
              {""}
              The SR Haven <br /> Masoori (Uttarakhand)
            </p>
            </Link>
            
          </div>
        </div>
      </div></SwiperSlide>
        <SwiperSlide>  
          
           <div className="">
            <Link to={"/hoteldharamshala"} >
        <div
          className="card bg-transparent "
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
        </Link>
      </div></SwiperSlide>
        <SwiperSlide>     <div className="">

          <Link to={"/hoteldhalousie"}>
        <div
          className="card bg-transparent"
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
        </Link>
      </div></SwiperSlide>
        <SwiperSlide>     <div className="">
           <Link to={"/hotelnainital"}>
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
            <Link to={"/hoteldarjleeng"}>
        <div
          className="card bg-transparent "
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
        </Link>
      </div></SwiperSlide>
      
      </Swiper>
    </>
  );
}
