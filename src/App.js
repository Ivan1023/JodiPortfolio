import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './Pages/Main';
import Nav from './Components/Nav';
import './App.scss';

export default function App(){
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
