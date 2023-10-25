import React, { useState } from 'react'
import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const SingUpForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const singUp = async()=>{
      try{
          await createUserWithEmailAndPassword(auth,email, password)
          .then((userCredential)=>{
            const user = userCredential.user;
            console.log(user);
            setTimeout(()=>{
              alert("Registered Successfully!!");
              document.getElementById('signup').style.display = 'none';     
              document.getElementById('googleSignIn').style.display = 'none';
              document.getElementById('logout').style.display='block';
              document.getElementById('data').style.display = 'block';
            },1000)
          })
          navigate("/"); 
      }
      catch(err){
          console.log(err);
      }
  }

  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    {/*<input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
  placeholder="Full Name" />*/}
 
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        value={email}
                        onChange={e=>{
                          setEmail(e.target.value)
                        }}
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        value={password}
                        onChange={e=>{
                          setPassword(e.target.value)
                        }}
                        placeholder="Password" required/>
                    {/*<input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                      placeholder="Confirm Password" />*/}

                    <button
                        onClick={singUp}
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account? 

                    <a class="no-underline border-b border-blue text-blue-500 font-bold" href="/SignIn">
                         Log in.
                    </a>
                </div>
            </div>
        </div>
  )
}

export default SingUpForm