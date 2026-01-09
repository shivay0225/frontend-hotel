// import Footer from "../components/footer"
// import Header1 from "../components/header2"
// import Footer1 from "../components/footer2"
// import { Link } from "react-router-dom"
// import toast from 'react-hot-toast'
// import axios from 'axios'
// import { useState } from "react"



// const VerifyOtp1 = ({expired_at}) =>{
    

//   const [loading, Setloading] = useState(false);
//   const [otp, SetOtp] = useState("");
// const email = window.location.search?.split("?email=")[1];

//   const handleOtp = async  (e) =>{
//      e.preventDefault();

//  try {

//    Setloading(true);

//    if( email=="" &&   otp == ""){
//     toast.error("Please fill details");
//    }

//    const res = await axios.post("http://127.0.0.1:5000/auth/verifyotp", {          
//     type: "register",
//     email,
//     otp
//    })
// console.log(res.data);
             
//      window.location.href = "/" ;

//  }   catch (error) {

//   toast.error( error.message);
//  }

//  finally{
//   Setloading(false);
//  }

//   }

//      return(

//         <>
//         <Header1/>
       
//       <div className=" container cn3  ">
//         <div className="flex  justify-center lg:py-24 py-20">

//           <div className="w-full  max-w-2xl lg:py-16 pt-10 px-6 text-center">
//   {/* Heading */}
//   <h1 className="font-[Playfair_Display] lg:text-[2.5rem] text-[1.9rem]  font-normal tracking-[0.05em] text-[#6f6f6f] mb-2">
// Verify OTP </h1>
//   {/* Form */}
//   <form className=" space-y-8" onSubmit={handleOtp}>
//     {/* Email */}
//     {/* {module} */}
     
//        <div className=" gap-5  ">

//         <input
//       type="otp"
//       placeholder="Enter your OTP "
//       className="w-[95%] mt-8 border border-gray-400 px-4 llg:py-4 py-3  text-gray-600 bg-transparent outline-none focus:border-gray-600"
//      onKeyUp={(e) => SetOtp(e.target.value)}
//     />
//      <p>Email: {email}</p>

//       <p> expired_at : {expired_at}</p>
//     {/* Password */}
 

//     </div>
//      {/* <div class="text-left lg:ms-6 ms-4 text-gray-600 underline">
//         <a href="#" class="hover:text-gray-800">Forgot password?</a>
//         <span class="mx-2">|</span>
//         <Link to={"/signup"} href="#" class="hover:text-gray-800">Create an account</Link>
//       </div> */}

//     {/* Links */}
//   <>
//   {/* Agreement Section */}
  
// </>

//     {/* Button */}
//  <div className="text-center  lg:py-12 pt-10 pb-4 lg:px-55 px-2   ">
//    <button
//         type="submit"
//         class="w-full  px-12 py-3 bg-[#ad2132] text-white text-lg tracking-wide hover:bg-[#ad2132] transition"
//       > 
//      {loading ? "Verifying..." : "Verify Otp"}
//       </button>
//       </div>
//   </form>
   
// </div>
//   </div>
 
      
//       </div>
         

//       <Footer1/>

//         </>
//     )
// }

// export default VerifyOtp1