import React from 'react';

export const Panel = props => (
    <div className="panel panel-info">
        <div className="panel-heading">
            {props.children && props.children[0]}
        </div>
        <div className="panel-body">
            {props.children && props.children[1]}
        </div>
    </div>
);