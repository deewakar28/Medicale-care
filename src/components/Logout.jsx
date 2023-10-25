import React from 'react'
import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth'

const Logout = () => {
  
    const logOut = async()=>{
        try{
            await signOut(auth);
        console.log("Sign-Out successful.");
        alert("Sign-Out successful.");
        document.getElementById('signup').style.display = 'block';     
        document.getElementById('googleSignIn').style.display = 'block';
        document.getElementById('logout').style.display = 'none';
        document.getElementById('data').style.display = 'none';
        }catch(err){
            console.log(err);
        }
    }
  
  return (
    <div>
        <button onClick={logOut} id="logout" className='sm:px-3 sm:py-2 px-2 py-1 rounded-[25px] bg-cyan-500 text-white hover:scale-95 hover:bg-cyan-600 hidden' >Logout</button>
    </div>
  )
}

export default Logout