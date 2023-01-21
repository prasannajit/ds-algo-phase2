class Item {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

export default class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(data) {
        if (this.head) {
            let node = this.head;
            while (node.next) {
                node = node.next;
            }
            node.next = new Item(data, null);
        } else {
            this.head = new Item(data, null);
        }
    }
    search(data) {
        let node = this.head;
        while (node) {
            if (node.data === data) {
                return true;
            }
            node = node.next;
        }
        return false;
    }
    remove(data) {
        let node = this.head;
        if (!node) {
            return;
        }
        if(node.data === data){
            if(!node.next){
                this.head=null;
            }
            this.head=node.next;
            return;
            
        }
        let prev = node;
        while (node) {
            if (node.data === data) {
                prev.next = node.next;
                break;
            }
            prev = node;
            node = node.next;
        }
    }
    print(){
        let node=this.head;
        console.log("========Start=========");
        if(node){
            while(node){
                console.log(node.data);
                node=node.next;
            }
        }
        console.log("========End=========");
    }
}