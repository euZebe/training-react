const Events = Object.freeze({
    PAYLOAD_RECEIVED: 1,
    PAYLOAD_SENT: 2,
    PAYLOAD_REJECTED: 3,
    USER_INPUT: 4,
})

class EventEmitter {
    constructor() {
        this.events = Events;
        this._listeners = {};
    }

    dispatch(event, ...args) {
        // if (!this._listeners[event]) return;
        this._listeners[event].map(callback => callback(...args));
    }

    subscribe(event, callback) {
        (this._listeners[event] = this._listeners[event] || []).push(callback);
    }

    unsubscribe(event, callback) {
        this._listeners[event].splice(this._listeners[event].indexOf(callback), 1);
    }
}

export { EventEmitter }