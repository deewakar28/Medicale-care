import React from 'react'
import logo from "../assets/logo.png"
function Report(prop) {
return (
   <>
   <div className='w-[100vw] h-[100vh] bg-cyan-500 flex flex-col gap-5 justify-center items-center'>
     <div><h1 className='text-4xl text-bold text-white'>Patient's Report</h1></div>
    <div className='md:w-[60vw] w-[90vw] md:h-[70vh] h-auto bg-white rounded-2xl'>
        <div className='w-[60vw] h-[10vh] flex items-center'>
         <img src={logo} alt="" className='h-[10vh]'/>
         <h1 className='sm:text-2xl text-[15px] text-cyan-500 font-semibold'>Medical Care</h1>
        </div>
        <div className='md:w-[60vw] md:h-[60vh] w-[80vw]  h-auto flex flex-col justify-start items-start pl-8 gap-4'>
         
           <div className='flex lg:flex-row flex-col
            md:w-[50vw] justify-between'>
            <div className='flex flex-col gap-2 py-2'>
            <p>Name: {prop.name}</p> 
            <p>Gender: {prop.gender}</p>      
            <p>Phone: {prop.phone}</p>
            </div>
            <div className='flex flex-col gap-2 '>
            <p>Date: {prop.date}</p>
            <p>Blood-Group: {prop.bloodGroup}</p>
            <p>Medicine: {prop.medicine}</p>
            </div>
           </div>
           <div>
            <p>Problem: {prop.problem}</p>
           </div>
           <div>Status: {prop.status}</div>
        </div>
    </div>
    </div>
   </>
  )
}

export default Report
