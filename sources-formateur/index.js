import Main from './main';
import React from 'react';
import ReactDOM from 'react-dom';
import { Translator } from './logic/translator'
import { XHR } from './logic/xhr';

const config = {
    name: 'Translator',
    version: '4.0.0'
}

ReactDOM.render(<Main {...config} />,
    document.getElementById('root'));
