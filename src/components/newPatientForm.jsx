import React from 'react'
import { db } from '../config/firebase';
import { addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';

function NewPatientForm() {

  const patientCollectionRef = collection(db, "PatientsList");

  const [newName, setNewName] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newBloodGroup, setNewBloodGroup] = useState("");
  const [newStatus, setNewStatus] = useState("");
  
  const navigate = useNavigate();

  const addNewPatient = async()=>{
    try{
        await addDoc(patientCollectionRef, {
            Name: newName,
            PhoneNumber: newPhone,
            Date: newDate,
            BloodGroup: newBloodGroup,
            Status: newStatus,
        })
        navigate("/PatientsList")
    }catch(err){
        console.log(err);
    }
  }
  return (
  <>
  <section class=" bg-cyan-500">
  <div class="py-5 px-4 mx-auto max-w-2xl">
      <h2 class="mb-4 text-xl font-bold text-white">Add a new Patient</h2>
      <form>
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 text-sm font-medium text-white ">Patient's Name</label>
                  <input value={newName} onChange={e=>{
                    setNewName(e.target.value)
                  }} type="text" name="name" id="name" class=" border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-300 " placeholder="Type full name" required=""/>
              </div>
              <div>
                  <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                  <select id="category" class="bg-gray-300 border border-gray-600 text-gray-600 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                      <option selected="">Select gender</option>
                      <option >Male</option>
                      <option >Female</option>
                      <option >Rather not say</option>
                   
                  </select>
              </div>
              <div class="w-full">
                  <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                  <input value={newphone} onChange={e=>{
                    setNewPhone(e.target.value);
                  }} type="text" name="brand" id="brand" class="bg-gray-300 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Phone Number" required=""/>
              </div>
              <div class="w-full">
                  <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood Group</label>
                  <input value={newBloodGroup} onChange={e=>{
                    setNewBloodGroup(e.target.value);
                  }} type="text" name="brand" id="brand" class="bg-gray-300 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Blood Group" required=""/>
              </div>
              <div class="w-full">
                  <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                  <input value={newDate} onChange={e=>{
                    setNewDate(e.target.value);
                  }} type="text" name="brand" id="brand" class="bg-gray-300 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Date" required=""/>
              </div>
              
              <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 text-sm font-medium text-white ">Problem & Diagonose</label>
                  <textarea id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-600 focus:ring-primary-500 focus:border-primary-500 " placeholder="Your description here"></textarea>
              </div>
              <div class="w-full">
                  <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Medicine Required</label>
                  <input type="text" name="brand" id="brand" class="bg-gray-300 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Phone Number" required=""/>
              </div>
              <div class="w-full">
                  <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Immunisation status</label>
                  <input value={newStatus} onChange={e=>{
                    setNewStatus(e.target.value);
                  }} type="text" name="brand" id="brand" class="bg-gray-300 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Phone Number" required=""/>
              </div>
          </div>
          <button onClick={addNewPatient} class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-gray-900 bg-gray-300 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-gray-400 hover:scale-95">
              Add patient
          </button>
      </form>
  </div>
</section>
  </>
  )
}

export default NewPatientForm
