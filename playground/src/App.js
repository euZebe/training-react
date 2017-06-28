import React, { Component } from 'react';
import { Navbar } from './common';
import { TranslatorForm } from './features/TranslatorForm';
import { TranslatorHistory } from './features/TranslatorHistory';

const history = [
    {id: 1, from:'fr', to:'us', text: 'truc', translated: 'stuff'},
    {id: 2, from:'fr', to:'ro', text: 'maison', translated: 'dubichuk'},
    {id: 3, from:'us', to:'ro', text: 'anything', translated: 'klug'},
];


export default class App extends Component {
    constructor(props) {
        super(props);
        this.textToTranslate = '';
        this.state = { history };
    }

    translate = (values) => {
        let { from, to, text } = values;
        let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURI(
            text)}`;

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url)
            xhr.send()
            xhr.onload = (response) => {
                console.log('translate', response);
                resolve(JSON.parse(xhr.responseText)[0][0][0]);
            }
        });
    }

    render() {
        return (
            <div>
                <Navbar title={this.props.name} />
                <div className="container">
                    <div className="panel-info">
                        <br/>
                        <br/>
                        <br/>
                        <TranslatorForm handleSubmitForm={this.translate}/>
                        <TranslatorHistory historyItems={history}/>
                    </div>
                </div>
            </div>
        )
    }
}
