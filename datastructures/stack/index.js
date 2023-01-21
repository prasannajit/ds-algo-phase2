export default class Stack {
    constructor() {
        this.data = [];
    }

    push(item) {
        this.data.push(item);
    }

    pop() {
        if (!this.data.length) {
            return;
        } else {
            const poppedItem = this.data[this.data.length - 1];
            this.data.length = this.data.length - 1;
            return poppedItem;
        }
    }

    peek() {
        if (!this.data.length) {
            return;
        } else {
            return this.data[this.data.length - 1];
        }
    }

    size() {
        return this.data.length;
    }

    empty() {
        this.data.length = 0;
    }
}