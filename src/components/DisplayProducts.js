import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Tabletop from 'tabletop';
import { usePapaParse } from 'react-papaparse';

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
    const [gData, setGData] = useState();
    const { readRemoteFile } = usePapaParse();

    useEffect(() =>
    {
        handleResize();
    }, []);

    useEffect(() =>
    {
        window.addEventListener("resize", handleResize, false);
    }, []);

    // useEffect(() =>
    // {
    //     axios.get('https://docs.google.com/spreadsheets/d/1X1iLnQskeIiDbdGk74Ik1-XChpos8x_CL2_3cmc_dO8/edit?usp=sharing')
    //     .then(res => 
    //     {
    //         const googleData = res.data;
    //         setGData(googleData);
    //     })
    //     .catch(err =>
    //     {
    //         console.log("ERROR");
    //     });
    // }, []);

    // useEffect(() =>
    // {
    //     Tabletop.init(
    //         {
    //             key: 'https://docs.google.com/spreadsheets/d/1X1iLnQskeIiDbdGk74Ik1-XChpos8x_CL2_3cmc_dO8/edit?usp=sharing',
    //             simpleSheet: true
    //         }
    //     )
    //     .then((data, tabletop) =>
    //         {
    //             setGData(data);
    //         })
    //     .catch(err =>
    //         {
    //             console.log("ERROR");
    //         })
    // }, []);

    // useEffect(() =>
    // {
    //     Papa.parse('https://docs.google.com/spreadsheets/d/1X1iLnQskeIiDbdGk74Ik1-XChpos8x_CL2_3cmc_dO8/edit?usp=sharing',
    //     {
    //         download: true,
    //         complete: function(results) 
    //         {
    //             console.log(results);
    //         },
    //     }
    // }, []);

    useEffect(() => 
    {
        readRemoteFile('https://docs.google.com/spreadsheets/d/1X1iLnQskeIiDbdGk74Ik1-XChpos8x_CL2_3cmc_dO8/edit?usp=sharing', 
        {
            step: (row) =>
            {
                console.log('Row:', row.data)
            }
            // complete: (results) => 
            // {
            //     setGData(results);
            //     console.log('---------------------------');
            //     console.log('Results:', results.data);
            //     console.log('---------------------------');
            // }
        });
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
                            console.log(gData);
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