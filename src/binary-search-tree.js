const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');//1. uncomment class Node

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {//2. add constructor & this.rootNode = null;
    this.rootNode = null;//tree is empty
  }
  root() {
    return this.rootNode;//3.
  }

  add(data) {
    let newNode = new Node(data);//4.class from contractor Node

    if (this.rootNode === null) {
      this.rootNode = newNode;//4.1 root
    } else {
      let currentNode = this.rootNode;//4.1

      while (currentNode !== null) {//4.2 current node
        //adding left root:
        if (newNode.data < currentNode.data) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            break;
          }
          currentNode = currentNode.left;
          //adding right root:
        } else if (newNode.data > currentNode.data) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            break;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    //return node with data, overwise - null:
    let currentNode = this.rootNode;//init curr node

    while (currentNode.data !== data) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;//search left
      } else {
        currentNode = currentNode.right;//search right
      }

      if (currentNode === null) {//not found -> null
        return null;
      }
    }

    return currentNode;//result
  }

  remove(data) {
    //remove node with the `data` from the tree if node with the `data` exists:
    function removeNode(currentNode, data) {
    if (!currentNode) {
      return null;
    }

    if (data === currentNode.data) {
      //no left & right
      if (currentNode.left === null && currentNode.right === null) {
        return null;
      }
      //no left
      if (currentNode.left === null) {
        return currentNode.right;
      }
      //no right
      if (currentNode.right === null) {
        return currentNode.left;
      }
      //both, left & right exist
      let temp = currentNode.right;
      while (temp.left) {//while left exist
        temp = temp.left;
      }
      currentNode.data = temp.data;
      //rem temp data from curr node
      currentNode.right = removeNode(currentNode.right, temp.data);
      return currentNode;
    } else if (data < currentNode.data) {
      //rem data from left node
      currentNode.left = removeNode(currentNode.left, data);
      return currentNode;
    } else {
      //rem data from left node
      currentNode.right = removeNode(currentNode.right, data);
      return currentNode;
    }
  }

  this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    if (this.rootNode === null) {
      return null;
    }
    let currentNode = this.rootNode;
    while (currentNode.left !== null) {//only check - left/min
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    if (this.rootNode === null) {
      return null;
    }
    let currentNode = this.rootNode;
    while (currentNode.right !== null) {//only check - right/max
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};