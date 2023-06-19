
import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Heropage from './components/Heropage';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Nav />}></Route>
      <Route path="/hero" element={<Heropage/>}></Route>
      <Route path="/" element={<Footer />}></Route>
    </Routes>
    </>
  );
}




export default App;
