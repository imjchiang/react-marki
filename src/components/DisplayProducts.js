import React, {useState} from "react";
import Sidebar from "./Sidebar.js";
import "../css/display.css";

const DisplayProducts = (props) =>
{
    const [viewedproducts, setViewedproducts] = useState([]);

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
            category: "food",
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
            category: "food",
            type: "containers",
            variant: "paper",
            thumbnail: "mBOpen-M",
            desc: "This chocolate box features 3 windoes to view the internals of...",
            fullDesc: "This chocolate box has many different sizes to select from along with an associated ribbon which secures the lid onto the box."
        },
        {
            id: "bon", 
            name: "Cake Box",
            category: "food",
            type: "containers",
            variant: "paper",
            thumbnail: "bonStaggered2",
            desc: "This chocolate box features a 3 by 9 grid of chocolate insertions...",
            fullDesc: "This is the full description of this long shaped BON chocolate box."
        },
        {
            id: "mBChocBox", 
            name: "Corrugated Box",
            category: "personal",
            type: "containers",
            variant: "paper",
            thumbnail: "mBOpen-M",
            desc: "This chocolate box features 3 windoes to view the internals of...",
            fullDesc: "This chocolate box has many different sizes to select from along with an associated ribbon which secures the lid onto the box."
        }
    ];

    return(
        <>
            <h1 className="sub-title">Our Products</h1>

            <Sidebar handleSort={handleSort} packagingCategory={"Food Packaging"} packaging={props.foodPack} />
            <Sidebar handleSort={handleSort} packagingCategory={"Personal Care Packaging"} packaging={props.personalPack} />

            {/* displays the products selected for */}
            <div className="prod-cards">
                {
                    products.map(product =>
                    {
                        return(
                            <form method="get" action={product.category + product.type + "/" + product.variant + "/" + product.id} className="card">
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

export default DisplayProducts;