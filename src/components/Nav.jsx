import React from 'react'
import logo from '../images/115168_45900_7388b824-b2f0-4ffa-ae56-58d13a637de8.jpg'

function Nav() {
  return (
    <div>
      <img src={logo} alt="logo" className='img'/>
      <ul>
         <li>Home</li>
         <li>About</li>
         <li>Menu</li>
         <li>Reservation</li>
         <li>Order online</li>
         <li>Login</li>
      </ul>
    </div>
  )
}

export default Nav