import React, { useEffect, useState } from 'react';
import {Routes, Route} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import DisplayProducts from './components/DisplayProducts';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';

import './App.css';

function App() {
  let foodPack = [
    {
      type: "containers",
      variants: ["paper", "plastic"]
    },
    {
      type: "bottles",
      variants: ["wine", "others"]
    },
    {
      type: "components",
      variants: ["stickers", "ribbons", "labels"]
    }
  ];

  let personalPack = [
    {
      type: "containers",
      variants: ["paper", "plastic"]
    },
    {
      type: "bottles",
      variants: ["plastic", "glass"]
    },
    {
      type: "components",
      variants: ["cap", "pump", "labels", "others"]
    }
  ];
  return (
    <div className='App'>
      <Navbar />
      {/* Switch has been replaced with Routes with new react-router-dom version */}
      {/* all routes are here */}
      <Routes>
        <Route 
          exact 
          path='/displayproducts' 
          element={<DisplayProducts foodPack={foodPack} personalPack={personalPack} />}
        />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/' element={<Home />} />
        {/* error page displayed if no component is found for the path specified */}
        <Route path='*' element={ <ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
