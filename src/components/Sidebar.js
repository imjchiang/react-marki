import React, {useState} from 'react';

const Sidebar = (props) =>
{
    const handleFilter = () =>
    {
        console.log("FILTERED")
    }

    const handleChecking = (deets, deet, index) =>
    {
        let tempViewedProds = props.viewedproducts;
        if (props.viewedproducts[deets][index])
        {
            tempViewedProds[deets][index] = false;
        }
        else
        {
            tempViewedProds[deets][index] = deet;
        }
        props.setViewedproducts(tempViewedProds);
        console.log(props.viewedproducts);
    }

    return(
        <>
            <div className='filter-wrapper'>
                <button className='filter-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapsedTarget' aria-expanded='false' aria-controls='collapsedTarget'>Filters</button>
                <hr className='filter-top-line' />
                <form className='collapse' id='collapsedTarget'>
                    <div className='spacer'></div>
                    {
                        Object.keys(props.productDetails).map(deets =>
                        {
                            return(
                                <div className='detail-row'>
                                    {/* gets name of product detail category */}
                                    <h3 className='detail-category'>{deets.charAt(0).toUpperCase() + deets.slice(1) + ":"}</h3>
                                    {/* creates checkboxes of the product detail category */}
                                    {
                                        props.productDetails[deets].map((deet, index) =>
                                        {
                                            return(
                                                <div className='specific-detail'>
                                                    <input type='checkbox' name={deet} value={deet} onClick={() => handleChecking(deets, deet, index)} />
                                                    <label className='checkbox-label' for={deet}>{deet}</label>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            );
                        })
                    }
                    <input className='apply-filter-button' type='button' onClick={handleFilter} value='Apply' />
                </form>
            </div>
            <hr className='filter-bot-line' />
        </>
    );
}

export default Sidebar;