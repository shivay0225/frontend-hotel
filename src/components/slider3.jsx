import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Function to determine slidesToShow based on current window width
const getSlidesToShow = () => {
  if (typeof window === "undefined") return 1; // Default for server-side rendering
  const width = window.innerWidth;
  if (width >= 1024) return 3; // Laptop/Desktop
  if (width >= 768) return 3;  // Tablet
  return 1;                   // Mobile (default)
};



const Thirdslider = () => {

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

    useEffect(() => {
        const handleResize = () => setSlidesToShow(getSlidesToShow());
        window.addEventListener("resize", handleResize);
        // Run on mount as well
        handleResize(); 

        return () => window.removeEventListener("resize", handleResize);
    }, []);
        const settings = {
  
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow, // Use the state variable here
        slidesToScroll: 1,
        // Remove the 'responsive' array entirely as we are handling this manually
    };

  
  return ( 
    <>
   <div className="slider">
    <Slider   {...settings}>
      
        <div className="">
        <div
          className="card  bg-transparent "
          style={{ width: "24rem", height: 510}}
        >
          <div className="card-img">
            <img
              src="/images/hotels/w1.jpeg"
              className="Manaliimg"
              alt="..." 
            />
          </div>
          <div className="card-body">
            <p className="p1">
              {" "}
              The SR Haven <br/> Manali (Himacahal Pradesh){""}
            </p>
             
          
          </div>
        </div>
      </div>
      <div className=" ">
        <div
          className="card bg-transparent"
          style={{ width: "24rem", height: 510 }}
        >
          <div className="card-img">
            <img
              src="/images/hotels/w2.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body">
            <p className="p1">
              {""}
              The SR Haven <br /> Masoori (Uttarakhand)
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div
          className="card bg-transparent"
          style={{ width: "24rem", height: 510}}
        >
          <div className="card-img">
            <img
              src="/images/hotels/w6.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body ">
            <p className="p1">
              {" "}
              The SR Haven <br /> Dharamshala (HimachalPradesh)
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div
          className="card bg-transparent"
          style={{ width: "24rem", height: 510 }}
        >
          <div className="card-img">
            <img
              src="/images/hotels/w7.jpeg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body">
            <p className="p1">
              {""}
              The SR Haven <br /> Dhalousie (HimachalPradesh)
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div
          className="card bg-transparent"
          style={{ width: "24rem", height: 510 }}
        >
          <div className="card-img">
            <img
              src="/images/hotels/d1.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body ">
            <p className="p1">
              {" "}
              The SR Haven <br /> Nainital – Bhimtal- (Uttarakhand)
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div
          className="card bg-transparent "
          style={{ width: "24rem", height: 510 }}
        >
          <div className="card-img">
            <img
              src="/images/hotels/d2.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body">
            <p className="p1">
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



export default Thirdslider

