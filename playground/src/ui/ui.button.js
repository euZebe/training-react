import React from 'react';

export const Button = props => (
    <button type="button" className={"btn btn-"+props.css}>
        {props.children}
    </button>
);