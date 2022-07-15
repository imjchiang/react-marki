import React, {useEffect, useState} from "react";
import "../css/home.css";

const Navbar = () =>
{
    const [color, setColor] = useState("top")
    
    useEffect(() =>
    {
        window.addEventListener('scroll', listenScrollEvent);
    }, []);

    let listenScrollEvent = (e) => 
    {
        if (window.scrollY > window.innerHeight*0.75) 
        {
            setColor("scrolled");
        } 
        else 
        {
            setColor("top");
        }
    }

    return(
        <nav className={"navbar navbar-expand-lg sticky-top " + color}>
            <div className="container-fluid">
                <a className="home-button navbar-brand" href="/">MarKi</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Our Products
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/displayproducts">All Products</a></li>
                            <li><a className="dropdown-item" href="/displayproducts">Food Packaging</a></li>
                            <li><a className="dropdown-item" href="/displayproducts">Personal Care Packaging</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="/displayproducts">Boxes</a></li>
                            <li><a className="dropdown-item" href="/displayproducts">Bottles</a></li>
                            <li><a className="dropdown-item" href="/displayproducts">Components</a></li>
                        </ul>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="/about">About Us</a>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact Us</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;