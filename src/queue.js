const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');//1. uncomment class Node

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {//2. add constructor & this.... = null;
    this.head = null;//head-> remove first
    this.tail = null;//empty
  }
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {//add
    const currentNode = new ListNode(value);
    if (this.head === null) {//if head empty,
      this.head = currentNode;//both, head & tail - new
      this.tail = currentNode;
    } 
    else {
      this.tail.next = currentNode;
      this.tail = currentNode;
    }
  }

  dequeue() {//del
  if (this.head) {
    const currentNode = this.head;
    if (this.head === null) {//if empty->
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.length--;
    }

    return currentNode.value;
  }
}
}

module.exports = {
  Queue
};
