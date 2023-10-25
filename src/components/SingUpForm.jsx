import React, { useState } from 'react'
import { auth ,googleProvider} from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import SignUp from "../assets/SignUp.png"
import googleLogo from "../assets/googleLogo.png"
function SignUpForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signInWithGoogle= async()=>{
    try{
        await signInWithPopup(auth, googleProvider)
        .then((userCredential)=>{
          const user = userCredential.user;
          console.log(user);
          setTimeout(()=>{
            alert("Registered Successfully!!");
            document.getElementById('signup').style.display = 'none';     
            document.getElementById('logout').style.display='block';
            document.getElementById('data').style.display = 'block';
          },1000)
        })
        navigate("/");
    }catch(err){
        console.log(err);
    }
}

  const singUp = async()=>{
    try{
        await createUserWithEmailAndPassword(auth,email, password)
        .then((userCredential)=>{
          const user = userCredential.user;
          console.log(user);
          setTimeout(()=>{
            alert("Registered Successfully!!");
            document.getElementById('signup').style.display = 'none';     
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
    <main className="bg-cyan-500 bg-opacity-90 flex flex-col px-5">
      <section className="self-center w-full md:h-[100vh] h-auto max-w-[1313px]   max-md:max-w-full max-md:my-10">
        <div className="gap-5 flex justify-center items-center max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className=" flex-col  flex items-center justify-center md:h-[100vh]  max-md:w-full max-md:ml-0">
            <img
            src={SignUp}
           className=" object-cover object-center w-[753px] overflow-hidden max-w-full mt-4 max-md:mt-10"
              alt="Cover Image"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[49%]  max-md:w-full max-md:ml-0">
            <div className=" flex-col md:max-w-full ">
              <h1 className="text-black text-3xl font-medium text-center pb-10">
                Create an account
              </h1>
              
                <div className="flex sm:w-[40vw] max-w-full flex-col 0 ml-3.5  ">
                  <label className="text-black sm:text-2xl text-[18px] tracking-wide">
                    Email
                  </label>
                  <div className="flex flex-col relative shrink-0 box-border rounded-3xl">
                    <input
                      type="email"
                  
                      value={email}
                        onChange={e=>{
                          setEmail(e.target.value)
                        }}
                      name="email"
                      className="bg-transparent  h-[35px]"
                    />
                  </div>
                  <div className="bg-black w-full h-px " />
                  <label htmlFor="password" className="text-black sm:text-2xl text-[18px] tracking-wide max-w-[289px] pt-4 max-md:mt-10">
                    Password
                  </label>
                  <div className="flex flex-col relative shrink-0 box-border">
                    <input
                      type="password"
                    
                      value={password}
                        onChange={e=>{
                          setPassword(e.target.value)
                        }}
                      name="password"
                      className="bg-transparent h-[35px]"
                    />
                  </div>
                  <div className="bg-black w-full h-px mt-0.5 " />
                </div>
                <div className="flex sm:w-[39vw] max-w-full flex-col pt-8 gap-4 ml-5">
                  <button onClick={singUp}  className="text-cyan-500 text-opacity-90 text-xl font-medium tracking-wide bg-black self-stretch p-3 rounded-2xl hover:scale-95">
                    Create Account
                  </button>
                  <div className="border self-stretch flex grow flex-col  p-4 rounded-2xl border-solid border-black max-md:max-w-full hover:scale-95">
                    <div className="self-center flex h-[15px] items-center justify-between gap-5 ">
                      <img
                       src={googleLogo}
                     
                        alt="Google Logo"
                      />
                      <div onClick={signInWithGoogle} className="text-black md:text-xl text-[15px] font-medium tracking-wide  cursor-pointer self-center ">
                        Sign up with Google
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-black md:text-2xl text-[18px] font-medium text-center py-8">
                  <span className="">Already have an account? </span>
                  <a href="/SignIn"><span className="font-medium ">Sign in</span></a>
                </div>
              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SignUpForm;