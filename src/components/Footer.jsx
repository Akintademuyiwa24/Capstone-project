import React from 'react'
import logo from '../images/115168_45900_7388b824-b2f0-4ffa-ae56-58d13a637de8.jpg'

function Footer() {
  return (
    <div className='container' style={{marginTop: 40}}>
      <div className="row">
        <div className="col-6">
          <img src={logo} alt="logo" className='img-fluid' width={60}/>
        </div>
        <div className="col-6">
          Contact
        </div>
      </div>
    </div>
  )
}

export default Footer