

class XHR {
    constructor(ressource) {
        this.URL = ressource;
        this.method = 'GET';
    }
    create(payload) {
        this.method = 'POST';
        return this.request(this.setUrl(), payload);
    }
    read(payload) {
        this.method = 'GET';
        return this.request(this.setUrl());
    }
    update(payload) {
        this.method = 'PUT';
        return this.request(this.setUrl(), payload);
    }
    del() {
        this.method = 'DELETE';
        return this.request(this.setUrl());
    }
    setUrl(payload) {
        switch (this.method) {
            case 'GET':
            case 'POST':
                return this.URL;
            case 'PUT':
            case 'DELETE':
                return this.URL + '/' + payload.id
            default:
                break;
        }
    }
    request(url, payload = {}) {

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open(this.method, url)
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.send(payload)
            xhr.onload = () => resolve(JSON.parse(xhr.responseText));
        });

    }
}

export { XHR }
