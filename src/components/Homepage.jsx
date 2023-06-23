import React from 'react'
import './Homepage.css'
import image1 from '../images/waiter.jpg'
import Menu from './Menu'
import './Menu.css'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div className="homep">
    <div className='first-part'>
      <div className="container">
        <div className="row ch" >
          <div className="col-md-6 col-sm-12" >
            <h1>Little Lemon</h1>
            <h3 style={{color: 'white', marginTop: -12, marginBottom: 18, fontSize: 24}}>Chicago</h3>
            <p style={{color: 'white'}} className='p-home'>
              We are a family owned <br />
              Mediterranean restaurant, <br />
              focused on traditional <br />
              recipes served with a modern <br />
              twist.
            </p>
            <Link to="/order" className='nav-item' ><button className='btn btn-success'>Reserve a Table</button></Link>
          </div>
          <div className="col-md-6 col-sm-12">
            <img src={image1} alt="image1" className='waiter'/>
          </div>

        </div>
      </div>
      </div>
      <div className='col-12' style={{marginLeft:-50, marginTop:80, width:1100}}>
        <Menu />
      </div>
    </div>
  )
}




export default Homepage