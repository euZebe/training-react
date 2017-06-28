import React from 'react';

export const Navbar = (props) => (
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <a className="navbar-brand" href="/">{props.title}</a>
    </nav>
);

