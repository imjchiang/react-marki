import React, {useState} from 'react';

const Sidebar = (props) =>
{

    return(
        <>
            <div className='filter-wrapper'>
                <button className='filter-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapsedTarget' aria-expanded='false' aria-controls='collapsedTarget'>Filters</button>
                <hr className='filter-top-line' />
                <div className='collapse' id='collapsedTarget'>
                    {
                        Object.keys(props.productDetails).map(deets =>
                        {
                            return(
                                <div className='detail-row'>
                                    {/* gets name of product detail category */}
                                    <h3 className='detail-category'>{deets.charAt(0).toUpperCase() + deets.slice(1) + ":"}</h3>
                                    {/* creates checkboxes of the product detail category */}
                                    {
                                        props.productDetails[deets].map(deet =>
                                        {
                                            return(
                                                <div className='specific-detail'>
                                                    <input type='checkbox' name={deet} />
                                                    <label className='checkbox-label' for={deet}>{deet}</label>
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
            <hr className='filter-bot-line' />
        </>
    );
}

export default Sidebar;