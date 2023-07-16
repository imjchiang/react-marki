import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useGoogleSheets from 'use-google-sheets';

// components
import Sidebar from './Sidebar.js';
import Footer from './Footer.js';

// css
import '../css/display.css';

const DisplayProducts = (props) =>
{
    const [viewedproducts, setViewedproducts] = useState(
    {
        category: [false, false, false],
        type: [false, false, false, false, false, false, false, false],
        material: [false, false, false, false, false, false],
        finish: [false, false, false]
    });
    const [footPos, setFootPos] = useState();
    const [dontFilterParam, setDontFilterParam] = useState([true, true, true, true]);
    const [sheetLoading, setSheetLoading] = useState();
    const [products, setProducts] = useState([]);

    const { data, loading, error } = useGoogleSheets({
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
    });
    
    useEffect(() =>
    {
        if (!loading)
        {
            // sheet loading is just a bandaid for the use effect not rendering issue
            setSheetLoading(loading);
            console.log("DATA HAS BEEN SET");
            data[0]['data'].map((productData, key) =>
            {
                let productArray = products;
                let finishArray = productData.finish.split(", ");
                productArray[key] = productData;
                productArray[key].finish = finishArray;
                setProducts(productArray);
                console.log(products);
            })
        }
        console.log("RENDERRINGGG DATA");
    }, [loading]);

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

    // sets the categories that dont need to be filtered
    const handleFilter = () =>
    {
        // takes all the checked and unchecked boxes in each category and puts them in a two dimensional array
        let parameters = [viewedproducts.category, viewedproducts.type, viewedproducts.material, viewedproducts.finish];
        // let dontFilterThisParam = [allCat, allType, allMaterial, allFinish];
        let dontFilterThisParam = [true, true, true, true];
        let paramFCounter = [0, 0, 0, 0];
        let paramTCounter = [0, 0, 0, 0];
        console.log(viewedproducts);
        for (let i = 0; i < 4; i++)
        {
            for (let j = 0; j < parameters[i].length; j++)
            {
                // if they are not all false and the parameter shown is not clicked
                if (paramFCounter[i] !== parameters[i].length && !parameters[i][j])
                {
                    dontFilterThisParam[i] = false;
                    paramFCounter[i]++;
                    console.log(paramFCounter[i]);
                    console.log(parameters[i].length);
                }
                // if the current state is false and a parameter is shown to need to be filtered
                if (!dontFilterThisParam[i] && parameters[i][j])
                {
                    dontFilterThisParam[i] = false;
                }
                // if the parameter is true up the counter
                if (parameters[i][j])
                {
                    paramTCounter[i]++;
                }
                // if the parameter true counter or false counter shows that all the parameter is true or false, dont filter it
                if (paramTCounter[i] === parameters[i].length || paramFCounter[i] === parameters[i].length)
                {
                    dontFilterThisParam[i] = true;
                }
            }
            console.log(dontFilterThisParam[i]);
        }
        // set a state that has all the dont filter params
        setDontFilterParam(dontFilterThisParam);
    }

    return(
        <motion.div
            className='page'
            key='products'
            initial={{opacity:0}}
            animate={{opacity:1, transition:{duration:1}}}
            exit={{opacity:0, transition:{duration:1}}}>

            <h1 className='sub-title'>Our Products</h1>
            <div className='products-page-wrapper'>
                <div className='filter'>
                    {/* <Sidebar handleSort={handleSort} setViewedproducts={setViewedproducts} packagingCategory={'Food Packaging'} packaging={props.foodPack} />
                    <Sidebar handleSort={handleSort} setViewedproducts={setViewedproducts} packagingCategory={'Personal Care Packaging'} packaging={props.personalPack} />
                    <Sidebar handleSort={handleSort} setViewedproducts={setViewedproducts} packagingCategory={'Accessories'} packaging={props.accessories} /> */}
                    <Sidebar handleFilter={handleFilter} setViewedproducts={setViewedproducts} productDetails={props.productDetails} viewedproducts={viewedproducts} />
                </div>

                {/* displays the products selected for */}
                <div className='all-product-cards'>
                    {
                        products.map(product =>
                        {
                            let generalParams = [viewedproducts.category, viewedproducts.type, viewedproducts.material, viewedproducts.finish];
                            let productParams = [product.category, product.type, product.material, product.finish];
                            let filterCounter = 0;
                            let successFilterCount = 0;
                            // goes through all products to pick out products that match category and variation for display
                            for (let i = 0; i < dontFilterParam.length; i++)
                            {
                                if (!dontFilterParam[i])
                                {
                                    let successFinishCount = 0;
                                    // parses through all possible values for each parameter
                                    for (let j = 0; j < generalParams[i].length; j++)
                                    {
                                        // checks finish matching
                                        if (Array.isArray(productParams[i]))
                                        {
                                            console.log("ARRAY HAS BEEN DETECTED FOR " + generalParams[i][j]);
                                            for (let k = 0; k < productParams[i].length; k++)
                                            {
                                                if (generalParams[i][j] === productParams[i][k])
                                                {
                                                    successFinishCount++;
                                                }
                                            }
                                        }
                                        // checks other param matching
                                        else if (generalParams[i][j] === productParams[i])
                                        {
                                            successFilterCount++;
                                        }
                                    }
                                    // confirms count if any finish has matched
                                    if (successFinishCount > 0)
                                    {
                                        successFilterCount++;
                                    }
                                }
                                else
                                {
                                    filterCounter++;
                                }
                            }
                            // displays specific product if it matches parameters sought for
                            if (filterCounter + successFilterCount === dontFilterParam.length)
                            {
                                return(
                                    <div className='product-wrapper'>
                                        <Link className='product-link' to={product.id}>
                                            <div className='product-card'>
                                                    <img src={require('../images/' + product.id + '/' + product.thumbnail + '.JPG')} className='product-img' alt='...' />
                                                    <div type='submit' className='card-text'>
                                                        <p className='product-name'>{product.name}</p>
                                                        <p className='product-desc'>{product.desc}</p>
                                                    </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            }
                            return(
                                <></>
                            );
                        })
                    } 
                </div>
            </div>

            <div className='contact-button-wrapper'>
                <Link className='contact-button' to='/contact'>
                    <p className='contact-text'>Looking for something else?</p>
                </Link>
            </div>

            <div className={footPos}>
                <Footer />
            </div>

        </motion.div>
    );
}

export default DisplayProducts;