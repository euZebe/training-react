import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header, Button, Items} from './common';
import * as common from './common'; // possibilité de définir des namespaces par ensemble de composants
import { XHR } from './logic/xhr';
import { EventEmitter } from './logic/event-emitter';

class App extends Component {
    constructor() {
        super();
        this.state = { 
            title: "Empty list", 
            data: []
        };
        this.xhr = new XHR('http://localhost:5555/messages')
        this.com = new EventEmitter();
        this.com.subscribe(this.com.events.PAYLOAD_RECEIVED, data => console.warn(data));
    }

    getData() {
        this.xhr.read()
            .then( data => data.filter(item => item.text && item.text.includes('w')) )
            .then( data => {
                this.setState({ title: "Messages", data });
                this.com.dispatch(this.com.events.PAYLOAD_RECEIVED, 12334);
            } )
            .catch(err => console.error('an error occurred while fetching data ', err));
    }

    render() {
        return (
            <div className="App">
                <Header title={this.state.title} logoFile={logo}/>
                <div className="App-intro">
                    <Button fetch={() => this.getData()}>
                        <h4>fetch data</h4>
                    </Button>

                    <common.Button/>

                    <Items data={this.state.data} />
                </div>
            </div>
        );
    }
}

export default App;
