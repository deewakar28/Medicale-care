
import React, { useEffect, useState } from 'react';
import patientImg from "../assets/patient.png";
import { db } from '../config/firebase';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import Rport from './Report';
import Aos from 'aos';
import 'aos/dist/aos.css';

function PatientCard(prop) {
  useEffect(()=>{
    Aos.init({duration: 500});
  },[])
  const [showReport, setShowReport] = useState(false);
  const [filteredData, setFilteredData] = useState(null);

  const openReport = async (id) => {
    const docRef = doc(db, 'PatientsList', id);

    try {
      const data = await getDoc(docRef);
      const filteredData = data.data();
      setFilteredData(filteredData);
      setShowReport(true);
    } catch (err) {
      console.error(err);
    }
  }

  const deletePatientInfo = async (id) => {
    const patientDoc = doc(db, "PatientsList", id);
    await deleteDoc(patientDoc);
  }

  const closeReport = () => {
    setShowReport(false);
  }

  return (
    <>
      <div data-aos="fade-down" className='w-[90vw] bg-gray-300 lg:flex-row lg:h-[9vh] mx-auto rounded-2xl justify-between items-center px-2 flex flex-col gap-4 py-4 lg:py-0'>
        <div className='h-[9vh] '><img className='h-[9vh]' src={patientImg} alt="" /></div>
        <div className='min-w-[250px] text-center'><p>{prop.Name}</p></div>
        <div><p>{prop.phone}</p></div>
        <div><p>{prop.bloodGroup}</p></div>
        <div><p>{prop.date}</p></div> 
        <div><p>{prop.status}</p></div>
        <div><button onClick={()=>{
      deletePatientInfo(prop.id)
      }} className='lg:p-1 px-20 py-2 rounded-2xl bg-gray-600 hover:bg-gray-500 hover:scale-95'>Delete</button></div>
        <div>
          <button
            className='lg:p-1 px-20 py-2 rounded-2xl bg-gray-600 hover:bg-gray-500 hover:scale-95'
            onClick={() => openReport(prop.id)}
          >
            Open
          </button>
        </div>
      </div>

      {showReport && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="modal-content bg-white p-4 rounded-lg">
              <span className="close absolute top-3 right-3 text-2xl cursor-pointer" onClick={closeReport}>&times;</span>
              <Rport
                name={filteredData.Name}
                gender={filteredData.Gender}
                phone={filteredData.PhoneNumber}
                date={filteredData.Data}
                bloodGroup={filteredData.BloodGroup}
                medicine={filteredData.Medicine}
                problem={filteredData.Problem}
                status={filteredData.Status}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PatientCard;
