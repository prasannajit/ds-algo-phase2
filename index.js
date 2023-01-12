import HashTable from "./datastructures/hashtable/index.js";

// Hash-map test
const hmap = new HashTable(3);
hmap.set("test","test1");
hmap.set("test1","test2");
hmap.set("test2","test3");
hmap.set("test3","test4");
hmap.set("test4","test5");
hmap.set("test5","test6");
hmap.set("test6","test7");

console.log(hmap.get("test4"));
console.log(hmap.get("test2"));
hmap.remove("test2");
console.log(hmap.get("test2"));
console.log(hmap.get("test1"));
console.log(hmap.getAllKeys());

