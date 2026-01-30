import Footer from "../../components/footer"
import Header1 from "../../components/header2"
import Footer1 from "../../components/footer2"
import { Link } from "react-router-dom"
import toast from 'react-hot-toast'
import axios from 'axios'
import { useState } from "react"
import { useEffect } from "react"
import VerifyOtp from "./verifyotp"
import { useLoginMutation } from '../../services/authServices';

const Signin = () =>{

  const [email,SetEmail] = useState("");
   const [password,SetPassword] = useState("");

    const [data, setData]= useState({});
    const [optScreen, setOTPScreen]= useState(false);
    const [loginacAccount,  {isLoading, isError , isSuccess, error, data: udata}] = useLoginMutation();
      

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


   const HandleLogin = async(e) =>{
   e.preventDefault();

    

    if( email === "" && password== ""){   

          toast.error("Please Fill details")
                   return false
             }
          
             await loginacAccount({email,password}).unwrap()
              


   }
   

    return(

        <>
        <Header1/>
       
      <div className=" w-full cn3  ">
        <div className="flex  justify-center lg:py-24 py-20">
          {!optScreen && (
            <>
               <div className="w-full  max-w-2xl lg:py-16 pt-10 px-6 text-center">
  {/* Heading */}
  <h1 className="font-[Playfair_Display] lg:text-[2.5rem] text-[1.9rem]  font-normal tracking-[0.05em] text-[#6f6f6f] mb-2">
    Sign in with SR Haven </h1>
  {/* Form */}
  <form className=" space-y-8" onSubmit={HandleLogin}>
    {/* Email */}
    {/* {module} */}
     
       <div className=" gap-5  ">

        <input
      type="email"
      placeholder="Email*"
      className="w-[95%] mt-8 border border-gray-400 px-4 llg:py-4 py-3  text-gray-600 bg-transparent outline-none focus:border-gray-600"
      onKeyUp={(e) => SetEmail(e.target.value)}
    />
    {/* Password */}
    <input
      type="password"
      placeholder="Password*"
      className="w-[95%] mt-6  border border-gray-400 px-4 lg:py-4 py-3 text-gray-600 bg-transparent outline-none focus:border-gray-600"
      onKeyUp={(e) => SetPassword(e.target.value)}
    />

    </div>
     <div class="text-left lg:ms-6 ms-4 text-gray-600 underline">
        <Link   to={"/forgotpass"} href="#" class="hover:text-gray-800">Forgot password?</Link>
        <span class="mx-2">|</span>
        <Link to={"/signup"} href="#" class="hover:text-gray-800">Create an account</Link>
      </div>

    {/* Links */}
  <>
  {/* Agreement Section */}
  
</>

    {/* Button */}
 <div className="text-center  lg:py-12 pt-10 pb-4 lg:px-55 px-2   ">
   <button
        type="submit"
        disabled={isLoading}
        class="w-full  px-12 py-3 bg-[#ad2132] text-white text-lg tracking-wide hover:bg-[#ad2132] transition"
      > 
  {isLoading ? "loging..":  "login" }
      </button>
      </div>
  </form>
   

</div>
       </>)}


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

export default Signin