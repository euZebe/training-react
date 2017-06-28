import React, {Component} from 'react';
import { Button } from '../common';

const ResultItem = props => (
    <div>
        <h4 className="list-group-item-heading">
            <img src="http://www.geonames.org/flags/x/us.gif" width="25" height="25" /> {props.translated}
        </h4>
        <p className="list-group-item-text">
            <img src="http://www.geonames.org/flags/x/fr.gif" width="25" height="25" /> {props.source}
        </p>
    </div>
)

export class TranslatorResult extends Component {

    constructor(props) {
        super(props);
        this.state = { source: '', translated: '' }
    }

    render() {
        const {source, translated} = this.state;
        return (
            <div className="alert alert-success">
                <strong>Result</strong>
                <Button css="close">&times;</Button>
                <ResultItem source={source} translated={translated} />
                <Button css="btn-success">Add to list</Button>
            </div>
        )
    }
}