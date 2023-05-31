import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// components
import Sidebar from './Sidebar.js';
import Footer from './Footer.js';

// css
import '../css/display.css';

const DisplayProducts = (props) =>
{
    const [viewedproducts, setViewedproducts] = useState([]);
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

    // sets the specific category and variations to display
    const handleSort = (cat, type, vari) =>
    {
        console.log([cat, type, vari]);
        setViewedproducts([cat, type, vari]);
    }

    // add a new array for each product type
    let products = [
        {
            // id must be the name of the folder in images
            id: "bon", 
            // name is displayed on the product page
            name: "Chocolate Box 1",
            // category of product
            category: "Food Packaging",
            // type of the product
            type: "Labels",
            // material of the product
            material: "Paper",
            // finish of the product
            finish: ["Matte"],
            // thumbnail is the image name of the product card
            thumbnail: "bonStaggered2",
            // desc is the short description on the card
            desc: "This chocolate box features a 3 by 9 grid of chocolate insertions...",
            // fullDesc is used for the full description which will be shown on the product page
            fullDesc: "This is the full description of this long shaped BON chocolate box."
        }, 
        {
            id: "mBChocBox", 
            name: "Chocolate Box 2",
            category: "Food Packaging",
            type: "Ribbons",
            material: "Plastic",
            finish: ["Glossy/Polished"],
            thumbnail: "mBOpen-M",
            desc: "This chocolate box features 3 windoes to view the internals of...",
            fullDesc: "This chocolate box has many different sizes to select from along with an associated ribbon which secures the lid onto the box."
        },
        {
            id: "bon", 
            name: "Cake Box",
            category: "Food Packaging",
            type: "Bottles",
            material: "Glass",
            finish: ["Glossy/Polished", "Waterproof"],
            thumbnail: "bonStaggered2",
            desc: "This chocolate box features a 3 by 9 grid of chocolate insertions...",
            fullDesc: "This is the full description of this long shaped BON chocolate box."
        },
        {
            id: "mBChocBox", 
            name: "Corrugated Box",
            category: "Personal Care Packaging",
            type: "Containers",
            material: "Metal",
            finish: ["Matte", "Waterproof"],
            thumbnail: "mBOpen-M",
            desc: "This chocolate box features 3 windoes to view the internals of...",
            fullDesc: "This chocolate box has many different sizes to select from along with an associated ribbon which secures the lid onto the box."
        }
    ];

    return(
        <motion.div
            className='page'
            key='products'
            initial={{opacity:0}}
            animate={{opacity:1, transition:{duration:1}}}
            exit={{opacity:0, transition:{duration:1}}}>

            <h1 className='sub-title'>Our Products</h1>
            <div className='sidebar-products-container'>
                <div className='sidebar'>
                    {/* <Sidebar handleSort={handleSort} setViewedproducts={setViewedproducts} packagingCategory={'Food Packaging'} packaging={props.foodPack} />
                    <Sidebar handleSort={handleSort} setViewedproducts={setViewedproducts} packagingCategory={'Personal Care Packaging'} packaging={props.personalPack} />
                    <Sidebar handleSort={handleSort} setViewedproducts={setViewedproducts} packagingCategory={'Accessories'} packaging={props.accessories} /> */}
                    <Sidebar handleSort={handleSort} setViewedproducts={setViewedproducts} productDetails={props.productDetails} />
                </div>

                {/* displays the products selected for */}
                <div className='prod-cards'>
                    {
                        products.map(product =>
                        {
                            // goes through all products to pick out products that match category and variation for display
                            if ((viewedproducts[0] && viewedproducts[1] && viewedproducts[2] && product.category === viewedproducts[0] && product.type === viewedproducts[1] && product.variant === viewedproducts[2]) ||
                                (viewedproducts[0] && viewedproducts[1] && !viewedproducts[2] && product.category === viewedproducts[0] && product.type === viewedproducts[1]) ||
                                (viewedproducts[0] && !viewedproducts[1] && !viewedproducts[2] && product.category === viewedproducts[0]) ||
                                (!viewedproducts[0] && !viewedproducts[1] && !viewedproducts[2]))
                            {
                                return(
                                    <form method='get' action={product.category + product.type + '/' + product.material + '/' + product.id} className='pcard'>
                                        <button type='submit' className=''>
                                            <img src={require('../images/' + product.id + '/' + product.thumbnail + '.JPG')} className='card-img-top' alt='...' />
                                            <div type='submit' className='card-body'>
                                                <p className='card-title'>{product.name}</p>
                                                <p className='card-text'>{product.desc}</p>
                                            </div>
                                        </button>
                                    </form>
                                );
                            }
                            return(
                                <></>
                            );
                        })
                    } 
                </div>
            </div>

            <div className='contact-button-form'>
                <Link className='card contact-button' to='/contact'>
                    <h5 className='card-title'>Looking for something else?</h5>
                </Link>
            </div>

            <div className={footPos}>
                <Footer />
            </div>

        </motion.div>
    );
}

export default DisplayProducts;