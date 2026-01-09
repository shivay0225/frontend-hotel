
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Signup from "./auth/signup"
import Signin from './auth/login'
import Hotelmanali from './pages/hotels/hotelmanali'
import Herosec from './components/herosec'
import Hotelmasoori from './pages/hotels/hotelmasoori'
import HotelDharamshala from './pages/hotels/hoteldharamshala'
import HotelDhalousie from './pages/hotels/hoteldhalousie'
import HotelNainital from './pages/hotels/hotelnainital'
import HotelDarjleeng from './pages/hotels/hoteldarjleeng'
import Suites from './pages/hotelrooms/suites'
import Poolroom from './pages/hotelrooms/poolroom'
import Gardenroom from './pages/hotelrooms/gardenroom'
import Familyroom from './pages/hotelrooms/familyroom'
import Superdeluxeroom from './pages/hotelrooms/superdeluxeroom'
import Deluxeroom from './pages/hotelrooms/deluxeroom'
import Specialoffer from './pages/offers'
import Dinning from './pages/dining'
import Mce from './pages/meteing-conference-events'
import Wc from './pages/wedding-celebrations'
import Experiences from './pages/experiences'
import ScrollToTop from "./components/ScrollToTop";
import VerifyOtp from './auth/verifyotp'

import { Toaster } from 'react-hot-toast'



function App() {


  return (
    <>

   
          <BrowserRouter>
 
      <ScrollToTop />
        <Routes>
          
           
          <Route path='/' element={<Home/>} />
      
           <Route path='/signup' element={<Signup/>} />
           <Route path='/login' element={<Signin/>} />
            <Route path='/hotelmanali' element={<Hotelmanali/>} />
               <Route path='/hotelmasoori' element={<Hotelmasoori/>} />
                <Route path='/hoteldharamshala' element={<HotelDharamshala/>} />
                 <Route path='/hoteldhalousie' element={<HotelDhalousie/>} />
                  <Route path='/hotelnainital' element={<HotelNainital/>} />
                   <Route path='/hoteldarjleeng' element={<HotelDarjleeng/>} />
                     <Route path='/suites' element={<Suites/>} />
                      <Route path='/poolroom' element={<Poolroom/>} />
                       <Route path='/gardenroom' element={<Gardenroom/>} />
                        <Route path='/familyroom' element={<Familyroom/>} />
                         <Route path='/deluxeroom' element={<Deluxeroom/>} />'
                          <Route path='/superdeluxeroom' element={<Superdeluxeroom/>} />
                            <Route path='/offers' element={<Specialoffer/>} />
                              <Route path='/dining' element={<Dinning/>} />
                           <Route path='/meteing-conference-events' element={<Mce/>} />
                               <Route path='/wedding-celebrations' element={<Wc/>} />
                              <Route path='/experiences' element={<Experiences/>} />
                                <Route path='/verifyotp' element={<VerifyOtp/>} />
                                 

        </Routes>
    
      </BrowserRouter>
      <Toaster position='top-center' />

    </>
  )
}

export default App
