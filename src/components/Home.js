import React from "react";
import {Link} from "react-router-dom";
import placeholder from '../logo.svg';
import dropdown from '../images/dropdown.png'
import "../css/home.css"

const Home = () =>
{
    const goToBot = () => {
        window.scrollTo({
            // top: document.documentElement.scrollHeight,
            top: window.innerHeight*0.87,
            behavior: 'smooth',
        });
    }

    return(
        <>
            <div className="title">
                <h1>MarKi Co., Ltd.</h1>
                <h2>Packaging Solutions</h2>
            </div>

            <div className="scrolldiv" onClick={goToBot}>
                <img className="scrolldown" src={dropdown} />
            </div>

            <div className="homecats">
                <Link className="homeprod" to="/displayproducts">
                    Our Products
                </Link>
                <Link className="product" to="/displayproducts">
                    <img src={placeholder}/>
                    Food Packaging
                </Link>
                <Link className="product" to="/displayproducts">
                    <img src={placeholder}/>
                    Personal Care Packaging
                </Link>
            </div>
        </>
    )
}

export default Home;