import Footer from "../components/footer"
import Header1 from "../components/header2"
import Footer1 from "../components/footer2"
import { Link } from "react-router-dom"
import axios from 'axios'
import toast from 'react-hot-toast'
import { useEffect,useState } from "react"
import { useRegisterMutation } from '../services/authServices';
import VerifyOtp from "./verifyotp"



const Signup = () =>{

  const [firstname,SetfirstName] = useState("");
  const [lastname,SetlastName] = useState("");
    const [email,SetEmail] = useState("");
    const [password, SetPassword] = useState("");
      const [loading,Setloading] = useState(false);
     const [data, setData]= useState({});
    const [optScreen, setOTPScreen]= useState(false);
     const [RegisterAccount,  {isLoading, isError, isSuccess, error, data: udata}] = useRegisterMutation();

 useEffect  (() => {
      
   if(isSuccess && udata){
           toast.success(udata.status);
             
              setOTPScreen(true)
                setData(udata.data)
      }
      if(error){
        toast.error(error?.data?.message)
      }

    },[isLoading, isError , isSuccess, error,  udata] 

    )
      const Handlesubmit = async (e) =>{
         e.preventDefault();
          Setloading(true);
         
             if( firstname== "" && lastname == "" && email =="" &&  password ==""){

         toast.error("Please Fill details")
             }
           await RegisterAccount({firstname, lastname, email , password }).unwrap();
      }

    return(

        <>
        <Header1/>
       
      <div className="w-full cn3">
        <div className="flex py-12 justify-center">
   {!optScreen  && (
  <div className="w-full  max-w-2xl  lg:pt-26 pt-22 px-6 text-center">
  {/* Heading */}
  <h1 className="font-[Playfair_Display] lg:text-[2.5rem] text-[1.9rem] font-normal tracking-[0.05em] text-[#6f6f6f] mb-12">
    Sign up with SR Haven </h1>
  {/* Form */}
  <form className=" space-y-8" method="post" onSubmit={Handlesubmit}>
    {/* Email */}

    <div className=" gap-5 lg:flex hidden ">
     <input
      type="text"
      placeholder="First Name *"
      className="w-[70%] border border-gray-400 px-4 py-3 text-gray-600 bg-transparent outline-none focus:border-gray-600"
       onKeyUp={ (e)=> SetfirstName(e.target.value)}
    />

     <input
      type="text"
      placeholder="Last Name*"
      className="w-[70%] border border-gray-400 px-4 py-3 text-gray-600 bg-transparent outline-none focus:border-gray-600"
      onKeyUp={ (e)=> SetlastName(e.target.value)}
    />

    </div>
     <div className=" gap-5  lg:flex hidden">
    <input
      type="email"
      placeholder="Email*"
      className="w-[70%] border border-gray-400 px-4 py-3 text-gray-600 bg-transparent outline-none focus:border-gray-600"
      onKeyUp={ (e)=> SetEmail(e.target.value)}
    />
    {/* Password */}
    <input
      type="password"
      placeholder="Password*"
      className="w-[70%] border border-gray-400 px-5 py-3 text-gray-600 bg-transparent outline-none focus:border-gray-600"
     onKeyUp={ (e)=> SetPassword(e.target.value)}
    />
    </div>
    {/* {module} */}
     
       <div className=" gap-5 lg:hidden ">
     <input
      type="text"
      placeholder="First Name *"
      className="w-[95%]  border border-gray-400 px-4 py-3 text-gray-600 bg-transparent outline-none focus:border-gray-600"
    />

     <input
      type="text"
      placeholder="Last Name*"
      className="w-[95%] mt-8 border border-gray-400 px-4 py-3 text-gray-600 bg-transparent outline-none focus:border-gray-600"
    />
        <input
      type="email"
      placeholder="Email*"
      className="w-[95%] mt-8 border border-gray-400 px-4 py-3 text-gray-600 bg-transparent outline-none focus:border-gray-600"
    />
    {/* Password */}
    <input
      type="password"
      placeholder="Password*"
      className="w-[95%] mt-8  border border-gray-400 px-5 py-3 text-gray-600 bg-transparent outline-none focus:border-gray-600"
    />

    </div>

    {/* Links */}
  <>
  {/* Agreement Section */}
  <div className="mt-10 lg:px-0 px-5 text-left text-sm text-gray-600 space-y-6">
    {/* Checkbox agreement */}
    <label className="flex items-start gap-3 cursor-pointer">
      <input type="checkbox" className="mt-1 w-4 h-4 border-gray-400" />
      <span>
        I agree to receive exclusive member updates, special announcements, and
        tailored promotional content such as limited-time offers and partner
        experiences from SR Haven and its affiliated brands via email or
        the official mobile application. I understand that I can opt out of
        these communications at any time.
      </span>
    </label>
    {/* Terms and privacy text */}
    <p>
      By selecting <span className="font-medium">'REGISTER'</span>, I confirm
 that I have read and accepted the SR Haven Programme
      <a href="#" className="text-orange-500 hover:underline">
        Terms of Use
      </a>
      . I also acknowledge that my personal information will be collected,
      stored, and processed in accordance with the <a href="#" className="text-orange-500 hover:underline">
       SR Haven Data Policy
      </a>
      and the
      <a href="#" className="text-orange-500 hover:underline">
        Partner Privacy Guidelines
      </a>
      .
    </p>
  </div>
</>

    {/* Button */}
     <div className="text-center ">
    <div className="lg:px-50 px-2">
   <button type="submit"
        class="w-full  px-12 py-3 bg-[#ad2132] text-white text-lg tracking-wide hover:bg-[#ad2132] transition" 
      >
      {loading ? "Registering..." : "Register"} 
      </button>
</div>
       <div class=" lg-pt-4 pt-6 lg:pb-6 pb-9 text-center text-gray-600 underline">
        
        <Link to={"/login"} href="#" class="hover:text-gray-800" > Already have an account</Link>
      </div>
      </div>

  </form>
   
</div>
) }


       {optScreen && (
        <>
          <VerifyOtp data={data}/>
        </>
       )}

  </div>
 
      
      </div>
         

      <Footer1/>

        </>
    )
}

export default Signup