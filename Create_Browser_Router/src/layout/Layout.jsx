import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        <li>
            <Link to="/services">Services</Link>
        </li>
         <hr />
         <Outlet/>
    </ul> 
   

  )
}

export default Layout