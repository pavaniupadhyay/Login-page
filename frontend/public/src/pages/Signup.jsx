import React, { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'

import { handleError, handleSuccess } from '../../utils'
const Signup = () => {
 const [signupInfo,setSignupInfo]=useState({
  name: '',
  email: '',
  password: ''
 })
 const navigate =useNavigate();
  const handleChange=(e)=>{
    const{name,value}=e.target;
    const CopyLoginInfo={...signupInfo}
    CopyLoginInfo[name]=value;
    setSignupInfo(CopyLoginInfo);
  }
  const handleSignUp = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
        return handleError('name, email and password are required');
    }
    try {
        const url = "http://localhost:8081/auth/signup";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signupInfo)
        });
        const result = await response.json();
        const { success, message } = result;
        if (success) {
            handleSuccess(message);
            setTimeout(() => {
                navigate('/signin');
            }, 1000);
        }
    } catch (err) {
        handleError(err);
    }
};

      
  return (
    <div className='container'>
      <h1>Signup</h1>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor='name'>name</label>
          <input 
          onClick={handleChange}
          type='text' 
                 autoFocus
                 name='name'
                 placeholder='Enter your name'
                 />
        </div>
        <div>
          <label htmlFor='email'>email</label>
          <input 
           onClick={handleChange}
          type='text' 
                 autoFocus
                 name='email'
                 placeholder='Enter your email'
                 />
        </div>
        <div>
          <label htmlFor='password'>password</label>
          <input 
           onClick={handleChange}
          type='text'
                 name='password'
                 placeholder='Enter your password'
                 />
        </div>
        <button>Sign Up</button>
        <span>Alredy have an account?
          <Link to="/Signin">Signin</Link>
       </span>
       <ToastContainer/>
      </form>
      </div>
  )
}

export default Signup