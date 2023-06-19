import React from 'react'
import './Nav.css'
import logo from '../images/115168_45900_7388b824-b2f0-4ffa-ae56-58d13a637de8.jpg'

function Nav() {
  return (
   <div className="container">
      <div className='nav'>
         <img src={logo} alt="logo" className='nav-img' />
         <ul className='nav-item'>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order online</li>
            <li>Login</li>
         </ul>
      </div>
    </div>
  )
}

export default Nav