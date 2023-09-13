import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

// css
import '../css/navbar.css';

// images
import menu from '../images/menu.png';
import logo from '../images/logo.png';
import logonotxt from '../images/logo-notxt.png';

const Navbar = () =>
{
    const [color, setColor] = useState('top')
    
    useEffect(() =>
    {
        window.addEventListener('scroll', listenScrollEvent);
    }, []);

    let listenScrollEvent = (e) => 
    {
        if (window.scrollY > window.innerHeight*0.75 && window.scrollY < window.innerHeight*1.67) 
        {
            setColor('scrolled');
        } 
        else if (window.scrollY <= window.innerHeight*0.75)
        {
            setColor('top');
        }
        else
        {
            setColor('bot');
        }
    }

// add about us dropdown that links to bottom of home page

    return(
        <nav className={'navbar navbar-expand-lg sticky-top ' + color}>
            <div className='container-fluid'>
                <Link className='home-button navbar-brand' to='/'>
                    <img className='nav-logo' src={logonotxt} alt='MarKi logo' />
                </Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'>
                    <img className='toggler-image' src={menu} alt='menu toggler' />
                </span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                        <Link className='nav-link' aria-current='page' to='/'>Home</Link>
                    </li>
                    <li className='nav-item dropdown'>
                        <Link className='nav-link dropdown-toggle' to='#' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                            Our Products
                        </Link>
                        <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                            <li><Link className='dropdown-item' to='/displayproducts'>All Products</Link></li>
                            <li><Link className='dropdown-item' to='/displayproducts'>Glass Bottles</Link></li>
                            <li><Link className='dropdown-item' to='/displayproducts'>Caps & Collars</Link></li>
                            <li><Link className='dropdown-item' to='/displayproducts'>Pumps</Link></li>
                            <li><hr className='dropdown-divider' /></li>
                            <li><Link className='dropdown-item' to='/displayproducts'>Complete Sets</Link></li>
                            <li><Link className='dropdown-item' to='/displayproducts'>Men's Collection</Link></li>
                            <li><Link className='dropdown-item' to='/displayproducts'>Women's Collection</Link></li>
                        </ul>
                    </li>
                    {/* <li className='nav-item'>
                        <Link className='nav-link' to='/about'>About Us</Link>
                    </li> */}
                    <li className='nav-item'>
                        <Link className='nav-link' to='/contact'>Contact Us</Link>
                    </li>
                </ul>
                <form className='d-flex' role='search'>
                    <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
                    <button className='btn btn-outline-success' type='submit'>Search</button>
                </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;