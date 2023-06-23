import React, { useState } from 'react'
import './Order.css'

function OrderOnline() {

  const [form,setForm] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()

    setForm(console.log(form))
  }
  return (
    <div className="oorder">
    <div className='container' style={{marginTop: 40}}>
      <div className="row">
        <div className="col-12">
          <form className='form-inline'>
            <div className="col-4">
              <div className='form-group'>
                <label htmlFor="">Choose date</label>
                <input type="date"  className='form-control' placeholder=''
                value={form}onChange={(e) => setForm(e.target.value)} />
              </div>
              <div className='form-group'>
                <label htmlFor="">Choose time</label>
                <select id="res-time" className='form-control'>
                  <option value="">17:00</option>
                  <option value="">18:00</option>
                  <option value="">19:00</option>
                  <option value="">20:00</option>
                  <option value="">21:00</option>
                  <option value="">22:00</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className='form-group'>
                  <label htmlFor="">Number of guests</label>
                  <input type="number" id="guests" placeholder='1' min='1' max='10'
                  className='form-control' value={form} onChange={(e) => setForm(e.target.value)}/>
              </div>
              <div className='form-gorup'>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" className='form-control' >
                  <option value="">Birthday</option>
                  <option value="">Anniversary</option>
                </select>
              </div>
            </div>
          </form>
          <button className='btn btn-success' style={{marginLeft: 450}} onClick={handleSubmit}>Make your reservation</button>
        </div>
      </div>

    </div>
    </div>
  )
}

export default OrderOnline