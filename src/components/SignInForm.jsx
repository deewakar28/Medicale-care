import React,{useState} from 'react'
import { auth } from '../config/firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import SignUp from "../assets/SignUp.png"
import {useFormik} from 'formik';
import {signUpSchema} from '../schemas'

const SignInForm = () => {
    //const [email, setEmail] = useState("");
   // const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const initialValues = {
      email: "",
      password: "",
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit }=useFormik({
      initialValues:initialValues,
      validationSchema:signUpSchema,
      onSubmit: async(values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
        try{
          await signInWithEmailAndPassword(auth,values.email, values.password)
          .then((userCredential)=>{
            const user = userCredential.user;
            console.log(user);
            setTimeout(()=>{
              alert(user.email+" Login Successfully!!");
              document.getElementById('signup').style.display = 'none'; 
              document.getElementById('data').style.display= 'block';  
              document.getElementById('logout').style.display = 'block';
            },1000)
          })
          navigate("/"); 
                 
      }
      catch(error){
        console.log(error);
      }
    
        
      },
    });

  //   const singIn = async()=>{
  //     try{
  //         await signInWithEmailAndPassword(auth,email, password)
  //         .then((userCredential)=>{
  //           const user = userCredential.user;
  //           console.log(user);
  //           setTimeout(()=>{
  //             alert(user.email+" Login Successfully!!");
  //             document.getElementById('signup').style.display = 'none';     
  //             document.getElementById('logout').style.display = 'block';
  //           },1000)
  //         })
  //         navigate("/"); 
                 
  //     }
  //     catch(error){
  //       console.log(error);
  //     }
    
  // }
  return (
    <div class="bg-cyan-500 min-h-screen lg:flex ">
             <div className='lg:h-[100vh] h-auto lg:w-[50vw] w-full flex items-center justify-center'>
              <div>
               <img src={SignUp} alt="" className='lg:h-[90vh] sm:h-[80vh] h-auto'/>
              </div>
             </div>
      
            <div class="lg:W-[49vw]   flex flex-col items-center justify-center px-2">
                <div class=" px-6 lg:py-9  text-black ">
                    <h1 class="mb-8 text-3xl text-center">Sign In</h1>
                   <form onSubmit={handleSubmit}>
                   <label className="text-black sm:text-2xl text-[18px] tracking-wide">
                    Email
                  </label>
                   <div className=' border-b border-black mb-4'>
                    <input 
                        type="text"
                        class="lg:w-[35vw] w-[80vw] bg-transparent h-[35px]"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete='off'
                       />{errors.email && touched.email ? (
                        <p className="form-error text-red-600">{errors.email}</p>
                      ) : null}
                    </div>
                    <label htmlFor="password" className="text-black sm:text-2xl text-[18px] tracking-wide max-w-[289px] pt-4 max-md:mt-10">
                    Password
                  </label>
                    <div className=' border-b border-black mb-4'>
                    <input 
                        type="password"
                        class="lg:w-[35vw] w-[80vw] bg-transparent h-[35px]"
                        name="password"
                        autoComplete='off'
                        value={values.password}
                        onChange={handleChange}
                       onBlur={handleBlur}
                     />{errors.password && touched.password ? (
                      <p className="form-error text-red-600">{errors.password}</p>
                    ) : null}
                      </div>
                    <button
                        //type="submit"
                        className="text-cyan-500 text-opacity-90 text-xl font-medium  bg-black  p-3 rounded-2xl hover:scale-95 lg:w-[35vw] w-[80vw]"
                    >Log In</button>
                   </form>
                </div>

                <div class="text-grey-dark mt-6 mb-10 md:text-2xl">
                    Don't you have an account yet?   

                    <a class=" md:text-2xl font-bold" href="/SignUp">
                         Sign Up.
                    </a>
                </div>
            </div>
        </div>
  )
}

export default SignInForm