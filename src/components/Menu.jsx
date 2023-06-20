import React from 'react'
import './Menu.css'

function Menu() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>This weeks Specials</h1>
          </div>
          <div className="offset-2 col-2">
            <button className='btn specials'>Online Menu</button>
          </div>
          <div className="row">
            <div className="col-3 menu">
              <h4>Greek salad <span className='spans'>$ 5.00</span> </h4>
            </div>
            <div className="offset-1 col-3 menu">
              <h4>Bruchetta <span className='spans' >$ 5.00</span></h4>
            </div>
            <div className="offset-1 col-3 menu">
              <h4>Lemon Dessert <span className='spans'>$ 5.00</span> </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu