import React from 'react';
import { Input, LanguageSelector, Button } from '../common'

/**
 * Retourne une fonction qui, tant qu'elle continue à être invoquée,
 * ne sera pas exécutée. La fonction ne sera exécutée que lorsque
 * l'on cessera de l'appeler pendant plus de N millisecondes.
 * Si le paramètre `immediate` vaut vrai, alors la fonction
 * sera exécutée au premier appel au lieu du dernier.
 * Paramètres :
 *  - func : la fonction à `debouncer`
 *  - wait : le nombre de millisecondes (N) à attendre avant
 *           d'appeler func()
 *  - immediate (optionnel) : Appeler func() à la première invocation
 *                            au lieu de la dernière (Faux par défaut)
 *  - context (optionnel) : le contexte dans lequel appeler func()
 *                          (this par défaut)
 */
function debounce(func, wait, immediate, context) {
    var result;
    var timeout = null;
    return function () {
        var ctx = context || this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) result = func.apply(ctx, args);
        };
        var callNow = immediate && !timeout;
        // Tant que la fonction est appelée, on reset le timeout.
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(ctx, args);
        return result;
    };
}


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


const TranslatorResult = (props) => (
<div className="alert alert-success">
    <strong>Result</strong>
    <Button css="close">&times;</Button>
    <ResultItem source={props.source} translated={props.translated} />
    <Button css="btn-success">Add to list</Button>
</div>
)

export class TranslatorForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { from: 'fr', to: 'us', text: '', translated: '' };
    }

    handleChangeSelector = (value, selectorType) => {
        this.setState({ [selectorType]: value });
    };

    setInput = (text) => {
        this.setState({ text });
    }

    translateAndUpdate = () => {
        this.props.handleSubmitForm(this.state)
            .then(translated => this.setState({ translated }));

    }

    render() {
        console.log('TranslatorForm.render', this.state);
        return (
            <div className="panel-heading">
                <h3 className="panel-title">Edit Your Translation</h3>
                <hr />
                <form>
                    <Input label="Text to translate" handleInputChange={this.setInput} />
                    <div className="form-group">
                        <label htmlFor="">Choose Language</label>
                        <div className="well">
                            <LanguageSelector
                                label="From"
                                selectorType="from"
                                updateSelected={this.handleChangeSelector} {...this.props}
                                className="pull-left"
                                selected={this.state.from}
                            />
                            <LanguageSelector
                                label="To" selectorType="to"
                                updateSelected={this.handleChangeSelector} {...this.props}
                                className="pull-right"
                                selected={this.state.to}
                            />
                        </div>
                    </div>

                    <Button id="submitTranslation" css="btn-primary" handleClick={this.translateAndUpdate} >Submit</Button>

                    <TranslatorResult source={this.state.text} translated={this.state.translated} />
                </form>
            </div>
        )
    }
}

