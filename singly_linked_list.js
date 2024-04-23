class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    /**
     * Removes the last node from the singly linked list.
     *
     * @return {Node|undefined} The removed node, or undefined if the list is empty.
     */
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            // console.log("current: "+current.val);
            newTail = current;
            current = current.next;
        }

        // HELLO GOODBYE I'm ROI NICE TO MEET YOU

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    /**
     * A function that shifts the head of the linked list to the next node.
     *
     * @return {Node|undefined} The removed head node, or undefined if the list is empty.
     */
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }

    /**
     * Adds a new node with the given value to the beginning of the linked list.
     *
     * @param {any} val - The value to be added to the linked list.
     * @return {SinglyLinkedList} - The updated linked list.
     */
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    /**
     * Retrieves the node at the specified index in the linked list.
     *
     * @param {number} index - The index of the node to retrieve.
     * @return {Node|null} The node at the specified index, or null if the index is out of range.
     */
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    /**
     * Sets the value of a node at the specified index in the linked list.
     *
     * @param {number} index - The index of the node to set the value of.
     * @param {any} val - The new value to set.
     * @return {boolean} - True if the value was successfully set, false otherwise.
     */
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    /**
     * Inserts a new node with the given value at the specified index in the linked list.
     *
     * @param {number} index - The index at which to insert the new node.
     * @param {any} val - The value to be stored in the new node.
     * @return {boolean} - True if the insertion was successful, false otherwise.
     */
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    /**
     * Removes the node at the specified index from the linked list.
     *
     * @param {number} index - The index of the node to remove.
     * @return {Node|undefined} - The removed node, or undefined if the index is out of range.
     */
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var prevNode = this.get(index - 1); //7
        var removed = prevNode.next; //12
        prevNode.next = removed.next; // 11 7 12 56
        this.length--;
        return removed;
    }

    /**
     * Reverses the order of nodes in a singly linked list.
     *
     * @return {Object} The modified linked list.
     */
    reverse(){
        // 11 7 12 56

        var node = this.head; //11
        this.head = this.tail; //56
        this.tail = node; //11
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    

    traverse(){
        var current = this.head;
        console.log("------");
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("I'm ROI")
list.push("NICE TO MEET YOU")

list.traverse()

list.pop()

list.traverse()

list.shift()

list.traverse()

list.unshift("I'M BACK")

list.traverse()

console.log(list.get(0))

list.set(1, "I'M NEW!")

list.traverse()