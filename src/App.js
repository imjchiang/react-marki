import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence} from 'framer-motion'

// components
import Navbar from './components/Navbar';
import Home from './components/Home';
import DisplayProducts from './components/DisplayProducts';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';

// css
import './App.css';

function App() 
{
    const location = useLocation();

    // let foodPack = 
    // [
    //     {
    //         type: "containers",
    //         variants: ["paper", "plastic"]
    //     },
    //     {
    //         type: "bottles",
    //         variants: ["wine", "others"]
    //     }
    //     {
    //         type: "components",
    //         variants: ["stickers", "ribbons", "labels"]
    //     }
    // ];

    // let personalPack = 
    // [
    //     {
    //         type: "containers",
    //         variants: ["paper", "plastic"]
    //     },
    //     {
    //         type: "bottles",
    //         variants: ["plastic", "glass"]
    //     }
    //     {
    //         type: "components",
    //         variants: ["cap", "pump", "labels", "others"]
    //     }
    // ];
    
    let productDetails =
    {
        category: ["Food Packaging", "Personal Care Packaging", "Accessories"],
        type: ["Containers", "Bottles", "Ribbons", "Labels", "Stickers", "Caps", "Pumps", "Others"],
        material: ["Plastic", "Paper", "Glass", "Metal", "Fabric", "Other"],
        finish: ["Matte", "Glossy/Polished", "Waterproof"]
    };

    return (
        <div className='App'>
        <Navbar />
        {/* need for exit animation */}
        <AnimatePresence exitBeforeEnter>
            {/* location necessary for proper framer-motion function */}
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home/>} />
                <Route path='/displayproducts' element={<DisplayProducts productDetails={productDetails} />} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </AnimatePresence>
        </div>
    );
}

export default App;
