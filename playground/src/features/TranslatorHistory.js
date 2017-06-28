import React, { Component } from 'react'

const HistoryFilter = (props) => (
    <div href="#" className="list-group-item">
        <div className="form-group">
            <label htmlFor="filter">Filter List</label>
            <input
                type="text"
                className="form-control"
                id="filter"
                placeholder="Input field"
                onChange={event => props.handleChangeFilter(event.target.value)} />
            <p>Click On Item to Speak</p>
        </div>
    </div>
)

const HistoryItem = (props) => (
    <a href="#" className="list-group-item">
        <h4 className="list-group-item-heading">
            <img src={`http://www.geonames.org/flags/x/${props.to}.gif`} width="25" height="25" /> {props.translated}
        </h4>
        <p className="list-group-item-text">
            <img src={`http://www.geonames.org/flags/x/${props.from}.gif`} width="25" height="25" /> {props.text}
        </p>
    </a>
)

export class TranslatorHistory extends Component {

    constructor(props) {
        super(props);
        this.state = { filteredHistory: this.getFilteredList('') }
        this.filter = this.filter.bind(this);
    }

    componentWillReceiveProps(oldProps, newProps) {
        console.log('TranslatorHistory', oldProps, newProps)
    }

    getFilteredList =(value) => {
        return this.props.historyItems.filter(item => item.text.includes(value) || item.translated.includes(value))
    }

    filter = (value) => {
        this.setState({ filteredHistory: this.getFilteredList(value) })
    }

    render() {
        return (
            <div className="list-group">
                <HistoryFilter handleChangeFilter={this.filter} />

                {this.state.filteredHistory.map(item => <HistoryItem key={item.id} {...item} />)}
            </div>
        )
    }
}