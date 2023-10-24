import React from 'react'
import { db } from '../config/firebase';
import { getDocs, collection } from 'firebase/firestore';

function App() {

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
        <Auth/>
       {/* {patientList.map((patient)=>{
          return(
            <Card
            name= {patient.Name}
            disease={patient.Disease}
            date={patient.Date}
            email= {patient.Email}
            phone= {patient.Phone}
            time= {patient.Time}
            />
          )
        })} */}
      </div>
    );
  }

export default PatientsList