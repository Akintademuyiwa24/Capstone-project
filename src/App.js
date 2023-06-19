
import React from 'react';
import './App.css';
import HomePage from './components/homepage';
import AboutMe from './components/aboutme';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <ul className='navbar-nav'>
          <li className='nav-item'><Link to="/" className='nav-link'>Homepage</Link></li>
          <li className='nav-item'><Link to="/about-me" className='nav-link'>About Me</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-me' element = {<AboutMe />} />
      </Routes>
    </div>
  );
}




export default App;
