import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import {auth,  googleProvider } from '../config/firebase'

const GoogleSignIn = () => {

    const signInWithGoogle= async()=>{
        try{
            await signInWithPopup(auth, googleProvider)
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
        }catch(err){
            console.log(err);
        }
    }
  return (
    <button
    id='googleSignIn'
    onClick={signInWithGoogle} 
    className='sm:px-3 sm:py-2 px-2 py-1 rounded-[25px] bg-cyan-500 text-white hover:scale-95 hover:bg-cyan-600' >
      Google Sign in
    </button>
  )
}

export default GoogleSignIn