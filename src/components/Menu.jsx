import React from 'react'
import './Menu.css'
import salad from '../images/saladd.jpg'
import bruchetta from '../images/istockphoto-1181611076-612x612.jpg'
import lemon from '../images/lemon-dessert-lasagne-154312-2.jpg'
import Footer from './Footer'

function Menu() {
  return (
    <div style={{marginTop: 15}} className='menu-tab'>
      <div className="container">
        <div className="row">
          <div className=" week-special">
            <h1 style={{color: 'black'}}>This weeks Specials!</h1>
           <button className='btn specials'>Online Menu</button>
          </div>
          <div className="row">
            {/* <div className="col-lg-12"> */}
              <div className="  col-md col-sm menu"style={{marginRight:10}}>
                <img src={salad} alt="salad-pic" className='img-fluid rounded salad-img' style={{marginBottom:10}}/>
                <h4>Greek salad <span className='spans'>$ 5.00</span> </h4>
                <p>
                  The famous greek salad of
                  cripsy lettuce, peppers, olives
                  and our Chicago style feta
                  cheese, garnished with
                  crunchy garlic and rosemary
                  croutons.
                </p>
              </div>
              <div className=" col-md col-sm menu" style={{marginRight: 10}}>
                <img src={bruchetta} alt="bruchetta-pic" className='img-fluid rounded b-img' style={{marginBottom:10}}/>
                <h4>Bruchetta <span className='spans' >$ 5.00</span></h4>
                <p>
                  Our bruchetta is made from
                  grilled bread that has been
                  smeared with garlic and
                  seasoned with salt and olive
                  oil.
                </p>
              </div>
              <div className="col-lg col-md col-sm menu">
                <img src={lemon} alt="lemon-pic" className='img-fluid rounded salad-img' style={{marginBottom:10}}/>
                <h4  className='lem'>Lemon Dessert <span className='spans'>$ 5.00</span> </h4>
                <p>
                  This comes straight from
                  grandma's recipe book, every
                  last ingredient has been
                  sourced and is an authentic
                  as can be imagined.
                </p>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu