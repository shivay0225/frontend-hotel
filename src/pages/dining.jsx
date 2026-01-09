import Header from "../components/header"
import { useState } from "react";
import DatePickerModule from "../components/DatePicker";
import Footer from "../components/footer"
import MySlider2 from "../components/slider4"
import { Link } from "react-router-dom";





export default function Dinning() {


       const [openBox, setOpenBox] = useState(null);
        
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
    return(

        <>
        
          <div className=" w-full dining-banner">

        <Header />
        {/* bootom booking bar */}
        <div className=" flex justify-center items-center">
          <div className="  cn2  flex justify-center items-center ">
            <div className="booking-bar lg:flex lg:py-2 py-4  justify-between items-center">
              <div className="booking-item lg:my-0 my-3 ">
                <div className="list-box-1 flex gap-13  lg:px-3  px-3  lg:py-2 py-2 items-center">
                  <div className="logo2 flex items-center gap-2 ">
                    <img
                      className="logoimg2"
                      src="/images/logo4.png"
                      alt=""
                    />
                    <span>Select a Hotel</span>
                  </div>

                  <button
                    onClick={() =>
                      setOpenBox(openBox === "hotel" ? null : "hotel")
                    }
                  >   <svg
                    viewBox="0 0 20 20"
                    fill=""
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-7 flex-none  "
                  >
                      <path
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>

                  </button>
                  {openBox === "hotel" && (
                    <div className="absolute left-0 top-full mt-2 w-[360px] bg-white shadow-xl border z-50">
                      <ul className="max-h-[320px] overflow-y-auto text-[15px]">
                        <li className="px-4 py-3 font-semibold text-[#a67349]">Bengaluru</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          The Leela Palace Bengaluru
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          The Leela Bhartiya City Bengaluru
                        </li>

                        <li className="px-4 py-3 font-semibold text-[#a67349]">Chennai</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          The Leela Palace Chennai
                        </li>

                        <li className="px-4 py-3 font-semibold text-[#a67349]">Jaipur</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          The Leela Palace Jaipur
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>



              <div className="booking-item  lg:my-0 my-3">
                <div className="list-box-2 flex lg:px-3 px-3  lg:py-0 py-2 items-center">

                  <DatePickerModule />

                </div>
              </div>
              <div className="booking-item lg:my-2 my-3">
                <div className="list-box-3 flex lg:px-3 px-3  lg:py-0 py-2 items-center">
                  <div className="icon2 flex ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={26}
                      height={26}
                      fill="currentColor"
                      className="bi bi-person"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    </svg>
                    <span>
                      Room, Adult,  Child
                    </span>
                  </div>
                  <button


                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill=""
                      data-slot="icon"
                      aria-hidden="true"
                      className="size-7 flex-none  "
                    >
                      <path
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </button>


                </div>
              </div>
              <div className="booking-item lg:flex hidden ">
                <select className="booking-list-4">
                  <option>Promo Code</option>
                  <option>NEW50</option>
                </select>
              </div>
              <button className="book-btn">BOOK</button>
            </div>
          </div>
        </div>
        {/* bottom booking bar */}

      </div>

      <div className=" w-full cn3 ">
       
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

                     <div className="px-3">
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

             <div className="px-3 ">
          <div className="row cn6">

            <div className="col offers2  text-center ">
              <p >SR Haven Experiences</p>
              <p class="p2 lg:px-46 px-2 mt-1"> Every Trident Hotel has unique experiences for you to explore. From recreational activities, romantic sunset dining set-ups, cultural programmes to our exclusive Trident Kids Club, we ensure you leave us with a feeling of newness in your heart. </p>

           <Link to={"/experiences"}> 
            <button className=" btn-explore">
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