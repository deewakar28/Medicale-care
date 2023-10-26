import React, { useEffect, useState } from 'react'
import Report from '../components/Report'
import { db } from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore'

const PatientReport = () => {

  const [patientReport, setPatientReport] = useState([]);

  const patientCollectionRef = collection(db, "PatentsList");

  useEffect(() => {
    const getPatientReport = async () => {
      try {
        const data = await getDocs(patientCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setPatientReport(filteredData);
      } catch (err) {
        console.log(err);
      }
    }
    getPatientReport();
  }, [])

  return (
    <>
    {patientReport.map((patient)=>{
            return (
                <Report
                name={patient.Name}
                phone={patient.PhoneNumber}
                gender={patient.Gender}
                bloodGroup={patient.BloodGroup}
                date={patient.Date}
                medicine={patient.Medicine}
                status={patient.Status}
                />
            )
    })}
    </>
  )
}

export default PatientReport