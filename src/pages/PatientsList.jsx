import React from 'react'
import { db } from '../config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import PatientCard from '../components/PatientCard';
import { useEffect, useState } from 'react'
import patient from "../assets/patient.png"
import logo from "../assets/logo.png"

function PatientsList() {

  const [patientList, setPatientList] = useState([]);

  const patientCollectionRef = collection(db, "PatientsList");

  useEffect(() => {
    const getPatientList = async () => {
      try {
        const data = await getDocs(patientCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setPatientList(filteredData);
      } catch (err) {
        console.log(err);
      }
    }

    getPatientList();
  }, [])

  return (
    <div className="App" style={{ display: "flex", gap: "2rem", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
     
     <div className="h-[10vh] w-[100%] bg-gray-300 flex items-center justify-between px-2">
      <div className='flex items-center'>
        <img src={logo} alt="" className='h-[10vh]'/>
        <h1 className='sm:text-2xl text-[17px] text-cyan-500 font-semibold hidden sm:block'>Medical Care</h1>
      </div>
      <div><button  className='sm:px-3 sm:py-2 px-2 py-1 rounded-[25px] bg-cyan-500 text-white hover:scale-95 hover:bg-cyan-600'>Add Patient</button></div>
    </div>
      <div className='w-[90vw] bg-gray-300 lg:flex-row lg:h-[9vh] mx-auto rounded-2xl justify-between items-center px-2 lg:flex flex-col gap-4 py-4 lg:py-0 hidden '>

        <div className='h-[9vh] '><img className='h-[9vh]' src={patient} alt="" /></div>
        <div className='min-w-[220px] text-center'><p>Name</p></div>
        <div><p>Phone</p></div>
        <div><p>BloodGroup</p></div>
        <div><p className='mr-[15px]'>Date</p></div>
        <div><p>Status</p></div>
        <div>Delete</div>
        <div>Open</div>
      </div>
      {patientList.map((patient) => {
        return (
          <PatientCard
            Name={patient.Name}
            phone={patient.PhoneNumber}
            bloodGroup={patient.BloodGroup}
            date={patient.Date}
            status={patient.Status}
          />
        )
      })}
    </div>
  );
}

export default PatientsList