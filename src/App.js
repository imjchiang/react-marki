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
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='*' element={ <ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
