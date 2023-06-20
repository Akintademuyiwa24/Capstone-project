import React from 'react'
import './Homepage.css'
import image1 from '../images/waiter.jpg'
import Menu from './Menu'
import './Menu.css'

function Homepage() {
  return (
    <div className='first-part'>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>Little Lemon</h1>
            <h3 style={{color: 'white', marginTop: -12, marginBottom: 18, fontSize: 24}}>Chicago</h3>
            <p style={{color: 'white'}}>
              We are a family owned <br />
              Mediterranean restaurant, <br />
              focused on traditional <br />
              recipes served with a modern <br />
              twist.
            </p>
            <button className='btn btn-success'>Reserve a Table</button>
          </div>
          {/* for second part */}
          <div className="col-6">
            <img src={image1} alt="image1" className='waiter'/>
          </div>
        </div>
        <div style={{marginTop: 100, position:'relative', marginBottom: 100}}><Menu /></div>
      </div>
    </div>
  )
}

export default Homepage