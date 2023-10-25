import React from 'react'
import logo from "../assets/logo.png"
import GoogleSignIn from './GoogleSignIn';
import Logout from './Logout'

function Navbar() {
  return (
    <>
    <div className="h-[10vh] w-[100%] bg-gray-300 flex items-center justify-between">
      <div className='flex items-center'>
        <img src={logo} alt="" className='h-[10vh]'/>
        <h1 className='sm:text-2xl text-[17px] text-cyan-500 font-semibold hidden sm:block'>Medical Care</h1>
      </div>
      <div className='flex gap-4 sm:pr-5 pr-3'>
      
        <a id='signup' href="/SignUp"><button className='sm:px-3 sm:py-2 px-2 py-1 rounded-[25px] bg-cyan-500 text-white hover:scale-95 hover:bg-cyan-600' >Sign up</button></a>
         <GoogleSignIn/>
        <a href="/PatientsList"><button id='data' className='sm:px-3 sm:py-2 px-2 py-1 rounded-[25px] bg-cyan-500 text-white hover:scale-95 hover:bg-cyan-600 hidden' >Data</button></a>
         <Logout/>
      </div>
    </div>
    </>
  )
}

export default Navbar;
