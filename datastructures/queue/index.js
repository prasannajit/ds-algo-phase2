export default class Queue {
    constructor() {
        this.data = [];
    }

    enqueue(item) {
        this.data.push(item);
    }

    dequeue() {
        if(this.data.length){
            const item = this.data.splice(0,1);
            return item[0];
        }
    }

    peek(){
        if(this.data.length){
            return this.data[0];
        }
    }

    size() {
        return this.data.length;
    }

    empty() {
        this.data.length = 0;
    }
}