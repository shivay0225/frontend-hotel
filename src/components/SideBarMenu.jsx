
import { Link } from "react-router-dom";


const SideBarMenu = ({ open, setOpen, menuOpen, setMenuOpen, setDestinationOpen, destinationOpen} ) => {
  
    return(
        <>
            <div
                    className={`fixed lg:top-25.5 top-15.5 left-0 z-100 h-screen sidebar lg:w-100 w-80 bg-[#f7f4e5] 
                       transform transition-transform duration-700 ease-in-out
                      ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
                  >

                    {/* CLOSE BUTTON */}
                    <button
                      onClick={() => setMenuOpen(false)}
                      className="absolute top-4 right-4 text-2xl"
                    >
                      ✕
                    </button>

                    {/* MENU CONTENT */}
                    <div className="px-8 lg:py-9 py-10 space-y-2 text-[18px] font-serif lg:h-[700px] h-[700px]  overflow-hidden overflow-y-scroll">
                      <div className="border-b lg:pb-5 pb-4 "><Link to={"/"}>Home</Link></div>
                      <div className="border-b lg:pt-2 pt-2  pb-4">
                        <button
                          onClick={() => setDestinationOpen(!destinationOpen)}
                          className="flex items-center lg:gap-x-42 gap-x-32  text-gray-900  cursor-pointer "

                        >
                          Hotels
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

                       
   <div
  className={`
    overflow-hidden
    
    ease-[cubic-bezier(1,15,0,0,29)]

    ${destinationOpen
      ? "max-h-[600px]  duration-1800  ease-[cubic-bezier(1,15,0,0,29)]-out"
      : "max-h-0  duration-700   ease-[cubic-bezier(1,15,0,0,29)]-in "}
        transition-[max-height]
  `}
   >
   

<ul className="border-t mt-4 mb-2 pt-5 space-y-6 text-[17px]">

  <Link to="/hotelmanali" className="block">
    <li className="pb-2 transition duration-300 ease-in-out">
      Manali (Himachal Pradesh)
    </li>
  </Link>

  <Link to="/hotelmasoori" className="block" >
    <li className="pb-2 transition duration-500 ease-in-out">
      Mussoorie (Uttarakhand)
    </li>
  </Link>

  <Link to="/hoteldharamshala" className="block">
    <li className="pb-2">
      Dharamshala (Himachal Pradesh)
    </li>
  </Link>

</ul>


<ul className="pt-4 space-y-6 text-[17px]">

  <Link to="/hoteldhalousie" className="block" >
    <li className="pb-2">
      Dalhousie (Himachal Pradesh)
    </li>
  </Link>

  <Link to="/hotelnainital" className="block" >
    <li className="pb-2">
      Nainital (Uttarakhand)
    </li>
  </Link>

  <Link to="/hoteldarjeeling" className="block" >
    <li className="pb-1">
      Darjeeling (West Bengal)
    </li>
  </Link>

</ul>

      </div>


      </div>
                      <div className="border-b lg:pt-2 pt-2 pb-4 "> <Link to={"/offers"}>Offers</Link></div>
                      <div className="border-b lg:pt-2 pt-2 pb-4 "><Link to={"/dining"}>Dinning</Link></div>
                      <div className="border-b lg:pt-2 pt-2 pb-4  flex justify-between">
                        <span> <Link to={"/meteing-conference-events"}>Meeting & Confernece</Link> </span>
                      </div>
                      <div className="border-b lg:pt-2 pt-2 pb-4  flex justify-between">
                        <span> <Link to={"/wedding-celebrations"}>Wedding & Celebrations</Link> </span>
                      </div>
                      <div className="border-b lg:pt-2 pt-2 pb-4  flex justify-between">
                        <span> <Link to={"/experiences"}  > SR Heaven Experiences </Link>  </span>
                      </div>
                      <div className="border-b lg:pt-2 pt-2 pb-4  flex justify-between">
                        <span> <Link to={""}>About us</Link></span>
                      </div>
                      <div className="border-b lg:pt-2 pt-2 pb-4 "><Link to={""}>Contact Us</Link></div>

                      <button onClick={() => setOpen(true)}  className="mt-7 w-full bg-[#ad2132] text-white py-3  tracking-widest">
                        BOOK
                      </button>
                    </div>
                  </div></>
    )
}

export default SideBarMenu