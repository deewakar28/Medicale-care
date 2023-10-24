import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import {auth,  googleProvider } from '../config/firebase'

const GoogleSignIn = () => {

    const signInWithGoogle= async()=>{
        try{
            await signInWithPopup(auth, googleProvider);
        }catch(err){
            console.log(err);
        }
    }
  return (
    <button
    onClick={signInWithGoogle} 
    className='sm:px-3 sm:py-2 px-2 py-1 rounded-[25px] bg-cyan-500 text-white hover:scale-95 hover:bg-cyan-600' >
      Google Sign in
    </button>
  )
}

export default GoogleSignIn