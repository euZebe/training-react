import React, { Component } from 'react';
import { Navbar } from './common';
import { TranslatorForm } from './features/TranslatorForm';
import { TranslatorResult } from './features/TranslatorResult';
import { TranslatorHistory } from './features/TranslatorHistory';


function translate(values) {
    let { from, to, text } = values;
    let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURI(
        text)}`;

    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url)
        xhr.send()
        xhr.onload = (response) => {
            console.log(response);
            resolve(JSON.parse(xhr.responseText)[0][0][0]);
        }
    });
}

const history = [
    {id: 1, from:'fr', to:'us', origin: 'truc', translated: 'stuff'},
    {id: 2, from:'fr', to:'ro', origin: 'maison', translated: 'dubichuk'},
];


export default class App extends Component {
    constructor(props) {
        super(props);
        this.textToTranslate = '';
        this.state = { history };
    }

    componentDidMount() {
        const url = new URL(window.location.href);
        this.textToTranslate = url.searchParams.get('translatorInput');
        //this.textToTranslate && translate(this.textToTranslate).then()
        // history.push({
        //     id: history.length + 1,
        //     from: 'fr',
        //     to: 'us',
        //     origin: this.textToTranslate,
        //     translated: 'youhouh (en)'
        // });
        this.setState({ history });
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
                        <TranslatorForm handleSubmitForm={translate}/>
                        <TranslatorResult textToTranslate={this.textToTranslate} />
                        <TranslatorHistory historyItems={history}/>
                    </div>
                </div>
            </div>
        )
    }
}
