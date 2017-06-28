import * as ui from './../ui'

import FormContainer from './../form-container';
import ListContainer from './../list-container';
import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props)
        console.warn('props',props)
    }
    render() {
        return (
        <main className="container">
            <ui.NavBar title={this.props.name}/>
            <ui.Panel>
                <FormContainer />
                <ListContainer />
            </ui.Panel>
        </main>
        )
    }
}

export default Main