import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// components
import Footer from './Footer.js';

// css
import '../css/home.css';

// images
import dropdown from '../images/dropdown.png';
import food from '../images/Food.jpg';
import personalCare from '../images/PersonalCare.jpg';
import aboutPan from '../images/aboutPan.png';

const Home = () =>
{
    const [appear, setAppear] = useState();

    // determines where the window will scroll to
    const goTo = (num) => 
    {
        if (num == 1)
        {
            // scroll to second section
            window.scrollTo({
                top: window.innerHeight*0.92,
                behavior: 'smooth',
            });
        }
        else if (num == 2)
        {
            // scroll to bottom
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });
        }
        else
        {
            // scroll back to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    }

    // determines if the back to top text will appear on hover of button
    let textAppear = (num) =>
    {
        if (num === 1)
        {
            setAppear('appear');
        }
        else
        {
            setAppear('');
        }
    }

    return(
        <motion.div
            key='home'
            initial={{opacity:0}}
            animate={{opacity:1, transition:{duration:1}}}
            exit={{opacity:0, transition:{duration:1}}}>

            <div className='title'>
                <h1>MarKi Co., Ltd.</h1>
                <h2>Packaging Solutions</h2>
            </div>

            <div className='scrolldiv' onClick={() => goTo(1)}>
                <img className='scrolldown' src={dropdown} />
            </div>

            <div className='homecats'>
                <Link className='homeprod' to='/displayproducts'>
                    Our Products
                </Link>
                <div className='prodcontainer'>
                    <Link className='product' to='/displayproducts'>
                        <img src={food}/>
                        Food Packaging
                    </Link>
                    <Link className='product' to='/displayproducts'>
                        <img src={personalCare}/>
                        Personal Care Packaging
                    </Link>
                </div>
            </div>

            <div className='scrolldiv2' onClick={() => goTo(2)}>
                <img className='scrolldown' src={dropdown} />
            </div>

            <div className='about'>
                <Link className='abouttitle' to='/contact'>
                    About Us
                </Link>
                <div className='aboutcontainer'>
                    <img className='aboutimg' src={aboutPan}/>
                    <p className='aboutblurb'>
                        MarKi Co., Ltd. was founded in [Year] to help many 
                        different companies with the creation, mass production,
                        and shipping of their packaging for their products.
                    </p>
                    <p className='aboutblurb'> 
                        Currently, the team at MarKi Co., Ltd. helps companies 
                        worldwide, from countries in the U.S. to those in Europe,
                        to find packaging solutions that are presentable, 
                        efficiently produced, and at a reasonable price point.
                    </p>
                </div>
                <div className='toTop'>
                    <p className={'topHover ' + appear}>Back to Top</p>
                    <button 
                        className='toTopButton' 
                        onMouseOver={() => textAppear(1)} 
                        onMouseLeave={() => textAppear(2)} 
                        onClick={() => goTo(3)}>
                            △
                    </button>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}

export default Home;