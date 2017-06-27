import React from 'react';

export const Header = (props) => (
    <div className="App-header">
        <img src={props.logoFile} className="App-logo" alt="logo" />
        <h2>{props.title}</h2>
        <hr />
    </div>
);