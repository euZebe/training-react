import { Flag } from './../ui'
import React from 'react';

let sample = {
    from: 'us',
    to: 'fr',
    translatedText: 'Bonjour Le monde',
    sourceText: 'Hello World'
}

export const ListItem = props => (
    <a href="#" className="list-group-item">
        <h4 className="list-group-item-heading">
            <Flag countryCode={props.item.to} />
            {props.item.translatedText}
        </h4>
        <p className="list-group-item-text">
            <Flag countryCode={props.item.from} />
            {props.item.sourceText}
        </p>
    </a>
);