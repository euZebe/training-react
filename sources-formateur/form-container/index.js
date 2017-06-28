import { Button } from './../ui';
import { Field } from './field'
import { LanguageSelector } from './language-selector';
import React from 'react';
import { Result } from './result';

let sample = {
    from: 'us',
    to: 'fr',
    translatedText: 'Bonjour Le monde',
    sourceText: 'Hello World'
}

class FormContainer extends React.Component {
    constructor(props) {
        super()
        console.log(props)
        this.fields = [
            {
                handler: this.handleInput.bind(this),
                name: 'Text To Translate'
            }
        ]
    }
    handleInput(evt) {
        console.log(evt.target.value)
    }
    render() {
        return (
            <div>
                <h3 className="panel-title">Edit Your Translation</h3>
                <hr />
                <form>
                    {
                        this.fields.map((field, i) => <Field key={i} {...field} />)
                    }

                    <LanguageSelector/>

                    <Button css="primary">Translate</Button>
                    <br />
                    <br />
                    <Result item={sample}></Result>

                </form>
            </div>)
    }
}

export default FormContainer