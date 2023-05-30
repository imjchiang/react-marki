import React, {useState} from 'react';

// images
// import arrow from '../images/dropdown.png';

const Sidebar = (props) =>
{
    // // states for expanding sidebar
    // const [catclick, setCatclick] = useState(false);
    // const [typeclick, setTypeclick] = useState(Array(props.packaging.length).fill(false));

    // // used to create a new array state for the type click array
    // let tclickArrConvert = (type, index) =>
    // {
    //     let arr = type.slice();
    //     arr[index] = !arr[index];
    //     return arr;
    // } 

    // // determines arrow rotation based on mouseover event and click status
    // let arrowRot = (e, mouseOver, clickStatus) =>
    // {
    //     if (clickStatus || mouseOver)
    //     {
    //         // console.log('arrow is hovered or clicked');
    //         e.target.firstChild.style.transform = 'rotate(90deg)';
    //     }
    //     else
    //     {
    //         // console.log('arrow is NOT hovered or clicked');
    //         e.target.firstChild.style.transform = 'rotate(0deg)'
    //     }

    //     // if the category is closed, closed all types of the category
    //     if (!catclick)
    //     {
    //         setTypeclick(Array(props.packaging.length).fill(false));
    //     }
    // }

    return(
        <>
            <div className='all-deets'>
            <button className='collapsing-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapsedTarget' aria-expanded='false' aria-controls='collapsedTarget'>Filters</button>
            <div className='collapse' id='collapsedTarget'>
                    {
                        Object.keys(props.productDetails).map(deets =>
                        {
                            return(
                                <div className='deets'>
                                    {/* gets name of product detail category */}
                                    <h3 className='deets-name'>{deets.charAt(0).toUpperCase() + deets.slice(1) + ":"}</h3>
                                    {/* creates checkboxes of the product detail category */}
                                    {
                                        props.productDetails[deets].map(deet =>
                                        {
                                            return(
                                                <div className='deet'>
                                                    <input type='checkbox' name={deet} />
                                                    <label className='check-label' for={deet}>{deet}</label>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
        // <>
        //     if the 'button' is clicked, the sidebar for food packaging is expanded
        //     <button className='dropdownbutt'
        //             onMouseOver={(e) => {arrowRot(e, true, catclick)}} 
        //             onMouseLeave={(e) => {arrowRot(e, false, catclick)}} 
        //             onClick={() => {
        //                                 let clickStatus = !catclick;
        //                                 setCatclick(!catclick); 
        //                                 props.handleSort(props.packagingCategory, false, false);
        //                                 if (!clickStatus) 
        //                                 {
        //                                     props.setViewedproducts([false, false, false]);
        //                                 }
        //                             }}>
        //         <img className='dropdownimg' src={arrow} alt='dropdown arrow'/>
        //         &nbsp;{props.packagingCategory}
        //     </button>
        //     <div className=''>
        //     {
        //         // checks whether sidebar is expanded or not and renders if so
        //         catclick ?   
        //             props.packaging.map((pack, key) =>
        //             {
        //                 return(
        //                     <>
        //                         {/* if the button is clicked, the variants of the type is set to expand */}
        //                         <button className='dropdownbutt'
        //                                 onMouseOver={(e) => {arrowRot(e, true, typeclick[key])}} 
        //                                 onMouseLeave={(e) => {arrowRot(e, false, typeclick[key])}} 
        //                                 onClick={() => {
        //                                                     setTypeclick(tclickArrConvert(typeclick, key)); 
        //                                                     props.handleSort(props.packagingCategory, pack.type, false);
        //                                                 }}>
        //                             <img className='dropdownimg' src={arrow} alt='dropdown arrow'/>
        //                             &nbsp;{pack.type}
        //                         </button>
        //                         {
        //                             // check whether the variants of the type is expanded or not and renders if so
        //                             typeclick[key] ?
        //                                 pack.variants.map(variant =>
        //                                 {
        //                                     return(
        //                                         <button onClick={() => props.handleSort(props.packagingCategory, pack.type, variant)}>{variant}</button>
        //                                     )
        //                                 })
        //                             :
        //                             <></>
        //                         }
        //                     </>
        //                 );
        //             })
        //         :
        //         <></>
        //     }
        //     </div>
        // </>
    );
}

export default Sidebar;