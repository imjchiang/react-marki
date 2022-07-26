import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// components
import Footer from './Footer.js';

// css

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

            <h1 className='sub-title'>Contact Us</h1>
            <p>t: +886 7 394 7011</p>
            <p>f: +886 7 394 4753</p>
            <p>t TW: +886 929 576840</p>
            <p>t US: 650 924 7662</p>

            <h2>Kathy Chien</h2>
            <p>Email: kathy@marki.com.tw</p>

            <h2>Stephanie Yeh</h2>
            <p>Email: stephanie@marki.com.tw</p>

            <div className={footPos}>
                <Footer />
            </div>
            
        </motion.div>
    )
}

export default Contact;