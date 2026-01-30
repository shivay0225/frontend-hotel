import Footer from "../../components/footer"
import Header1 from "../../components/header2"
import Footer1 from "../../components/footer2"
import { Link } from "react-router-dom"
import toast from 'react-hot-toast'
import axios from 'axios'
import { useState } from "react"
import { useEffect } from "react"
const Forgotpass = () =>{

  const [email,SetEmail] = useState("");
    const [loading,Setloading] = useState(false);
    


   const HandleLogin = async(e) =>{
   e.preventDefault();
    Setloading(true);

  try {
    

    if( email === ""){

          toast.error("Please Fill details")
             }

             const res = await axios.post("http://127.0.0.1:5000/auth/forgot-password", {

              email,
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
    Forgot your account password? </h1>
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
    </div>
 
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

export default Forgotpass