import React from 'react'
import './Menu.css'
import salad from '../images/salad.jpg'
import bruchetta from '../images/ezgif.com-webp-to-jpg.jpg'
import lemon from '../images/lemon-dessert-lasagne-154312-2.jpg'

function Menu() {
  return (
    <div style={{marginTop: 15,}} className='menu-tab'>
      <div className="container">
        <div className="row">
          <div className="col-6" style={{marginBottom: 15}}>
            <h1>This weeks Specials</h1>
          </div>
          <div className="offset-2 col-2">
            <button className='btn specials'>Online Menu</button>
          </div>
          <div className="row">
            <div className="col-3 menu">
              <img src={salad} alt="salad-pic" className='img-fluid salad-img' style={{marginBottom:10}}/>
              <h4>Greek salad <span className='spans'>$ 5.00</span> </h4>
            </div>
            <div className="offset-1 col-3 menu">
              <img src={bruchetta} alt="bruchetta-pic" className='img-fluid salad-img' style={{marginBottom:10}}/>
              <h4>Bruchetta <span className='spans' >$ 5.00</span></h4>
            </div>
            <div className="offset-1 col-3 menu">
              <img src={lemon} alt="lemon-pic" className='img-fluid salad-img' style={{marginBottom:10}}/>
              <h4>Lemon Dessert <span className='spans'>$ 5.00</span> </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu