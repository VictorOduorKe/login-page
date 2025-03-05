import React, { useEffect } from 'react'
import './CSS/login.css'
import { Link } from 'react-router-dom'
const Register = () => {
  
   
  return (
    <>
        <div className="form">
            <h1>Register</h1>
            <form action="">
             <label htmlFor="username">Username</label>
             <input type="text"  placeholder='Enter username' id='username'/>
             <label htmlFor="email">Email</label>
             <input type="email" placeholder='Enter username' id='email' />
             <label htmlFor="password">Password</label>
             <input type="password" placeholder='Enter password' id='password' />
             <button type='submit'>Register</button>
            <div className="messages"></div>
          <Link className='link' to="/login">Login here</Link>
            </form>
        </div>
    </>
  )
}

export default Register