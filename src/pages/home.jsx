

import Footer from "../components/footer";
import Header from "../components/header"
import MySlider1 from "../components/Slider1";
import MySlider2 from "../components/slider4";
import MySlider3 from "../components/slider5";
import { useState } from "react";
import Herosec from "../components/herosec";;
import { Link } from "react-router-dom";



const Home = () => {

  const [destinationOpen, setDestinationOpen] = useState(false);
const [showBorder, setShowBorder] = useState(false);

const toggleDropdown = () => {
  if (!destinationOpen) {
    // Opening
    setShowBorder(true);
    setDestinationOpen(true);
  } else {
    // Closing
    setDestinationOpen(false);

    // Remove border AFTER animation time
    setTimeout(() => {
      setShowBorder(false);
    }, 600); // same as duration-500
  }
};
  return (

     <>
     

    <Herosec/>
      
      <div className=" w-full  cn3 ">
        <div className=" w-full lg:px-18 px-3">

          <div
            className=" w-full row px-1"
          >
            <div className="lux-heading lg:mt-0 ">
              <div className="lg:mt-5  mt-36 ">
                <h1 className="text-[40px] font-[400]  subpixel-antialiased mb-0"> Our Hotels</h1>
                <span className="lux-line flex lg:justify-center">
                  {" "}
                  <img
                    className="hrimg "
                    src="/images/hrline.png"
                    alt=""
                  />
                </span>
              </div>
            </div>
            <div className="flex">
              <p className="lux-heading2  flex justify-between  border-b border-b-black w-full"> <span>Destinations </span>
                {/* <button className="" onClick={() => setDestinationOpen(!destinationOpen)}>  */}
                <button className="" onClick={toggleDropdown}>

                  <svg
                    viewBox="0 0 20 20"
                    fill=""
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-8 me-1"
                  >
                    <path
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
              </p>
              <div
                // onTransitionEnd={() => {
                //   if (!destinationOpen) {
                //     setShowBorder(false);   // fully closed hone ke baad hi hatana
                //   }
                // }}

                className={`
    absolute right-0 lg:me-18 me-[11.6px] z-50
    lg:mt-16 mt-10 
    text-black font-serif
 
    overflow-hidden


  ${destinationOpen
                    ? "max-h-[600px] duration-1800   ease-[cubic-bezier(1,15,0,0,29)]-out"
                    : "max-h-0  duration-800  ease-[cubic-bezier(1,15,0,0,29)]-in "}
       transition-[max-height]

       

    
  `}
              >
                {/* HEADER */}

                <div className="lg: pt-2.5  w-full  flex justify-end">

                  <div className={`lg:pt-7 pt-5  lg:pb-0 pb-11 lg:ps-o ps-10 lg:pe-0 pe-4 w-[100%] bg-[#f7f4e5]  
                          ${destinationOpen
                      ? "max-h-[600px] duration-1800   ease-[cubic-bezier(1,15,0,0,29)]-out"
                      : "max-h-0  duration-800  ease-[cubic-bezier(1,15,0,0,19)]-in "}
                             transition-[max-height]
                ${showBorder
                      ? "border border-black/20 shadow-xl"
                      : "border border-transparent shadow-none"} `}>
                    <div className=" lg:px-6 lg:py-4 py-2 lg:pt-0   border-b border-black/50 ">
                      <h3 className="text-lg  font-[500]  tracking-wide">
                        The SR Heaven
                      </h3>
                    </div>

                    {/* DESTINATIONS */}
                    <div className=" lg:flex none lg:px-7  lg:pt-4 pt-4  lg:space-y-6 space-y-7 gap-30 ">


                      <ul className="lg:py-3 lg:space-y-12 space-y-7 text-[18px]">

                        <Link to="/hotelmanali" className="block">
                          <li className="lg:border-b border-b-black">
                            Manali (Himachal Pradesh)
                          </li>
                        </Link>

                        <Link to="/hotelmasoori" className="block">
                          <li className="lg:border-b border-b-black">
                            Mussoorie (Uttarakhand)
                          </li>
                        </Link>

                        <Link to="/hoteldharamshala" className="block">
                          <li className="lg:border-b border-b-black">
                            Dharamshala (Himachal Pradesh)
                          </li>
                        </Link>

                      </ul>


                      <ul className="lg:py-3 lg:space-y-12 space-y-7 text-[18px]">

                        <Link to="/hoteldhalousie" className="block">
                          <li className="lg:border-b border-b-black">
                            Dalhousie (Himachal Pradesh)
                          </li>
                        </Link>

                        <Link to="/hotelnainital" className="block">
                          <li className="lg:border-b border-b-black">
                            Nainital (Uttarakhand)
                          </li>
                        </Link>

                        <Link to="/hoteldarjieeng" className="block">
                          <li className="lg:border-b border-b-black">
                            Darjeeling (West Bengal)
                          </li>
                        </Link>

                      </ul>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="slider lg:mt-13 mt-10 ">
            <MySlider1/>
          </div>

        </div>
        <div className=" w-full px-3">
          <div className="row cn4">
          <div className="col offers  text-center">
              <p >Special Offers </p>
              <p class="p2">  Enjoy specially curated offers to enhance your experience at SR Haven. </p>
              <p>  </p>
            <Link to={"/offers"}>
            <button className=" btn-explore">
                Explore 
            </button>
              </Link> 
          </div>
          </div>
        </div>
        
        <div className="w-full">
         <div className="  lg:px-18 px-3">
          <div
            className="row px-1"
          >
            <div className="lux-heading  ">
              <div className="mt-5 ">
                      <h1 className="text-[40px] font-[400]  subpixel-antialiased mb-0">  Dinning </h1>
              
                    <span className="lux-line flex lg:justify-center">
                  {" "}
                  <img
                    className="hrimg "
                    src="/images/hrline.png"
                    alt=""
                  />
                </span>
              </div>
            </div>
               <div className="flex">
              <p className="lux-heading2  flex justify-between  border-b border-b-black w-full"> <span>Destinations </span>
                {/* <button className="" onClick={() => setDestinationOpen(!destinationOpen)}>  */}
                <button className="" onClick={toggleDropdown}>
                 <svg
                    viewBox="0 0 20 20"
                    fill=""
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-8 me-1"
                  >
                  <path
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                  />
                  </svg>
                </button>
              </p>
              <div
                // onTransitionEnd={() => {
                //   if (!destinationOpen) {
                //     setShowBorder(false);   // fully closed hone ke baad hi hatana
                //   }
                // }}

                className={`
    absolute right-0 lg:me-18 me-[11.6px] z-50
    lg:mt-16 mt-10 
    text-black font-serif
 
    overflow-hidden


  ${destinationOpen
                    ? "max-h-[600px] duration-1800   ease-[cubic-bezier(1,15,0,0,29)]-out"
                    : "max-h-0  duration-800  ease-[cubic-bezier(1,15,0,0,29)]-in "}
       transition-[max-height]

       

    
  `}
              >
                {/* HEADER */}

                <div className="lg: pt-2.5  w-full  flex justify-end">

                  <div className={`lg:pt-7 pt-5  lg:pb-0 pb-11 lg:ps-o ps-10 lg:pe-0 pe-4 w-[100%] bg-[#f7f4e5]  
                          ${destinationOpen
                      ? "max-h-[600px] duration-1800   ease-[cubic-bezier(1,15,0,0,29)]-out"
                      : "max-h-0  duration-800  ease-[cubic-bezier(1,15,0,0,19)]-in "}
                             transition-[max-height]
                ${showBorder
                      ? "border border-black/20 shadow-xl"
                      : "border border-transparent shadow-none"} `}>
                    <div className=" lg:px-6 lg:py-4 py-2 lg:pt-0   border-b border-black/50 ">
                      <h3 className="text-lg  font-[500]  tracking-wide">
                        The SR Heaven
                      </h3>
                    </div>

                    {/* DESTINATIONS */}
                    <div className=" lg:flex none lg:px-7  lg:pt-4 pt-4  lg:space-y-6 space-y-7 gap-30 ">


                      <ul className="lg:py-3 lg:space-y-12 space-y-7 text-[18px]">

                        <Link to="/hotelmanali" className="block">
                          <li className="lg:border-b border-b-black">
                            Manali (Himachal Pradesh)
                          </li>
                        </Link>

                        <Link to="/hotelmasoori" className="block">
                          <li className="lg:border-b border-b-black">
                            Mussoorie (Uttarakhand)
                          </li>
                        </Link>

                        <Link to="/hoteldharamshala" className="block">
                          <li className="lg:border-b border-b-black">
                            Dharamshala (Himachal Pradesh)
                          </li>
                        </Link>

                      </ul>


                      <ul className="lg:py-3 lg:space-y-12 space-y-7 text-[18px]">

                        <Link to="/hoteldhalousie" className="block">
                          <li className="lg:border-b border-b-black">
                            Dalhousie (Himachal Pradesh)
                          </li>
                        </Link>

                        <Link to="/hotelnainital" className="block">
                          <li className="lg:border-b border-b-black">
                            Nainital (Uttarakhand)
                          </li>
                        </Link>

                        <Link to="/hoteldarjieeng" className="block">
                          <li className="lg:border-b border-b-black">
                            Darjeeling (West Bengal)
                          </li>
                        </Link>

                      </ul>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            

          </div>

        <div class="slider lg:mt-13 mt-10 ">

            <MySlider2/>

          </div>
        </div>
        </div>

        <div className=" w-full px-3">
          <div className="row cn5">

            <div className="col offers1  text-center">
              <p >Meeting, Conference & Events </p>
         
              <p class="p2 lg:px-56 px-1 mt-1"> Your meetings and conferences get a perfect setting at SR Haven with spacious outdoor and indoor settings, state-of-the-art facilities and a team that works with you to make your business sessions convenient and comfortable. </p>
     
             <Link to={"/meteing-conference-events"}> <button className=" btn-explore1">
                Explore
              </button>
              </Link>

            </div>


          </div>



        </div>

        <div className="w-full">
      <div className="  lg:px-18 px-3">
          <div
            className="row px-1"
          >
            <div className="lux-heading">
              <div className="mt-5 ">
                <p className=" our  mb-0 c"> Weding & Celebrations </p>
              
              
                    <span className="lux-line flex lg:justify-center">
                  {" "}
                  <img
                    className="hrimg "
                    src="/images/hrline.png"
                    alt=""
                  />
                </span>
              </div> 
            </div>
                <div className="flex">
              <p className="lux-heading2  flex justify-between  border-b border-b-black w-full"> <span>Destinations </span>
                {/* <button className="" onClick={() => setDestinationOpen(!destinationOpen)}>  */}
                <button className="" onClick={toggleDropdown}>

                  <svg
                    viewBox="0 0 20 20"
                    fill=""
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-8 me-1"
                  >
                    <path
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
              </p>
              <div
                // onTransitionEnd={() => {
                //   if (!destinationOpen) {
                //     setShowBorder(false);   // fully closed hone ke baad hi hatana
                //   }
                // }}

                className={`
    absolute right-0 lg:me-18 me-[11.6px] z-50
    lg:mt-16 mt-10 
    text-black font-serif
 
    overflow-hidden


  ${destinationOpen
                    ? "max-h-[600px] duration-1800   ease-[cubic-bezier(1,15,0,0,29)]-out"
                    : "max-h-0  duration-800  ease-[cubic-bezier(1,15,0,0,29)]-in "}
       transition-[max-height]

       

    
  `}
              >
                {/* HEADER */}

                <div className="lg: pt-2.5  w-full  flex justify-end">

                  <div className={`lg:pt-7 pt-5  lg:pb-0 pb-11 lg:ps-o ps-10 lg:pe-0 pe-4 w-[100%] bg-[#f7f4e5]  
                          ${destinationOpen
                      ? "max-h-[600px] duration-1800   ease-[cubic-bezier(1,15,0,0,29)]-out"
                      : "max-h-0  duration-800  ease-[cubic-bezier(1,15,0,0,19)]-in "}
                             transition-[max-height]
                ${showBorder
                      ? "border border-black/20 shadow-xl"
                      : "border border-transparent shadow-none"} `}>
                    <div className=" lg:px-6 lg:py-4 py-2 lg:pt-0   border-b border-black/50 ">
                      <h3 className="text-lg  font-[500]  tracking-wide">
                        The SR Heaven
                      </h3>
                    </div>

                    {/* DESTINATIONS */}
                    <div className=" lg:flex none lg:px-7  lg:pt-4 pt-4  lg:space-y-6 space-y-7 gap-30 ">


                      <ul className="lg:py-3 lg:space-y-12 space-y-7 text-[18px]">

                        <Link to="/hotelmanali" className="block">
                          <li className="lg:border-b border-b-black">
                            Manali (Himachal Pradesh)
                          </li>
                        </Link>

                        <Link to="/hotelmasoori" className="block">
                          <li className="lg:border-b border-b-black">
                            Mussoorie (Uttarakhand)
                          </li>
                        </Link>

                        <Link to="/hoteldharamshala" className="block">
                          <li className="lg:border-b border-b-black">
                            Dharamshala (Himachal Pradesh)
                          </li>
                        </Link>

                      </ul>


                      <ul className="lg:py-3 lg:space-y-12 space-y-7 text-[18px]">

                        <Link to="/hoteldhalousie" className="block">
                          <li className="lg:border-b border-b-black">
                            Dalhousie (Himachal Pradesh)
                          </li>
                        </Link>

                        <Link to="/hotelnainital" className="block">
                          <li className="lg:border-b border-b-black">
                            Nainital (Uttarakhand)
                          </li>
                        </Link>

                        <Link to="/hoteldarjieeng" className="block">
                          <li className="lg:border-b border-b-black">
                            Darjeeling (West Bengal)
                          </li>
                        </Link>

                      </ul>

                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>

         <div class="slider lg:mt-13 mt-10 ">

            <MySlider3/>

          </div>
          </div>
        </div>
             <div className=" w-full px-3 ">
          <div className="row cn6">

            <div className="col offers2  text-center ">
              <p >SR Haven Experiences</p>
              <p class="p2 lg:px-46 px-2 mt-1"> Every Trident Hotel has unique experiences for you to explore. From recreational activities, romantic sunset dining set-ups, cultural programmes to our exclusive Trident Kids Club, we ensure you leave us with a feeling of newness in your heart. </p>

          <Link to={"/experiences"}>  <button className=" btn-explore">
                Explore
              </button>
      </Link>

            </div>


          </div>



        </div>
     
      <Footer/>


   </div>

  </>

  
  )

}

export default Home