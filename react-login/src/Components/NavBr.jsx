import React from 'react'
import { Link } from 'react-router-dom'
const NavBr = () => {
  return (
    <>
    
    <header>
        <nav> 
            <Link to={"/"}>Register</Link>
            <ul>
                <li><Link to={"/login"}>Login</Link></li>
                <li></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default NavBr