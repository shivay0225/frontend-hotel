import { Link } from "react-router-dom";


import { useEffect, useState } from "react";
import SideBarMenu from "./SideBarMenu";
import DatePickerModule from "./DatePicker";

const Header1  = () =>{
   const [open, setOpen] = useState(false);
     const [menuOpen, setMenuOpen] = useState(false);
     const [scrolled, setScrolled] = useState(false);
     const [destinationOpen, setDestinationOpen] = useState(false);
     const [openBox, setOpenBox] = useState(null);
     const [rooms, setRooms] = useState(1);
     const [adults, setAdults] = useState(2);
     const [children, setChildren] = useState(0);
   
   
     useEffect(() => {
       const handleScroll = () => {
         setScrolled(window.scrollY > 5); // change after 50px
       };
   
       window.addEventListener("scroll", handleScroll);
       return () => window.removeEventListener("scroll", handleScroll);
     }, []);
    return(
        <>
        
       
         {/* { <header className="nav-color1 bg-[#f7f4e5] border-b  border-b-black">
    <nav
      aria-label="Global"
      className=" flex items-center justify-between lg:px-7 px-4  lg:py-4 py-3"
    >
       <div className="flex-1 ">
     <div className="flex items-center gap-5">
         <button
          type="button"
          command="show-modal"
          commandfor="mobile-menu"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-dark-100"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            data-slot="icon"
            aria-hidden="true"
            className="lg:size-10 size-7"
          >
            <path
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
     
    
      <el-popover-group className="hidden text-[16px] lg:flex lg:gap-5">
          <Link to={"/"} className=" font-semibold text-gray-900">
          Home
        </Link>
        <div className="relative">
          <button
            popoverTarget="desktop-menu-product"
            className="flex items-center gap-x-1  font-semibold text-gray-900"
          >
           Destination
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              className="size-5 flex-none text-gray-400"
            >
              <path
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <el-popover
            id="desktop-menu-product"
            anchor="bottom"
            popover=""
            className="w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg outline-1 outline-gray-900/5 transition transition-discrete [--anchor-gap:--spacing(3)] backdrop:bg-transparent open:block data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
          >
            <div className="p-4">
              <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-6 text-gray-600 group-hover:text-indigo-600"
                  >
                    <path
                      d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-auto">
                  <a href="#" className="block font-semibold text-gray-900">
                    Analytics
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">
                    Get a better understanding of your traffic
                  </p>
                </div>
              </div>
              <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-6 text-gray-600 group-hover:text-indigo-600"
                  >
                    <path
                      d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-auto">
                  <a href="#" className="block font-semibold text-gray-900">
                    Engagement
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">
                    Speak directly to your customers
                  </p>
                </div>
              </div>
              <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-6 text-gray-600 group-hover:text-indigo-600"
                  >
                    <path
                      d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-auto">
                  <a href="#" className="block font-semibold text-gray-900">
                    Security
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">
                    Your customers’ data will be safe and secure
                  </p>
                </div>
              </div>
              <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-6 text-gray-600 group-hover:text-indigo-600"
                  >
                    <path
                      d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-auto">
                  <a href="#" className="block font-semibold text-gray-900">
                    Integrations
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">
                    Connect with third-party tools
                  </p>
                </div>
              </div>
              <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-6 text-gray-600 group-hover:text-indigo-600"
                  >
                    <path
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-auto">
                  <a href="#" className="block font-semibold text-gray-900">
                    Automations
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">
                    Build strategic funnels that will convert
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              <a
                href="#"
                className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  className="size-5 flex-none text-gray-400"
                >
                  <path
                    d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  />
                </svg>
                Watch demo
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  className="size-5 flex-none text-gray-400"
                >
                  <path
                    d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  />
                </svg>
                Contact sales
              </a>
            </div>
          </el-popover>
        </div>
        <a href="#" className=" font-semibold text-gray-900">
         Offers
        </a>
        <a href="#" className=" font-semibold text-gray-900">
         Contact us 
        </a>
      </el-popover-group>
     </div>
 </div>
      <Link to={"/"} className="logo">
        <img
          className="logoimg"
          src="/images/logo4.png"
          alt=""
        />
      </Link>
      

        <div className="flex-1 justify-end">
        <div className=" right-item flex items-center justify-end lg:gap-4 gap-2">
             <Link to={"/signup"} className=" flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" icon-bar  lg:w-10 lg:h-13 "
             
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>{" "}
            <Link to="/signup" class="lg:flex hidden"> Signup</Link>
          </Link>
          <button  onClick={() => setOpen(true)} className="bt-book "> Book </button>
        </div>
      </div>
    </nav>
    <el-dialog>
      <dialog id="mobile-menu" className="backdrop:bg-transparent ">
        <div tabIndex={0} className="fixed inset-0 focus:outline-none">
          <el-dialog-panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                command="close"
                commandfor="mobile-menu"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  data-slot="icon"
                  aria-hidden="true"
                  className="size-6"
                >
                  <path
                    d="M6 18 18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="-mx-3">
                    <button
                      type="button"
                      command="--toggle"
                      commandfor="products"
                      className="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Product
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        data-slot="icon"
                        aria-hidden="true"
                        className="size-5 flex-none in-aria-expanded:rotate-180"
                      >
                        <path
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                    </button>
                    <el-disclosure
                      id="products"
                      hidden=""
                      className="mt-2 block space-y-2"
                    >
                      <a
                        href="#"
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Analytics
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Engagement
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Security
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Integrations
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Automations
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Watch demo
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Contact sales
                      </a>
                    </el-disclosure>
                  </div>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </el-dialog-panel>
        </div>
      </dialog>
    </el-dialog>
  </header> } */}


   
       <header
         className={` nav-color bg-[#f7f4e5] border-b  border-b-blac fixed top-0 left-0 w-full z-100 
         ${menuOpen || scrolled ? "bg-[#f7f4e5]" : " "}`}
         >
            <nav
              aria-label="Global"
              className=" w-full  flex items-center justify-between lg:px-7 px-4  lg:py-4 py-3"
            >
              <div className="flex-1 ">
                <div className="flex items-center gap-5">
                 {/* SideBarMenu */}
                  <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-dark-100"
                  >

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                      className="lg:size-10 size-7"
                    >
                      <path
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
              <SideBarMenu open={open} setOpen={setOpen}  menuOpen={menuOpen} setMenuOpen={setMenuOpen} setDestinationOpen={setDestinationOpen} destinationOpen={destinationOpen} />
                {/* SideBarMenu */}

                  <el-popover-group className="  relative  hidden text-[16px] lg:flex lg:gap-5">
                    <Link to={"/"} className=" font-semibold text-gray-900">
                      Home
                    </Link>

                    {/* destination bar  */}
                    <div className="group ">
                      <button

                        className="flex items-center gap-x-1  font-semibold text-gray-900  cursor-pointer "

                      >
                       Hotels
                        <svg
                          viewBox="0 0 20 20"
                          fill="black"
                          data-slot="icon"
                          aria-hidden="true"
                          className="size-6 flex-none text-gray-400  "
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

                       <Link to ="/Offers" className="">
                      Offers
                    </Link>
                  <Link to ="/experiences" className="">
                     Contact us 
                    </Link>
                  </el-popover-group>
                </div>
              </div>
              <Link to={"/"} className="logo">
                <img
                  className="logoimg lg:w-[90px] w-[60px] lg:h-[70px] h-[auto] "
                  src="/images/logo4.png"
                  alt=""
                />
              </Link>

              {/* booking button */}
              <div className="flex-1 justify-end">
                <div className=" right-item flex items-center justify-end lg:gap-4 gap-2">
                  <Link to={"/signup"} className=" flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" icon-bar  lg:w-10 lg:h-13 "

                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>{" "}
                    <Link to="/signup" class="lg:flex hidden"> Signup</Link>
                  </Link>
                  <button onClick={() => setOpen(true)} className="bt-book "> Book </button>
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

  <div
        className={` flex  justify-center fixed top-0 lg:w-full w-[90%]  left-0 shadow-lg z-50
          transform transition-transform duration-500 ease-in-out
          ${open ? "translate-y-0" : "-translate-y-full"}
        `}
      >

   <div className= " bg-white relative w-full  lg:px-[400px] px-4  pt-6 ">
  {/* Close Button */}
  <button  onClick={() => setOpen(false)} className="absolute top-4 lg:right-20 right-4 text-2xl text-gray-700">✕</button>
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
 





        </>
    )
}

export default Header1;