import crypto from 'crypto';
class HashTableItem {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
export default class HashTable {
    constructor(numSlots) {
        this.slots = numSlots;
        this.map = new Array(numSlots);
    }

    getIndex(key) {
        const hash = crypto.createHash('sha1').update(key).digest('base64');
        let sum = 0;
        for (const ch of hash) {
            sum += ch.charCodeAt(0);
        }
        return sum % this.slots;
    }

    set(key, value) {
        const slot = this.getIndex(key);
        if (!this.map[slot]) {
            this.map[slot] = [];
            this.map[slot].push(new HashTableItem(key, value));
        } else {
            this.map[slot].push(new HashTableItem(key, value));
        }
    }

    get(key) {
        const slot = this.getIndex(key);
        if (!this.map[slot]) {
            return;
        } else {
            for (const item of this.map[slot]) {
                if (key === item.key) {
                    return item.value;
                }
            }
        }
        return;
    }

    remove(key) {
        const slot = this.getIndex(key);
        if (!this.map[slot]) {
            return;
        } else {
            for (let i = 0; i < this.map[slot].length; i++) {
                if (key === this.map[slot][i].key) {
                    // delete item at this index
                    this.map[slot].splice(i, 1);
                    break;
                }
            }
            return;
        }
    }

    getAllKeys(){
        const keys = [];
        for(const item of this.map){
            if(item){
                for(const innerItem of item){
                    keys.push(innerItem.key);
                }
            }
        }
        return keys;
    }
}