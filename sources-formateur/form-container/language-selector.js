import React from 'react';
import { Selector } from './selector';

export class LanguageSelector extends React.Component {

    

    constructor(){
        super()
         this.state = { from: 'FR', to: 'US' };
    }
    //static propTypes = { initialCount: React.PropTypes.number };
    //static defaultProps = { initialCount: 0 };

    selectLang(lang) {
        return (evt) => {
            console.log(lang, evt.target.value)
            this.setState({
                [lang]: evt.target.value
            })
        }
    }

    render() {
        return (
            <div className="form-group">
                <label>Choose Language From: {this.state.from}</label>
                <label>Choose Language From: {this.state.to}</label>
                <div className="well">
                    <Selector pos="left"
                        flag={this.state.from}
                        handler={this.selectLang('from')}>
                        Lang From
                    </Selector>
                    <Selector pos="right"
                        flag={this.state.to}
                        handler={this.selectLang('to')}>
                        Lang To
                    </Selector>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}