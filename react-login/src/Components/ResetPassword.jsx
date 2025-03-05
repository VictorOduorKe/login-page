import React from 'react'
import { Link } from 'react-router-dom'
const ResetPassword = () => {
  return (
    <>
    <div className="form">
    <h1>Reset Password</h1>
    <form action="">
       <label htmlFor="username">Username</label>
       <input type="text" placeholder='username' id="username"/>
      <label htmlFor="password">Password</label>
       <input type="password" placeholder='password' id="password"/>
      <button type='submit'>Reset</button>
      <Link className='link' to="/">Login</Link>
    </form>
  </div>
  </>
  )
}

export default ResetPassword