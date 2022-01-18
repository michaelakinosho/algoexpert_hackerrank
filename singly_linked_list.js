class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    addFront(val) {
        // Creating a new node object with the value provided
        let new_node = new Node(val);
        // Checking to see if the current list does not have a head node (if the list is empty)
        // If the list is empty, place the new node as the head
        if(!this.head) {
            this.head = new_node;
            return this;
        }

        // If the list is not empty, assign the head to be the next node to the new node
        new_node.next = this.head;
        // Then finally assign the new_node to be the new head of the list
        this.head = new_node;
        return this;
    }

    removeFront() {
        // If the list is empty, nothing to r
        if (!this.head) {
            this.head = null;
            return this;
        }
        this.head = this.head.next;
        return this;
    }

    front() {
        if (!this.head) {
            return null;
        }
        return this.head.data;
    }
}

mySLL = new LinkedList()
console.log(mySLL.front())
mySLL.addFront(27)
mySLL.addFront(54)
mySLL.addFront(81)
console.log(mySLL.front())
mySLL.removeFront()
console.log(mySLL.front())