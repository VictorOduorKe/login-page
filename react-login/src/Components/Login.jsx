import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  const [loginDataErrors,setLoginDataErrors]=useState("");
  const [isloginValid,setIsLoginValid]=useState(true)
  const [loginData,setLoginData]=useState(
    {
      username:"",
      password:""
    }
  )

  const handleChange=(e)=>{
    const{ name,value}=e.target;
    setLoginData((prevData)=>({...prevData,[name]:value}));
  }

  const handleLogin=(e)=>{
    e.preventDefault();
    if(loginData.username===""||loginData.password===""){
      setIsLoginValid(false);
      setLoginDataErrors("Kindly fill all fields")
      return;
    }
      setLoginDataErrors("Login success");
       setTimeout(() => {
        
       }, 6000);
  }
  return (
    <>
    <div className="form">
      <h1>Login</h1>
      <form action="" onSubmit={handleLogin}>
         <label htmlFor="username">Username</label>
         <input type="text" name='username' value={loginData.username} onChange={handleChange} placeholder='username' id="username"/>
        <label htmlFor="password">Password</label>
         <input type="password" name='password' value={loginData.password} onChange={handleChange} placeholder='password' id="password"/>
        <button type='submit'>Login</button>
            {!isloginValid && <p>{loginDataErrors}</p>}
        <Link className='link' to="/">Register here</Link>
        <Link className='link' to="/reset-password">Reset Password</Link>
      </form>
    </div>
    </>
  )
}

export default Login