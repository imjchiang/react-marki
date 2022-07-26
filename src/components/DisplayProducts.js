import React, { useState } from 'react';
import { motion } from 'framer-motion';

// components
import Sidebar from './Sidebar.js';
import Footer from './Footer.js';

// css
import '../css/display.css';

const DisplayProducts = (props) =>
{
    const [viewedproducts, setViewedproducts] = useState([]);

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
            type: "containers",
            // variant of the product
            variant: "paper",
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
            type: "containers",
            variant: "paper",
            thumbnail: "mBOpen-M",
            desc: "This chocolate box features 3 windoes to view the internals of...",
            fullDesc: "This chocolate box has many different sizes to select from along with an associated ribbon which secures the lid onto the box."
        },
        {
            id: "bon", 
            name: "Cake Box",
            category: "Food Packaging",
            type: "containers",
            variant: "paper",
            thumbnail: "bonStaggered2",
            desc: "This chocolate box features a 3 by 9 grid of chocolate insertions...",
            fullDesc: "This is the full description of this long shaped BON chocolate box."
        },
        {
            id: "mBChocBox", 
            name: "Corrugated Box",
            category: "Personal Care Packaging",
            type: "containers",
            variant: "paper",
            thumbnail: "mBOpen-M",
            desc: "This chocolate box features 3 windoes to view the internals of...",
            fullDesc: "This chocolate box has many different sizes to select from along with an associated ribbon which secures the lid onto the box."
        }
    ];

    return(
        <motion.div
            key='products'
            initial={{opacity:0}}
            animate={{opacity:1, transition:{duration:1}}}
            exit={{opacity:0, transition:{duration:1}}}>

            <h1 className='sub-title'>Our Products</h1>
            <div className='sidebar-products-container'>
                <div className='sidebar'>
                    <Sidebar handleSort={handleSort} setViewedproducts={setViewedproducts} packagingCategory={'Food Packaging'} packaging={props.foodPack} />
                    <Sidebar handleSort={handleSort} setViewedproducts={setViewedproducts} packagingCategory={'Personal Care Packaging'} packaging={props.personalPack} />
                </div>

                {/* displays the products selected for */}
                <div className='prod-cards'>
                    {
                        products.map(product =>
                        {
                            // goes through all products to pick out products that match category and variation for display
                            if ((viewedproducts[0] && viewedproducts[1] && viewedproducts[2] && product.category == viewedproducts[0] && product.type == viewedproducts[1] && product.variant == viewedproducts[2]) ||
                                (viewedproducts[0] && viewedproducts[1] && !viewedproducts[2] && product.category == viewedproducts[0] && product.type == viewedproducts[1]) ||
                                (viewedproducts[0] && !viewedproducts[1] && !viewedproducts[2] && product.category == viewedproducts[0]) ||
                                (!viewedproducts[0] && !viewedproducts[1] && !viewedproducts[2]))
                            {
                                return(
                                    <form method='get' action={product.category + product.type + '/' + product.variant + '/' + product.id} className='pcard'>
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
                        })
                    } 
                </div>
            </div>

            <form className='contact-button-form' method='get' action='/contact'>
                <button type='submit' className='card contact-button'>
                    <h5 className='card-title'>Looking for something else?</h5>
                </button>
            </form>

            <Footer />

        </motion.div>
    );
}

export default DisplayProducts;