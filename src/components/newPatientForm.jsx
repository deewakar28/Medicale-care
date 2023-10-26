import React from 'react';
import { db, auth } from '../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function NewPatientForm() {

  const patientCollectionRef = collection(db, "PatientsList");

  const [newName, setNewName] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newBloodGroup, setNewBloodGroup] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [newGender, setNewGender] = useState("");
  const [newProblem, setNewProblem] = useState("");
  const [newMedicine, setNewMedicine]= useState("");
  const navigate = useNavigate();

  const [formError, setFormError] = useState("");

  const validateForm = () => {
    if (
      !newName ||
      !newDate ||
      !newPhone ||
      !newBloodGroup ||
      !newStatus ||
      !newGender ||
      !newProblem ||
      !newMedicine
    ) {
      setFormError("! All fields are required !");
      return false;
    }

    // You can add more specific validation checks if needed

    return true;
  };


 const addNewPatient = async()=>{
    try{
        if(validateForm()){
            await addDoc(patientCollectionRef, {
                BloodGroup: newBloodGroup,
                Date: newDate,
                Name: newName,
                PhoneNumber: newPhone,
                Status: newStatus,
                Gender: newGender,
                Problem: newProblem,
                Medicine: newMedicine,
                userId: auth?.currentUser?.uid,
            })
            navigate("/PatientsList")
        }
       
    }catch(err){
        console.log(err);
    }
  }

  const genderOptions = ["Male", "Female", "Other"];
  return (
  <>
  
   <div className='flex flex-col justify-center items-center w-full min-h-[100vh] gap-3 bg-cyan-500  text-white'>
    <h1 className='text-3xl font-bold'>Add a new patient</h1>
   <div>
    <label for="name" class="block mb-2 text-sm font-medium ">Patient's Name</label>
    <input  type="text" placeholder='Full Name...' className='sm:w-[500px] w-[90vw] border-[2px] border-gray-600 h-8 rounded-lg text-gray-600' onChange={(e) => setNewName(e.target.value)}/>
    </div>
    <div className='sm:flex gap-5 '>
    {/* <div>
    <label for="name" class="block mb-2 text-sm font-medium ">Patient's Gender</label>   
    <input type="text" placeholder='Gender...' onChange={(e) => setNewGender(e.target.value)} className='sm:w-[240px] w-[90vw] border-[2px] border-gray-600 h-8 rounded-lg text-gray-900'/> 
    </div> */}

<div>
          <label htmlFor='gender' className='block mb-2 text-sm font-medium'>
            Patient's Gender
          </label>
          <select
            id='gender'
            onChange={(e) => setNewGender(e.target.value)}
            value={newGender}
            className='sm:w-[240px] w-[90vw] border-[2px] border-gray-600 h-8 rounded-lg text-gray-900'
          >
            <option value='' disabled>
              Select Gender
            </option>
            {genderOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

    <div>
    <label for="name" class="block mb-2 text-sm font-medium ">Patient's Phone number</label>  
    <input type="Number" placeholder='Phone...' className='sm:w-[240px] w-[90vw] border-[2px] border-gray-600 h-8 rounded-lg text-gray-900'  onChange={(e) => setNewPhone(e.target.value)}/>
    </div>
    </div>
    <div className='sm:flex gap-5'>
    <div>   
    <label for="name" class="block mb-2 text-sm font-medium ">Patient's Blood Group</label>
    <input type="text" placeholder='Blood...' className='sm:w-[240px] w-[90vw] border-[2px] border-gray-600 h-8 rounded-lg text-gray-900'  onChange={(e) => setNewBloodGroup(e.target.value)}/>
    </div>
    <div>
    <label for="name" class="block mb-2 text-sm font-medium ">Date</label>
    <input type="date" placeholder='Date...'  className='sm:w-[240px] w-[90vw] border-[2px] border-gray-600 h-8 rounded-lg text-gray-900' onChange={(e) => setNewDate(e.target.value)}/>
    </div>
    </div>
    <div>
                  <label for="description" className="block mb-2 text-sm font-medium text-white ">Problem & Diagonose</label>
                  <textarea id="description" onChange={(e) => setNewProblem(e.target.value)} rows="8" className="sm:w-[500px] w-[90vw] rounded-lg border-[2px] border-gray-600 text-gray-900" placeholder="Describe your problem"></textarea>
    </div>
    <div className='sm:flex gap-5'>

        <div>
    <label for="name" class="block mb-2 text-sm font-medium ">Patient's Status</label>
    <input type="text" placeholder='Status...' className='sm:w-[240px] w-[90vw] border-[2px] border-gray-600 h-8 rounded-lg text-gray-900'  onChange={(e) => setNewStatus(e.target.value)}/>
    </div>
    <div>
    <label for="name" class="block mb-2 text-sm font-medium ">Medicine Required</label>
    <input type="text" onChange={(e) => setNewMedicine(e.target.value)} placeholder='Medicine...'  className='sm:w-[240px] w-[90vw] border-[2px] border-gray-900 h-8 rounded-lg text-gray-600' />
    </div>
    </div>
    <button className='p-2 bg-gray-300 text-gray-900  rounded-lg hover:scale-95' onClick={addNewPatient}>add patient</button> {formError && <p className='text-black font-bold'>{formError}</p>}
   </div>


  </>
  )
}

export default NewPatientForm
