import React from 'react'

export const Button = props => (
    <button
        type={props.type || 'button'}
        className={'btn ' + props.css}
        onClick={props.handleClick}
    >
        {props.children}
    </button>
)