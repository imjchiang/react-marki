import React, { useEffect, useState } from 'react';
import {Routes, Route} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import AllProducts from './components/AllProducts';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      {/* Switch has been replaced with Routes with new react-router-dom version */}
      {/* all routes are here */}
      <Routes>
        <Route path='/allproducts' element={<AllProducts />} />
        <Route path='/contact' element={<Contact />} />
        <Route exact path='/' element={<Home />} />
        {/* error page displayed if no component is found for the path specified */}
        <Route path='*' element={ <ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
