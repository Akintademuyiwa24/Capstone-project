import React from 'react'
import logo from '../images/115168_45900_7388b824-b2f0-4ffa-ae56-58d13a637de8.jpg'

function Nav() {
  return (
   <div className="container">
      <div className='navbar navbar-expand-lg navbar-light bg-light'>
         <img src={logo} alt="logo" width={60} />
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul className='navbar-nav mr-auto'>
               <li className='navbar-item'>Home</li>
               <li className='navbar-item'>About</li>
               <li className='navbar-item'>Menu</li>
               <li className='navbar-item'>Reservation</li>
               <li className='navbar-item'>Order online</li>
               <li className='navbar-item'>Login</li>
            </ul>
         </div>
      </div>
   </div>
  );
}

export default Nav