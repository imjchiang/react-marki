import React from "react";
import {Link} from "react-router-dom";
import placeholder from '../logo.svg';
import "../App.css"

const Home = () =>
{
    return(
        <>
            <div>
                <h1>MarKi Co., Ltd.</h1>
                <h2>Packaging Solutions</h2>
            </div>
            <div>
                <Link className="" to="/allproducts">
                    Our Products
                </Link>
                <Link to="/tbd1">
                    <img src={placeholder}/>
                    Food Packaging Boxes
                </Link>
                <Link to="/tbd2">
                    <img src={placeholder}/>
                    Food Packagaing Accesories
                </Link>
                <Link to="/tbd3">
                    <img src={placeholder}/>
                    Personal Care Packaging
                </Link>
            </div>
        </>
    )
}

export default Home;