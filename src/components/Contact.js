import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// components
import Footer from './Footer.js';

// css
import '../css/contact-error.css';

const Contact = () =>
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
            className='page'
            key='contact'
            initial={{opacity:0}}
            animate={{opacity:1, transition:{duration:1}}}
            exit={{opacity:0, transition:{duration:1}}}>
            
            <div className='contact-page'>
                <h1 className='sub-title'>Contact Us</h1>
                <p>Telephone: &nbsp; +886 7 394 7011</p>
                <p>Fax: &nbsp; +886 7 394 4753</p>
                <p>Telephone TW: &nbsp; +886 929 576840</p>
                <p>Telephone US: &nbsp; 650 924 7662</p>

                <div className='contact-container'>
                    <div className='individual-contact'>
                        <h2 className='contact-name'>Kathy Chien</h2>
                        <p>Email: &nbsp; kathy@marki.com.tw</p>                
                    </div>
                    <div className='individual-contact'>
                        <h2 className='contact-name'>Stephanie Yeh</h2>
                        <p>Email: &nbsp; stephanie@marki.com.tw</p>
                    </div>
                </div>
            </div>

            <div className={footPos}>
                <Footer />
            </div>
            
        </motion.div>
    )
}

export default Contact;