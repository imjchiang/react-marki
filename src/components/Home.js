import React from "react";
import {Link} from "react-router-dom";
import placeholder from '../logo.svg';
import "../css/home.css"

const Home = () =>
{
    return(
        <>
            <div className="title">
                <h1>MarKi Co., Ltd.</h1>
                <h2>Packaging Solutions</h2>
            </div>
            <div>
                <Link className="" to="/displayproducts">
                    Our Products
                </Link>
                <Link to="/displayproducts">
                    <img src={placeholder}/>
                    Food Packaging
                </Link>
                <Link to="/displayproducts">
                    <img src={placeholder}/>
                    Personal Care Packaging
                </Link>
            </div>
        </>
    )
}

export default Home;