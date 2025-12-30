import Footer from "../components/footer"
import Header1 from "../components/header2"
import Footer1 from "../components/footer2"
import { Link } from "react-router-dom"

const Signin = () =>{


    return(

        <>
        <Header1/>
       
      <div className=" container cn3  ">
        <div className="flex  justify-center lg:py-24 py-20">

          <div className="w-full  max-w-2xl lg:py-16 pt-10 px-6 text-center">
  {/* Heading */}
  <h1 className="font-[Playfair_Display] lg:text-[2.5rem] text-[1.9rem]  font-normal tracking-[0.05em] text-[#6f6f6f] mb-2">
    Sign in with SR Haven </h1>
  {/* Form */}
  <form className=" space-y-8">
    {/* Email */}
    {/* {module} */}
     
       <div className=" gap-5  ">

        <input
      type="email"
      placeholder="Email*"
      className="w-[95%] mt-8 border border-gray-400 px-4 llg:py-4 py-3  text-gray-600 bg-transparent outline-none focus:border-gray-600"
    />
    {/* Password */}
    <input
      type="password"
      placeholder="Password*"
      className="w-[95%] mt-6  border border-gray-400 px-4 lg:py-4 py-3 text-gray-600 bg-transparent outline-none focus:border-gray-600"
    />

    </div>
     <div class="text-left lg:ms-6 ms-4 text-gray-600 underline">
        <a href="#" class="hover:text-gray-800">Forgot password?</a>
        <span class="mx-2">|</span>
        <Link to={"/signup"} href="#" class="hover:text-gray-800">Create an account</Link>
      </div>

    {/* Links */}
  <>
  {/* Agreement Section */}
  
</>

    {/* Button */}

  </form>
    <div className="text-center  lg:py-12 pt-10 pb-4 lg:px-55 px-2   ">
   <button
        type="submit"
        class="w-full  px-12 py-3 bg-[#ad2132] text-white text-lg tracking-wide hover:bg-[#ad2132] transition"
      > 
   Login
      </button>
      </div>
</div>
  </div>
 
      
      </div>
         

      <Footer1/>

        </>
    )
}

export default Signin