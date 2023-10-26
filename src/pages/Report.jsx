import React from 'react'
import logo from "../assets/logo.png"
function Report() {
return (
   <>
   <div className='w-full h-[100vh] bg-cyan-500 flex flex-col gap-5 justify-center items-center'>
     <div><h1 className='text-4xl text-bold text-white'>Patients Report</h1></div>
    <div className='md:w-[60vw] w-[90vw] md:h-[70vh] h-auto bg-white rounded-2xl'>
        <div className='w-[60vw] h-[10vh] flex items-center'>
         <img src={logo} alt="" className='h-[10vh]'/>
         <h1 className='sm:text-2xl text-[15px] text-cyan-500 font-semibold'>Medical Care</h1>
        </div>
        <div className='md:w-[60vw] md:h-[60vh] w-[80vw]  h-auto flex flex-col justify-start items-start pl-8 gap-4'>
         
           <div className='flex lg:flex-row flex-col
            md:w-[50vw] justify-between'>
            <div className='flex flex-col gap-2 py-2'>
            <p>Name: Name</p> 
            <p>Gender: Gender</p>      
            <p>Phone Number: Phone number</p>
            </div>
            <div className='flex flex-col gap-2 '>
            <p>Date: Date</p>
            <p>Blood Group: Blood Group</p>
            <p>Medicine: Medicine</p>
            </div>
           </div>
           <div>
            <p>Problem: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam enim deleniti ratione, voluptatibus voluptatem quaerat commodi. Veniam repudiandae numquam ipsam earum expedita maxime, magni, dolore nulla totam, iste similique quibusdam?</p>
           </div>
           <div>Status: Status</div>
        </div>
    </div>
    </div>
   </>
  )
}

export default Report
