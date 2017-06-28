import React from 'react';

export const Field = props => {

    console.log('Field', props)
    
    return (
        <div className="form-group">
            <label>{props.name}</label>
            <input type="text" onChange={props.handler} className="form-control" placeholder="Input field" />
        </div>
    )
};