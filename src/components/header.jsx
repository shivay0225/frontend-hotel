import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import SideBarMenu from "./SideBarMenu";


const Header = () => {


 
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [destinationOpen, setDestinationOpen] = useState(false);
   const [open, setOpen] = useState(false);
  

 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5); // change after 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>


      <>

  
        <header
         className={` all container nav-color fixed top-0 left-0 w-full z-100 
         ${menuOpen || scrolled ? "nav-active bg-[#f7f4e5] " : " bg-transparent  hover:bg-[#f7f4e5] transition-colors duration-700 ease-in-out "}`}
         >
            <nav
              aria-label="Global"
              className=" flex items-center justify-between lg:px-7 px-4  lg:py-4 py-3"
            >
              <div className="flex-1 ">
                <div className="flex items-center gap-5">
                     {/* SideBarMenu */}
                  <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 font-royal"
                  >

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                      className="lg:size-10 size-7 "
                    >
                      <path
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
              <SideBarMenu open={open} setOpen={setOpen} menuOpen={menuOpen} setMenuOpen={setMenuOpen} setDestinationOpen={setDestinationOpen} destinationOpen={destinationOpen} />
                {/* SideBarMenu */}

                  <el-popover-group className="  relative  hidden  lg:flex lg:gap-5">
                    <Link to={"/"} className="font-royal">
                      Home
                    </Link>

                    {/* destination bar  */}
                    <div className="group font-royal ">
                      <button

                        className="flex items-center gap-x-1  font-royal  cursor-pointer "

                      >
                       Hotels
                        <svg
                          viewBox="0 0 20 20"
                         fill=""
                          data-slot="icon"
                          aria-hidden="true"
                          className="size-6 flex-none font-royal"
                        >
                          <path
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          />
                        </svg>
                      </button>

                    <div
                    className=" absolute top-15 left-14.7  w-[720px]
                     bg-[#f7f4e5] text-black font-serif
                    shadow-xl border border-black/10
                    opacity-0 translate-y-2 pointer-events-none
                    group-hover:opacity-100
                    group-hover:translate-y-0
                   group-hover:pointer-events-auto" >

                        {/* HEADER */}
                        <div className="px-6 py-4 border-b border-black/50">
                          <h3 className="text-lg  font-[500]  tracking-wide">
                            The SR Heaven
                          </h3>
                        </div>

                        {/* DESTINATIONS */}
                        <div className="flex px-3 pt-6 space-y-6 gap-30 ">
                          <ul className="px-3 py-3 space-y-12  text-[18px]">
                            <li className="border-b  border-b-black">
                              Manali (Himachal Pradesh)
                            </li>
                            <li className="border-b  border-b-black">
                              Masoori (Uttrakhand)
                            </li>
                            <li className="border-b  border-b-black">
                              Dharamshala (Himachal Pradesh)
                            </li>
                          </ul>
                          <ul className=" py-3 space-y-12 text-[18px]">
                            <li className="border-b  border-b-black">
                              Dhalousie (Himachal Pradesh)
                            </li>
                            <li className="border-b  border-b-black">
                              Nainital (Uttarakhand)
                            </li>
                            <li className="border-b  border-b-black">
                              Darjleeng (West Bengal)
                            </li>
                          </ul>
                        </div>
                      </div>

                    </div>
                    {/* destination bar */}

                  <Link to ="/offers" className="font-royal">
                      Offers
                    </Link>
                  <Link to ="/experiences" className="font-royal">
                     Contact us 
                    </Link>
                  </el-popover-group>
                </div>
              </div>
              <Link to={"/"} className="logo ">
                <img
                  className="logoimg-black "
                  src="/images/logo4.png"
                  alt=""
                />

                    <img
                  className="logoimg-white "
                  src="/images/logo.2.png"
                  alt=""
                />
              </Link>

              {/* booking button */}
              <div className="flex-1 ">
              <div className="flex-1 justify-end   font-royal">
                <div className=" right-item flex   items-center justify-end lg:gap-4 gap-2">
                  <Link to={"/signup"} className=" flex  items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" icon-bar  lg:w-10 lg:h-13 "

                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>{" "}
                    <Link to="/signup" class="lg:flex hidden"reloadDocument> Signup</Link>
                  </Link>
                  <button  onClick={() => setOpen(true)} className="bt-book "> Book </button>
                </div>
              </div>
              </div>
            </nav>

          {/* / booking bar  */}

            <div
              className={` flex  justify-center fixed top-0 w-full  left-0 shadow-lg z-100
          transform transition-transform duration-500 ease-in-out
          ${open ? "translate-y-0" : "-translate-y-full"}
        `}
            >
              <div className=" bg-white relative w-full  lg:px-[400px] px-4  pt-6 ">
                {/* Close Button */}
                <button onClick={() => setOpen(false)} className="absolute top-4 lg:right-20 right-4 text-2xl text-gray-700">✕</button>
                {/* Form */}
                <div className="">
                  {/* Hotel */}
                  <div className="relative">
                    <label className="text-[#b58b3b] font-medium">Hotel</label>
                    <p className="text-gray-500 text-sm mt-1">Please select a destination</p>
                    <span className="absolute right-0 top-6 text-[#b58b3b]">✏️</span>
                    <div className="border-b border-gray-300 mt-2" />
                  </div>
                  {/* Check-in & Check-out */}
                  <div className="grid grid-cols-2 gap-12">
                    <div className="relative">
                      <label className="text-[#b58b3b] font-medium">Check-in</label>
                      <p className="text-gray-500 mt-1">-</p>
                      <span className="absolute right-0 top-6 text-[#b58b3b]">✏️</span>
                      <div className="border-b border-gray-300 mt-2" />
                    </div>
                    <div className="relative">
                      <label className="text-[#b58b3b] font-medium">Check-out</label>
                      <p className="text-gray-500 mt-1">-</p>
                      <span className="absolute right-0 top-6 text-[#b58b3b]">✏️</span>
                      <div className="border-b border-gray-300 mt-2" />
                    </div>
                  </div>
                  {/* Rooms & Guests */}
                  <div className="relative">
                    <label className="text-[#b58b3b] font-medium">Rooms &amp; Guests</label>
                    <p className="text-gray-600 mt-1">1 Room, 2 Adult, 0 Children</p>
                    <span className="absolute right-0 top-6 text-[#b58b3b]">✏️</span>
                    <div className="border-b border-gray-300 mt-2" />
                  </div>
                  {/* Promo Code */}
                  <div className="relative">
                    <label className="text-[#b58b3b] font-medium">Promo Code</label>
                    <p className="text-gray-400 mt-1">Enter Promo Code</p>
                    <span className="absolute right-0 top-6 text-[#b58b3b]">✏️</span>
                    <div className="border-b border-gray-300 mt-2" />
                  </div>
                  {/* Button */}
                  <div className="flex flex-col items-center gap-4 pt-6">
                    <button className="bg-[#ad2132] text-white px-26 py-3 font-semibold tracking-wide">
                      BOOK
                    </button>
                    <p className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="text-[#f4a261] text-lg">✔</span>
                      Best Rate Guarantee
                    </p>
                  </div>
                </div>
              </div>

             </div>
          {/* / booking bar close */}
        </header>
          
                                                    
      
      </>






    </>
  )
}

export default Header;