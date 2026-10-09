"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class listNode {
    constructor(value) {
        this.value = value;
    }
}
class linkedList {
    constructor() {
        this.length = 0;
    }
    add(value) {
        const node = new listNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    getNumElements() {
        return this.length;
    }
    print() {
        let current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
const numList = new linkedList();
numList.add(10);
numList.add(5);
numList.add(-3);
console.log(numList.getNumElements());
numList.print();
const nameList = new linkedList();
//# sourceMappingURL=linkedList.js.map