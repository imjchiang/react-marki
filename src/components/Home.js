import React from "react";
import {Link} from "react-router-dom";
import "../App.css"

const Home = () =>
{
    return(
        <div>
            <h1>MarKi Co., Ltd.</h1>
            <h2>Packaging Solutions</h2>
            <Link className="" to="/allproducts">
                Our Products
            </Link>
            <p className="">We do boxes and much more!!</p>
        </div>
    )
}

export default Home;