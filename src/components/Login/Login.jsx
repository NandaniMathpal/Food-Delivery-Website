import React, { useState, useEffect } from 'react'
import './Login.css'
import { assets } from '../../assets/assets';

const Login = ({setShowLogin}) => {

  const [currState,setCurrState] = useState("Sign Up");

  useEffect(()=>{
    document.body.classList.add('modal-open');
    return()=> {
    document.body.classList.remove('modal-open');
  };
  },[]);      

  const handleSubmit = (e) =>{
    e.preventDefault();
    setShowLogin(false);
  };

  return (
    <div className='login'>
      <form className="login-container" onSubmit={handleSubmit}>
        <div className="login-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-input">
            {currState==="Login"?<></>:<input type="text" placeholder='Name' required/>}
            <input type="email" placeholder='email' required/>
            <input type="password" placeholder='Password' required/>
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-condition">
            <input type="checkbox" required/>
            <p>By continueing, i agree to the terms of use & privacy policy</p>
        </div>
        {currState==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
    }      
      </form>
    </div>
  )
}

export default Login
