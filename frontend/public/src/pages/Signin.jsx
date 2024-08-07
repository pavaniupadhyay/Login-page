import React, { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'

import { handleError, handleSuccess } from '../../utils'
const Signin = () => {
  const [signinInfo, setsigninInfo] = useState({
    email: '',
    password: ''
})

const navigate = useNavigate();
const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copysigninInfo = { ...signinInfo };
    copysigninInfo[name] = value;
    setsigninInfo(copysigninInfo);
}

const handleSignin = async (e) => {
    e.preventDefault();
    const { email, password } = signinInfo;
    if ( !email || !password) {
        return handleError(' email and password are required')
    }
    try {
        const url = "http://localhost:8081/auth/signin";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signinInfo)
        });
        const result = await response.json();
        const { success, message,name,jwtToken, error } = result;
        if (success) {
          handleSuccess(message);
          localStorage.setItem("token",jwtToken);
          localStorage.setItem("signinUser",name);
            setTimeout(() => {
              navigate('/home')
            }, 1000)
        } else if (error) {
            const details = error?.details[0].message;
            handleError(details);
        } else if (!success) {
          handleError(message);
        }
        console.log(result);
    } catch (err) {
      handleError(err);
    }
}
return (
    <div className='container'>
        <h1>Signin</h1>
        <form onSubmit={handleSignin}>
            <div>
                <label htmlFor='email'>Email</label>
                <input
                    onChange={handleChange}
                    type='email'
                    name='email'
                    placeholder='Enter your email...'
                    value={signinInfo.email}
                />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input
                    onChange={handleChange}
                    type='password'
                    name='password'
                    placeholder='Enter your password...'
                    value={signinInfo.password}
                />
            </div>
            <button type='submit'>Signin</button>
            <span>don't have an account ?
                <Link to="/signup">signup</Link>
            </span>
        </form>
        <ToastContainer />
    </div>
)
}

export default Signin