import React, { useState } from 'react'
import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { redirect, useNavigate } from 'react-router-dom';

const SingUpForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const singIn = async()=>{
      try{
          await createUserWithEmailAndPassword(auth,email, password);
          navigate("/");
      }
      catch(err){
          console.log(err);
      }
  }

  return (
        <section class="text-gray-600 body-fontn flex justify-center items-center">
    <div class="container px-5 py-24 mx-auto flex flex-wrap justify-center items-center">
      <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
          <input type="text" onChange={(e)=>{
            setEmail(e.target.value);
          }} value={email} id="email" name="email" required class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div class="relative mb-4">
          <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
          <input type="password" onChange={(e)=>{
            setPassword(e.target.value);
          }} value={password} id="email" name="password" required class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button onClick={singIn} class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign Up</button>
        <p class="text-xs text-gray-500 mt-3"></p>
      </div>
    </div>
  </section>
  )
}

export default SingUpForm