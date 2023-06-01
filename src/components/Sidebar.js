import React, {useState} from 'react';

const Sidebar = (props) =>
{
    const handleFilter = () =>
    {
        console.log("FILTERED")
    }

    return(
        <>
            <div className='filter-wrapper'>
                <button className='filter-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapsedTarget' aria-expanded='false' aria-controls='collapsedTarget'>Filters</button>
                <hr className='filter-top-line' />
                <form className='collapse' id='collapsedTarget'>
                    <div className='spacer'></div>
                    {
                        Object.keys(props.viewedproducts).map(deets =>
                        {
                            return(
                                <div className='detail-row'>
                                    {/* gets name of product detail category */}
                                    <h3 className='detail-category'>{deets.charAt(0).toUpperCase() + deets.slice(1) + ":"}</h3>
                                    {/* creates checkboxes of the product detail category */}
                                    {
                                        props.viewedproducts[deets].map(deet =>
                                        {
                                            return(
                                                <div className='specific-detail'>
                                                    <input type='checkbox' name={deet} onClick={console.log(deets + " " + deet)} />
                                                    {console.log(props.viewedproducts)}
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