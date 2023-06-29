import React, { useState } from 'react'

const LoginForm = () =>{
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) =>{
    e.preventDefault();
    setName('');
    setPassword('');
  }
  return(
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md col-sm">
            <form className='form' onSubmit={handleSubmit}>
              <fieldset>
                <div className='form-group'>
                  <label htmlFor="name" style={{color:'black'}}>Name</label>
                  <input
                  id='name'
                  className='form-control'
                    type="text"
                    placeholder='Your name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor="password" style={{color:'black'}}>Password</label>
                  <input
                  id='password'
                  className='form-control'
                    type='password'
                    placeholder='Your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type='submit' className='btn btn-success' disabled={!name || !password} style={{marginLeft:'40%'}}>Submit</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function Login() {
  return (
    <>
        <LoginForm/>
    </>
  )
}

export default Login