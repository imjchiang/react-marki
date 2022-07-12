import React from "react";
import {NavLink, Link} from "react-router-dom";

const AllProducts = (props) =>
{   
    // add a new object for each product type
    let productCategories = [
        {
            // name is what is displayed on the Our Products page
            name: "Chocolate Boxes",
            // must be used for all the product type checks in the if statements
            code: "chocBox"
        },
        {
            name: "Cake and Pastry Boxes",
            code: "cakeBox"
        },
        {
            name: "Product Boxes",
            code: "prodBox"
        },
        {
            name: "Corrugated Boxes",
            code: "corrgBox"
        },
        {
            name: "Other Boxes",
            code: "otherBox"
        }
    ];

    // add a new array for each product type
    let products = [
        {
            // id must be the name of the folder in images
            id: "bon", 
            // name is displayed on the product page
            name: "BON",
            // type of the product
            type: "chocBox",
            // thumbnail is the image name of the product card
            thumbnail: "bonStaggered2",
            // desc is the short description on the card
            desc: "This chocolate box features a 3 by 9 grid of chocolate insertions...",
            // fullDesc is used for the full description which will be shown on the product page
            fullDesc: "This is the full description of this long shaped BON chocolate box."
        }, 
        {
            id: "mBChocBox", 
            name: "Miami Beach",
            type: "chocBox",
            thumbnail: "mBOpen-M",
            desc: "This chocolate box features 3 windoes to view the internals of...",
            fullDesc: "This chocolate box has many different sizes to select from along with an associated ribbon which secures the lid onto the box."
        },
        {
            id: "bon", 
            name: "Cake Box",
            type: "cakeBox",
            thumbnail: "bonStaggered2",
            desc: "This chocolate box features a 3 by 9 grid of chocolate insertions...",
            fullDesc: "This is the full description of this long shaped BON chocolate box."
        },
        {
            id: "mBChocBox", 
            name: "Corrugated Box",
            type: "corrgBox",
            thumbnail: "mBOpen-M",
            desc: "This chocolate box features 3 windoes to view the internals of...",
            fullDesc: "This chocolate box has many different sizes to select from along with an associated ribbon which secures the lid onto the box."
        }
    ];

    return(
        <>
            <h1 className="sub-title">Our Products</h1>
            <h1>{props.foodPack[1].type}</h1>
                <div className="">
                    { 
                        productCategories.map(category =>
                        {
                            return(
                                <form className="col" method="get" action={"/products/" + category.code}>
                                    <button type="submit" className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{category.name}</h5>
                                        </div>
                                    </button>
                                </form>
                            );
                        })
                    }
                </div>

                <div className="">
                    {
                        products.map(product =>
                        {
                            return(
                                <form method="get" action={"/products/" + product.type + "/" + product.id} className="card">
                                    <button type="submit" className="">
                                        <img src={require("../images/" + product.id + "/" + product.thumbnail + ".JPG")} className="card-img-top" alt="..." />
                                        <div type="submit" className="card-body">
                                            <p className="card-title">{product.name}</p>
                                            <p className="card-text">{product.desc}</p>
                                        </div>
                                    </button>
                                </form>
                            );
                        })
                    } 
                </div>

            <form className="contact-button-form" method="get" action="/contact">
                <button type="submit" className="card contact-button">
                    <h5 className="card-title">Looking for something else?</h5>
                </button>
            </form>
        </>
    );
}

export default AllProducts;