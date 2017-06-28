import React from 'react';

export const ListFilter = props => {
    console.log('ListFilter', props)
    return (

        <div href="#" className="list-group-item">
            <div className="form-group">
                <label htmlFor="x">Filter List</label>
                <input type="text"
                onChange={props.onChange}
                className="form-control" id="x" 
                placeholder="Input field" />
            </div>
            <p>Click On Item to Speak</p>
        </div>
    )
};