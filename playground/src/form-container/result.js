import { Button, Flag } from './../ui';

import React from 'react';

export const Result = props => (
    <div className="alert alert-success">
        <strong>Result</strong>

        <div>
            <h4 className="list-group-item-heading">
                <Flag countryCode={props.item.to} />
                {props.item.translatedText}
            </h4>
            <p className="list-group-item-text">
                <Flag countryCode={props.item.from} />
                {props.item.sourceText}
            </p>
        </div>
        <br />
        <Button css="success">Add To List</Button>
        
    </div>
);