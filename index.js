import HashTable from "./datastructures/hashtable/index.js";
import Stack from "./datastructures/stack/index.js";
import Queue from "./datastructures/queue/index.js";
import LinkedList from "./datastructures/singlylinkedlist/index.js";
import twoSum from "./codingproblems/twosum/index.js";

{ // HashTable
    const hmap = new HashTable(3);
    hmap.set("test","test1");
    hmap.set("test1","test2");
    hmap.set("test2","test3");
    hmap.set("test3","test4");
    hmap.set("test4","test5");
    hmap.set("test5","test6");
    hmap.set("test6","test7");

    // console.log(hmap.get("test4"));
    // console.log(hmap.get("test2"));
    // hmap.remove("test2");
    // console.log(hmap.get("test2"));
    // console.log(hmap.get("test1"));
    // console.log(hmap.getAllKeys());
}

{ // Stack
    const stack = new Stack();
    for(let i=1;i<10;i++){
        stack.push(i);
    }
    // console.log(stack.size());
    // console.log(stack.peek());
    // console.log(stack.pop());
    // console.log(stack.size());
    // stack.push(120);
    // console.log(stack.peek());
    // console.log(stack.pop());
    // console.log(stack.size());
    // console.log(stack.pop());
    // console.log(stack.size());
    // while(stack.size()){
    //     console.log(stack.pop());
    // }
}

{ // Queue
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.enqueue(40);
    // console.log(queue.peek());
    // console.log(queue.dequeue());
    // console.log(queue.dequeue());
    // console.log(queue.size());
}

{ // Linked List
    const linkedList = new LinkedList();
    linkedList.insert(10);
    linkedList.insert(20);
    linkedList.insert(30);
    linkedList.insert(40);
    linkedList.insert(50);
    linkedList.insert(60);
    linkedList.search(30);
    linkedList.search(10);
    linkedList.search(60);
    //linkedList.print();
    linkedList.remove(50);
    //linkedList.print();
    linkedList.remove(60);
    //linkedList.print();
    linkedList.remove(10);
    //linkedList.print();
    linkedList.remove(90);
    //linkedList.print();
}

{
    console.log(twoSum([2,7,11,15],9));
}