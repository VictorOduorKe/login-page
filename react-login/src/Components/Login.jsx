import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
    <div className="form">
      <h1>Login</h1>
      <form action="">
         <label htmlFor="username">Username</label>
         <input type="text" placeholder='username' id="username"/>
        <label htmlFor="password">Password</label>
         <input type="password" placeholder='password' id="password"/>
        <button type='submit'>Login</button>
        <Link className='link' to="/">Register here</Link>
        <Link className='link' to="/reset-password">Reset Password</Link>
      </form>
    </div>
    </>
  )
}

export default Login