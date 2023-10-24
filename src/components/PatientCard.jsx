import React from 'react'
import patient from "../assets/patient.png"
function patientCard() {
  return (
   <>
   <div className='w-[90vw] bg-gray-300 lg:flex-row lg:h-[9vh] mx-auto rounded-2xl justify-between items-center px-2 flex flex-col gap-4 py-4 lg:py-0'>
    <div className='h-[9vh] '><img className='h-[9vh]' src={patient} alt="" /></div>
    <div><p>name</p></div>
    <div><p>phone number</p></div>
    <div><p>blood group</p></div>
    <div><p>date</p></div> 
    <div><p>immunity status</p></div>
    <div><button className='text-4xl lg:p-1 px-20 rounded-2xl bg-gray-600 hover:bg-gray-500 hover:scale-95'>→</button></div> 
   </div>
   </>
  )
}

export default patientCard
