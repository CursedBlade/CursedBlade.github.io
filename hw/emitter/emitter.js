class Emitter {
    constructor() {
        this._handlers = {};
    }

    on(event) {
        if (!this._handlers[event]) {
            this._handlers[event] = new Set();
        }
        this._handlers[event].add(handler);
    }

    off(event) {
        if (this._handlers[event]) {
            this._handlers[event].delete(handler);
        }
    }

    emit(event) {
        if (this._handlers[event]) {
            this._handlers[event].forEach(handler => handler())
        }
    }
}
