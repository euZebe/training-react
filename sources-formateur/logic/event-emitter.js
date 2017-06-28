
/**
 * 🦄 -> Emmettre Event
 * Communiquer entre un emmeteur et un récepteur sans lien
 */ 

const Events = Object.freeze({
    PAYLOAD_RECEIVED: 1,
    PAYLOAD_SENT: 2,
    PAYLOAD_REJECTED: 3,
    USER_INPUT: 4
})

class EventEmitter{
    constructor(){
        this.events = Events;
        this._listeners = {};
    }
    dispatch(event, ...args){
        //if (!this._listeners[event]) return;
        this._listeners[event].map(cb => cb(...args))   
    }
    subscribe(event, callBack){
        // Si dans mon objet _listeners n'existe pas la clé event
        // Je la crée en tant que tableau
        // Sinon je l'utilise
        // this._listeners[event] = this._listeners[event] || []
        // Et je pousse le callBack
        (this._listeners[event] = this._listeners[event] || []).push(callBack); 

       /* if (!this._listeners[event]) { this._listeners[event] = []}
        this._listeners[event].push(callBack); */
    }
    unsubscribe(event, callBack){
        //if (!this._listeners[event]) return;
        this._listeners[event].splice(this._listeners[event].indexOf(callBack), 1);     
    }  
}

export { EventEmitter }