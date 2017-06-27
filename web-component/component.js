'use strict';

class Component extends HTMLElement {
    constructor() {
        super();
    }

    // life cycle hooks
    createdCallback() {
        console.log('createdCallback')
    }

    attachedCallback() {
        console.log('attachedCallback')
        this.innerHTML = this.render()
    }

    detachedCallback() {
        console.log('detachedCallback')
    }

    attributeChanged() {
        console.log('attributeChanged')
    }

    set state(value) {
        throw Error('Please use setState method')
    }

    get state() {
        return this._state || {}
    }

    setState(state) {
        this._state = Object.assign({}, state)
        this.innerHTML = this.render()
    }

    //
    static render(selector, component) {
        document.registerElement(selector, component)
    }
}

class SimpleList extends Component {
    
    createdCallback() {
        // this.state = {} // unavailable from parent
        this.setState({
            title: 'New list',
            data: []
        })
        setTimeout( () => this.getData(), 3000 )
    }

    getData() {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', 'http://localhost:5555/messages')
        xhr.send()
        xhr.onload = () => this.setState(
            {
                title: 'List updated on ' + new Date().toTimeString(),
                data: JSON.parse(xhr.responseText)
            }
        )
    }

    render() {
        return (`
            <div>
                <h3>${this.state.title}</h3>
                <hr/>
                <ul>
                    ${this.state.data.map(item => '<li>' + item.text + '</li>').join('')}
                </ul>
            </div>
        `)
    }
}

Component.render('simple-list', SimpleList);