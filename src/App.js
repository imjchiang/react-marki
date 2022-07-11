import React, { useEffect, useState } from 'react';
import {Routes, Route} from "react-router-dom";

import Home from './components/Home';
import Navbar from './components/Navbar';
import ErrorPage from './components/ErrorPage';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      {/* Switch has been replaced with Routes with new react-router-dom version */}
      {/* all routes are here */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        {/* error page displayed if no component is found for the path specified */}
        <Route path='*' element={ <ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
