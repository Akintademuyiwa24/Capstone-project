import React from 'react'
import './Homepage.css'
import image1 from '../images/ggg.jpg'
import Menu from './Menu'
import './Menu.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const NewHome = () => {
  return(
    <div className="homep">
        <div className='first-part'>
          <div className="container" style={{ backgroundColor:'#495E57'}}>
            <div className="row" >
              <div className="col-md col-sm" >
                <h1>Little Lemon</h1>
                <h3 style={{color: 'white', marginTop: -12, marginBottom: 18, fontSize: 24}}>Chicago</h3>
                <p style={{color: 'white'}} className='p-home'>
                  We are a family owned <br />
                  Mediterranean restaurant, <br />
                  focused on traditional <br />
                  recipes served with a modern <br />
                  twist.
                </p>
                <Link to="/order" className='nav-item' ><button className='btn btn-success first-btn'style={{marginBottom:20}}>Reserve a Table</button></Link>
              </div>
              <div className="col-md col-sm">
                <img src={image1} alt="image1" className='img-fluid rounded float-right' style={{maxWidth:'100%'}}/>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

function Homepage() {
  return (
    <div>
      <NewHome/>
      <Menu/>
      <Footer/>
    </div>
  );
}




export default Homepage