import React from 'react'
import patientImg from "../assets/patient.png"
import { db } from '../config/firebase'
import { deleteDoc, doc } from 'firebase/firestore'

function PatientCard(prop) {

  const deltePatientInfo = async(id)=>{
    const patientDoc = doc(db, "PatientsList", id)
    await deleteDoc(patientDoc)
  }
  return (
   <>
   <div className='w-[90vw] bg-gray-300 lg:flex-row lg:h-[9vh] mx-auto rounded-2xl justify-between items-center px-2 flex flex-col gap-4 py-4 lg:py-0'>
    <div className='h-[9vh] '><img className='h-[9vh]' src={patientImg} alt="" /></div>
    <div className='min-w-[250px] text-center'><p>{prop.Name}</p></div>
    <div><p>{prop.phone}</p></div>
    <div><p>{prop.bloodGroup}</p></div>
    <div><p>{prop.date}</p></div> 
    <div><p>{prop.status}</p></div>
    <div><button onClick={()=>{
      deltePatientInfo(prop.id)
      }} className='lg:p-1 px-20 py-2 rounded-2xl bg-gray-600 hover:bg-gray-500 hover:scale-95'>Delete</button></div> 
    <a href="/PatientReport"><div><button className='lg:p-1 px-20 py-2 rounded-2xl bg-gray-600 hover:bg-gray-500 hover:scale-95'>Open</button></div> </a>
   </div>
   </>
  )
}

export default PatientCard
