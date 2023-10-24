import React from 'react'
import { db } from '../config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import PatientCard from '../components/PatientCard';

function PatientsList() {

    const [patientList, setPatientList] = useState([]);
  
    const patientCollectionRef = collection(db, "Patients");
  
    useEffect(()=>{
      const getPatientList = async()=>{
        try{
          const data = await getDocs(patientCollectionRef);
          const filteredData = data.docs.map((doc)=>({
            ...doc.data(),
            id: doc.id,
          }))
          setPatientList(filteredData);
        }catch(err){
          console.log(err);
        }
      }
  
      getPatientList();
    },[])
  
    return (
      <div className="App" style={{display:"flex",marginTop:"3rem",gap:"2rem", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>

       {patientList.map((patient)=>{
          return(
            <PatientCard
            Name= {patient.Name}
            phone= {patient.PhoneNumber}
            bloodGroup= {patient.BloodGroup}
            date={patient.Date}
            status= {patient.Status}
            />
          )
        })} 
      </div>
    );
  }

export default PatientsList