import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const config = {
    name: "Translator",
    version: "0.0.5"
}

ReactDOM.render(<App {...config} />, document.getElementById('root'));
