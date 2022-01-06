import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './Pages/Main';
import About from './Pages/About';
import Contact from './Pages/Contact'

import Nav from './Components/Nav';
import Footer from './Components/Footer';
import './App.scss';

export default function App(){
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}
