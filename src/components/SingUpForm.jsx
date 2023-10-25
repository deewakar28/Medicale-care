import React, { useState } from 'react'
import { auth ,googleProvider} from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

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
    <main className="bg-cyan-400 bg-opacity-90 flex flex-col px-5">
      <section className="self-center w-full max-w-[1313px] mt-40 mb-16 max-md:max-w-full max-md:my-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[59%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/92a7b5fc-fd8e-470c-959a-e3ecde184247?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/92a7b5fc-fd8e-470c-959a-e3ecde184247?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/92a7b5fc-fd8e-470c-959a-e3ecde184247?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/92a7b5fc-fd8e-470c-959a-e3ecde184247?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/92a7b5fc-fd8e-470c-959a-e3ecde184247?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/92a7b5fc-fd8e-470c-959a-e3ecde184247?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/92a7b5fc-fd8e-470c-959a-e3ecde184247?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/92a7b5fc-fd8e-470c-959a-e3ecde184247?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&"className="aspect-[1.1] object-cover object-center w-[753px] fill-indigo-100 overflow-hidden max-w-full mt-4 max-md:mt-10"
              alt="Cover Image"
            />
          </div>
          <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col max-md:max-w-full max-md:mt-8">
              <h1 className="text-black text-3xl font-medium tracking-wider max-w-[396px]">
                Create an account
              </h1>
              
                <div className="flex w-[516px] max-w-full flex-col grow-0 ml-3.5 mt-40 max-md:mt-10">
                  <label className="text-black text-2xl tracking-wide">
                    Email
                  </label>
                  <div className="flex flex-col relative shrink-0 box-border rounded-3xl">
                    <input
                      type="email"
                      placeholder="XYZ@gmail.com"
                      value={email}
                        onChange={e=>{
                          setEmail(e.target.value)
                        }}
                      name="email"
                      className="flex flex-col relative shrink-0 box-border border bg-cyan-400 mt-5 pt-2.5 pb-1.5 px-2.5 rounded-[300px] border-solid max-md:flex max-sm:flex"
                    />
                  </div>
                  <div className="bg-black w-full h-px mt-0.5 max-md:max-w-full" />
                  <label htmlFor="password" className="text-black text-2xl tracking-wide max-w-[289px] mt-16 max-md:mt-10">
                    Password
                  </label>
                  <div className="flex flex-col relative shrink-0 box-border">
                    <input
                      type="password"
                      placeholder="Hello there"
                      value={password}
                        onChange={e=>{
                          setPassword(e.target.value)
                        }}
                      name="password"
                      className="flex flex-col relative shrink-0 box-border border bg-cyan-400 mt-5 pt-2.5 pb-1.5 px-2.5 rounded-[300px] border-solid border-stone-300"
                    />
                  </div>
                  <div className="bg-black w-full h-px mt-0.5 max-md:max-w-full" />
                </div>
                <div className="flex w-[510px] max-w-full flex-col mt-28 max-md:mt-10">
                  <button onClick={singUp}  className="text-cyan-400 text-opacity-90 text-xl font-medium tracking-wide bg-black self-stretch px-5 py-7 rounded-3xl max-md:max-w-full">
                    Create Account
                  </button>
                  <div className="border self-stretch flex grow flex-col mt-5 px-5 py-6 rounded-3xl border-solid border-neutral-400 max-md:max-w-full">
                    <div className="self-center flex ml-0 w-[255px] max-w-full items-start justify-between gap-5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0292c6ae-6966-427c-8f53-f248844f83d9?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0292c6ae-6966-427c-8f53-f248844f83d9?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0292c6ae-6966-427c-8f53-f248844f83d9?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0292c6ae-6966-427c-8f53-f248844f83d9?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0292c6ae-6966-427c-8f53-f248844f83d9?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0292c6ae-6966-427c-8f53-f248844f83d9?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0292c6ae-6966-427c-8f53-f248844f83d9?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0292c6ae-6966-427c-8f53-f248844f83d9?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&"className="aspect-[1.08] object-cover object-center w-7 fill-black overflow-hidden self-stretch max-w-full"
                        alt="Google Logo"
                      />
                      <div onClick={signInWithGoogle} className="text-black text-xl font-medium tracking-wide  cursor-pointer self-center max-w-[262px] grow shrink-0 basis-auto my-auto">
                        Sign up with Google
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-black text-2xl font-medium tracking-wide self-center -ml-3.5 mt-36 max-md:mt-10">
                  <span className="">Already have an account? </span>
                  <a href="/SignIn"><span className="font-medium">Sign in</span></a>
                </div>
              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SignUpForm;