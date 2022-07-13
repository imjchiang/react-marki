import React, {useState} from "react";
import arrow from "../images/dropdown.png";
import "../css/display.css";

const DisplayProducts = (props) =>
{
    // states for expanding sidebar
    const [onfoodclick, setOnfoodclick] = useState(false);
    const [onpersonalclick, setOnpersonalclick] = useState(false);
    const [ftypeclick, setFtypeclick] = useState(Array(props.foodPack.length).fill(false));
    const [ptypeclick, setPtypeclick] = useState(Array(props.personalPack.length).fill(false));

    let typeclick = (type, index) =>
    {
        let arr = type.slice();
        arr[index] = !arr[index];
        return arr;
    }

    let rotateArrowDown = (e) =>
    {
        console.log("ENTERING");
        e.target.firstChild.style.transform = "rotate(90deg)"
    }

    let rotateArrowUp = (e) =>
    {
        console.log("LEAVING");
        e.target.firstChild.style.transform = "rotate(0deg)"
    }

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

            {/* if the "button" is clicked, the sidebar for food packaging is expanded */}
            <button className="dropdownbutt"
                    onMouseOver={rotateArrowDown} 
                    onMouseLeave={rotateArrowUp} 
                    onClick={() => setOnfoodclick(!onfoodclick)}>
                <img className="dropdownimg" src={arrow} />
                &nbsp;Food Packaging
            </button>
            <div className="">
            {
                // checks whether sidebar is expanded or not and renders if so
                onfoodclick ?   
                    props.foodPack.map((food, key) =>
                    {
                        return(
                            <>
                                {/* if the button is clicked, the variants of the type is set to expand */}
                                <button className="dropdownbutt"
                                        onMouseOver={rotateArrowDown} 
                                        onMouseLeave={rotateArrowUp} 
                                        onClick={() => setFtypeclick(typeclick(ftypeclick, key))}>
                                    <img className="dropdownimg" src={arrow} />
                                    &nbsp;{food.type}
                                </button>
                                {
                                    // check whether the variants of the type is expanded or not and renders if so
                                    ftypeclick[key] ?
                                        food.variants.map(variant =>
                                        {
                                            return(
                                                <button>{variant}</button>
                                            )
                                        })
                                    :
                                    <></>
                                }
                            </>
                        );
                    })
                :
                <></>
            }
            </div>
            
            {/* if the "button" is clicked, the sidebar for personal care packaging is expanded */}
            <button className="dropdownbutt"
                    onMouseOver={rotateArrowDown} 
                    onMouseLeave={rotateArrowUp} 
                    onClick={() => setOnpersonalclick(!onpersonalclick)}>
                <img className="dropdownimg" src={arrow} />
                &nbsp;Personal Care Packaging
            </button>
            <div className="">
            {
                // checks whether sidebar is expanded or not and renders if so
                onpersonalclick ? 
                    props.personalPack.map((personal, key) =>
                    {
                        return(
                            <>
                                {/* if the button is clicked, the variants of the type is set to expand */}
                                <button className="dropdownbutt"
                                        onMouseOver={rotateArrowDown} 
                                        onMouseLeave={rotateArrowUp} 
                                        onClick={() => setPtypeclick(typeclick(ptypeclick, key))}>
                                    <img className="dropdownimg" src={arrow} />
                                    &nbsp;{personal.type}
                                </button>
                                {
                                    // check whether the variants of the type is expanded or not and renders if so
                                    ptypeclick[key] ?
                                        personal.variants.map(variant =>
                                        {
                                            return(
                                                <button>{variant}</button>
                                            )
                                        })
                                    :
                                    <></>
                                }
                            </>
                        );
                    })
                :
                <></>
            }
            </div>

            {/* displays all the products */}
            {/* 
                maybe place this in another component and pass all items to this component as props, 
                can choose to render other more specific components (categories) instead if certain buttons are clicked on
            */}
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

export default DisplayProducts;