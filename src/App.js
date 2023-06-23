
import React from 'react';
import './App.css';

import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Heropage from './components/Heropage';
import Homepage from './components/Homepage';
import { Link } from 'react-router-dom';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import OrderOnline from './components/Orderonline';
import Login from './components/Login';
import logo from './images/115168_45900_7388b824-b2f0-4ffa-ae56-58d13a637de8.jpg'

function App() {

  return (
    <div className='App'>
      <div className="container">
        <nav className='navbar'>
          <img src={logo} alt="logo" width={80} />
          <Link to="/" className='nav-item'>Home</Link>
          <Link to="/hero" className='nav-item'>About</Link>
          <Link to="/menu" className='nav-item'>Menu</Link>
          <Link to="/reserve" className='nav-item'>Reservation</Link>
          <Link to="/order" className='nav-item'>Order Online</Link>
          <Link to="/login" className='nav-item'>Login</Link>
        </nav>
        </div>
      <Routes>
        <Route path="/hero" element={<Heropage/>}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/reserve" element={<Reservation />}></Route>
        <Route path="/order" element={<OrderOnline />}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}




export default App;
