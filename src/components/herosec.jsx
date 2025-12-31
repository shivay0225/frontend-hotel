
import { useState } from "react";
import DatePickerModule from "./DatePicker";
import Header from "./header";


const Herosec = () =>{

  const [openBox, setOpenBox] = useState(null);

return(
    <>
     <div className=" container w-full cn1 lg:h-[100vh] h-[90vh]">
             

             <Header/>

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
    
    </>
)

}
export default Herosec