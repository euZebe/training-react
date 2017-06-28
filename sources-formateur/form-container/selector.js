import React from 'react';

let style = { textAlign: 'center' };

export const Selector = props => (
    
    <div className={"pull-" + props.pos} 
    style={ style }>
        <p>{props.children}</p>
        <img src={"http://www.geonames.org/flags/x/"+
        props.flag.toLowerCase()
        +".gif"}className="img-circle" width="35" height="35" />
        <select onChange={props.handler}>
            <option value="fr">FR</option>
            <option value="us">US</option>
            <option value="ro">RO</option>
        </select>
    </div>
    
);