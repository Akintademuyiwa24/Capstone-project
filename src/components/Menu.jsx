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
          <div className="col-md-6 col-sm-12" style={{marginBottom: 15, }}>
            <h1 style={{color: 'black'}}>This weeks Specials!</h1>
          </div>
          <div className="offset-2 col-md-2">
            <button className='btn specials'>Online Menu</button>
          </div>
          <div className="row">
            <div className="col-3 menu">
              <img src={salad} alt="salad-pic" className='img-fluid rounded salad-img' style={{marginBottom:10}}/>
              <h4>Greek salad <span className='spans'>$ 5.00</span> </h4>
              <p>
                The famous greek salad of <br />
                cripsy lettuce, peppers, olives <br />
                and our Chicago style feta <br />
                cheese, garnished with <br />
                crunchy garlic and rosemary <br />
                croutons.
              </p>
            </div>
            <div className="offset-1 col-3 menu">
              <img src={bruchetta} alt="bruchetta-pic" className='img-fluid rounded b-img' style={{marginBottom:10}}/>
              <h4>Bruchetta <span className='spans' >$ 5.00</span></h4>
              <p>
                Our bruchetta is made from  <br />
                grilled bread that has been <br />
                smeared with garlic and <br />
                seasoned with salt and olive <br />
                oil.
              </p>
            </div>
            <div className="offset-1 col-3 menu">
              <img src={lemon} alt="lemon-pic" className='img-fluid rounded salad-img' style={{marginBottom:10}}/>
              <h4  className='lem'>Lemon Dessert <span className='spans'>$ 5.00</span> </h4>
              <p>
                This comes straight from <br />
                grandma's recipe book, every <br />
                last ingredient has been <br />
                sourced and is an authentic <br />
                as can be imagined.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Menu