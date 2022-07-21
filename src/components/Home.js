import React from "react";
import {Link} from "react-router-dom";
import placeholder from '../logo.svg';
import dropdown from '../images/dropdown.png'
import "../css/home.css"

const Home = () =>
{
    const goToBot = (num) => 
    {
        if (num == 1)
        {
            window.scrollTo({
                // top: document.documentElement.scrollHeight,
                top: window.innerHeight*0.92,
                behavior: 'smooth',
            });
        }
        else
        {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });
        }
    }

    return(
        <>
            <div className="title">
                <h1>MarKi Co., Ltd.</h1>
                <h2>Packaging Solutions</h2>
            </div>

            <div className="scrolldiv" onClick={() => goToBot(1)}>
                <img className="scrolldown" src={dropdown} />
            </div>

            <div className="homecats">
                <Link className="homeprod" to="/displayproducts">
                    Our Products
                </Link>
                <div className="prodcontainer">
                    <Link className="product" to="/displayproducts">
                        <img src={placeholder}/>
                        Food Packaging
                    </Link>
                    <Link className="product" to="/displayproducts">
                        <img src={placeholder}/>
                        Personal Care Packaging
                    </Link>
                </div>
            </div>

            <div className="scrolldiv2" onClick={() => goToBot(2)}>
                <img className="scrolldown" src={dropdown} />
            </div>

            <div className="about">
                About Us
            </div>

        </>
    )
}

export default Home;