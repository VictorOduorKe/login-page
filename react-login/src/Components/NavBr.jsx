import React from 'react'
import { Link } from 'react-router-dom'
const NavBr = () => {
  return (
    <>
    
    <header className='navbar'>
        <nav> 
            <Link className='link' to={"/"}>Register</Link>
            <ul>
                <li><Link className='link' to={"/login-page"}>Login</Link></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default NavBr