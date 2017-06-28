import { ListFilter } from './list-filter.js'
import { ListItem } from './list-item.js'
import React from 'react';

let samples = [{
    from: 'us',
    to: 'fr',
    translatedText: 'Bonjour Le monde',
    sourceText: 'Hello World'
},
{
    from: 'us',
    to: 'fr',
    translatedText: 'Salut',
    sourceText: 'Hi'
},
{
    from: 'us',
    to: 'fr',
    translatedText: 'Bonjour matin',
    sourceText: 'Good morniong'
}]

class ListContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            filterValue: ''
        }
        this.onChangeInput = this.onChangeInput.bind(this) ;
    }
    onChangeInput(event) {
        console.log(event.target.value)
        
        this.setState({
            filterValue: event.target.value
        })
    }
    render() {
        return (
            <div className="list-group">

                <ListFilter onChange={this.onChangeInput}/>

                {
                    samples
                        .filter(
                        item => {
                            if (!this.state.filterValue) { return true }
                            return item.sourceText.includes(this.state.filterValue)
                        }
                        )
                        .map((item, idx) => <ListItem key={idx} item={item} />)
                }
            </div>
        )
    }
}

export default ListContainer