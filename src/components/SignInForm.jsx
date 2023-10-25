import React,{useState} from 'react'
import { auth } from '../config/firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const singIn = async()=>{
      try{
          await signInWithEmailAndPassword(auth,email, password)
          .then((userCredential)=>{
            const user = userCredential.user;
            console.log(user);
            setTimeout(()=>{
              alert(user.email+" Login Successfully!!");
              document.getElementById('signup').style.display = 'none';     
              document.getElementById('logout').style.display = 'block';
            },1000)
          })
          navigate("/"); 
                 
      }
      catch(error){
        console.log(error);
      }
    
  }
  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign In</h1>

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
                        placeholder="Password" />
                    
                    <button
                        onClick={singIn}
                        type="submit"
                        class="w-full text-center py-3 rounded bg-cyan-500 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Log In</button>
                </div>

                <div class="text-grey-dark mt-6">
                    Don't you have an account yet? 

                    <a class="no-underline border-b border-blue text-blue-500 font-bold" href="/SignIn">
                         Sign Up.
                    </a>
                </div>
            </div>
        </div>
  )
}

export default SignInForm