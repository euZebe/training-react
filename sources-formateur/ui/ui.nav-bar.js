import React from 'react';

export const NavBar = props => (
    <div>
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <a className="navbar-brand" href="#">{props.title}</a>
        </nav>
        <br />
        <br />
        <br />
    </div>
);