import Footer from "../../components/footer"
import Header1 from "../../components/header2"
import Footer1 from "../../components/footer2"
import { Link } from "react-router-dom"
import toast from 'react-hot-toast'
import axios from 'axios'
import { useState } from "react"
import { useEffect } from "react"
const ResetPassword = () =>{

  const [password,SetPassword] = useState("");
  const [cpassword,SetCPassword] = useState("");
    const [loading,Setloading] = useState(false);
    


   const HandleLogin = async(e) =>{
   e.preventDefault();
    Setloading(true);

  try {
    

    if( password === "" && cpassword === ""){

          toast.error("Please Fill details")
             }
             const token = window.location.pathname.split("/resetpassword/")[1]
             const res = await axios.post("http://127.0.0.1:5000/auth/reset-password", {

              password,
              cpassword,
              token
             });
           
             if(res.data.status == true){
                 toast.success(res.data.status);
                 //window.location.href= "/verifyotp?email="+email;
             }

  } catch (error) {
      console.log(error);
      toast.error(error?.res?.data?.message || error.message);
  }

finally{

  Setloading(false)
}

   }

    return(

        <>
        <Header1/>
       
      <div className=" w-full cn3  ">
        <div className="flex  justify-center lg:py-24 py-20">

          <div className="w-full  max-w-2xl lg:py-16 pt-10 px-6 text-center">
  {/* Heading */}
  <h1 className="font-[Playfair_Display] lg:text-[2.5rem] text-[1.9rem]  font-normal tracking-[0.05em] text-[#6f6f6f] mb-2">
    Reset your account password? </h1>
  {/* Form */}
  <form className=" space-y-8" onSubmit={HandleLogin}>
     {/* Password */}
    <input
      type="password"
      placeholder="Password*"
      className="w-[95%] mt-6  border border-gray-400 px-4 lg:py-4 py-3 text-gray-600 bg-transparent outline-none focus:border-gray-600"
      onKeyUp={(e) => SetPassword(e.target.value)}
    />

 {/* Password */}
    <input
      type="password"
      placeholder="Password*"
      className="w-[95%] mt-1  border border-gray-400 px-4 lg:py-4 py-3 text-gray-600 bg-transparent outline-none focus:border-gray-600"
      onKeyUp={(e) => SetCPassword(e.target.value)}
    />

 
    {/* Button */}
 <div className="text-center">
   <button
        type="submit"
        class="px-12 py-3 bg-[#ad2132] text-white text-lg tracking-wide hover:bg-[#ad2132] transition"
      > 
  { loading ? "loging..":  "Submit" }
      </button>
      </div>
  </form>
   
</div>
  </div>
 
      
      </div>
         

      <Footer1/>

        </>
    )
}

export default ResetPassword