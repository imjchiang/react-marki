import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// components
import Footer from './Footer.js';

// css

const ErrorPage = () =>
{
    const [footPos, setFootPos] = useState();

    useEffect(() =>
    {
        handleResize();
    }, []);

    useEffect(() =>
    {
        window.addEventListener("resize", handleResize, false);
    }, []);

    const handleResize = () =>
    {
        if (document.documentElement.scrollHeight <= window.innerHeight)
        {
            setFootPos('bottom-footer');
        }
        else
        {
            setFootPos('');
        }
    }

    return(
        <motion.div
            key='error'
            initial={{opacity:0}}
            animate={{opacity:1, transition:{duration:1}}}
            exit={{opacity:0, transition:{duration:1}}}>

            <h1 class='sub-title'>Error 404: Page Not Found :(</h1>
            <p class='info'>Sorry, the page you have requested is not available. If you believe this was an error on our part, please contact our web development team!</p>
            <form action='/contact' method='get' class='contact-button-form'>
                <button type='submit' class='card category-button'>
                    <h5 class='card-title'>Contact Us!!</h5>
                </button>
            </form>
            
            <Link className='error-home' to='/'>
                Home
            </Link>

            <div className={footPos}>
                <Footer />
            </div>

        </motion.div>
    )
}

export default ErrorPage;
