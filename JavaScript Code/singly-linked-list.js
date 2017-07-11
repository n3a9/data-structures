// Node Implementation

/*
 * Implementation of a node in Javascript. Carries
 * a value element, and points to another node.
 *
 * @constructor
 * @param {Object} value: the value element to be stored.
 */
function Node(value) {
  this.value = value;
  this.next = null;
}

/*
 * Will return the value of the node.
 *
 * @return the value the node carries.
 */
Node.prototype.getValue = function() {
  return this.value;
};

/*
 * Will return if the node points to another node.
 *
 * @return true if it points to another node and false if not.
 */
Node.prototype.hasNext = function() {
  return (this.next !== null);
};

/*
 * Will return the node being pointed to if its not empty.
 *
 * @return the node that this node points to if not empty,
 * otherwise null.
 */
Node.prototype.getNext = function() {
  var n = null;
  if (this.hasNext()) {
    n = this.next;
  }
  return n;
};

/*
 * Will change the value of the node and return the
 * old value.
 *
 * @param {Object} newValue: the new value to be carried by the node.
 * @return the old value of the node.
 */
Node.prototype.setValue = function(newValue) {
  var oldValue = this.value;
  this.value = newValue;
  return oldValue;
};

/*
 * Will update the node being pointed to and return the old one.
 *
 * @param {Node} node: the new node to point to.
 * @return the old node.
 */
Node.prototype.setNext = function(newNext) {
  var oldNext = this.next;
  this.next = newNext;
  return oldNext;
};


// SinglyLinkedList Implementation

/*
 * Implementation of a Singly Linked List in Javascript.
 * Has a head node, as well as a size variable.
 *
 * @constructor
 */
function SinglyLinkedList() {
  this.head = null;
  this.size = 0;
}

/**
 * Returns a string representation of the SinglyLinkedList.
 *
 * @return a string containing the values in the list
 */
SinglyLinkedList.prototype.toString = function() {
  var node = this.head;
  if (node === null) {
    return '[]';
  }
  var output = '[';
  while (node.getNext() !== null) {
    output += node.value + ', ';
    node = node.getNext();
  }
  return output + node.getValue() + ']';
};

/*
 * Will get the node at the respective index in the list.
 * If position does not exist, will return null.
 * Simply iterates through the nodes in the list the given
 * number of times and will return the node at that position.
 *
 * @param {integer} index: the index of the node to retrieve in the list
 * @return: the node at the given position in the list, or null
 * if it doesn't exist
 */
SinglyLinkedList.prototype.getNode = function(index) {
  var node = this.head;
  if (this.head === null || index >= this.size) {
    return null;
  }
  for (var i = 0; i < index; i++) {
    node = node.getNext();
  }
  return node;
};

/*
 * Retrieves the value at the respective index in the list.
 * Simply calls getNode to retrieve the node at that position,
 * and returns the value of the node. If position doesn't
 * exist, then it will return null.
 *
 * @param {integer} index: the index of the value to retrieve in the list.
 * @return: the respective value in the list, or null if the position
 * doesn't exist.
 */
SinglyLinkedList.prototype.get = function(index) {
  var node = this.getNode(index);
  if (node === null) {
    return null;
  } else {
    return node.getValue();
  }
};

/*
 * Will return the length of the linked list.
 *
 * @return: the length of the linked list.
 */
SinglyLinkedList.prototype.length = function() {
  return this.size;
};

/*
 * Will add a value to the end of the linked list by
 * creating a node with the given value, and linking it
 * from the last node in the list.
 *
 * @param {*} value: the value to add to the list
 */
SinglyLinkedList.prototype.add = function(value) {
  var node = new Node(value);
  if (this.head === null) {
    this.head = node;
  } else {
    var temp = this.head;
    while (temp.hasNext()) {
      temp = temp.getNext();
    }
    temp.setNext(node);
  }
  this.size++;
};

/*
 * Changes the value in a specific position in the list and
 * returns the old value.
 *
 * @param {integer} index: the index of the value to change in the list.
 * @param {Object} value: the new value to replace the old value
 * @return: the old value in the position.
 */
SinglyLinkedList.prototype.set = function(index, value) {
  var oldValue = this.get(index);
  this.getNode(index).setValue(value);
  return oldValue;
};

/*
 * Will remove a value from the list at the respective position.
 * First, it will check if the value being removed is the first.
 * If it is, then the head will be set to the next value being pointed
 * to from the head.
 * If it is not, it will check if it the last value in the list. If it
 * is, then it will set the second to last node's next value to null.
 * If not, then the previous node's next value will be set to the node
 * after the one being removed.
 *
 * @param {integer} index: the index of the value being removed
 * @return: the old value at that index
 */
SinglyLinkedList.prototype.remove = function(index) {
  var oldValue = this.get(index);
  if (index === 0) { //first node
    this.head = this.head.getNext();
  } else if (index === this.size - 1) { //last node
    this.getNode(index - 1).setNext(null);
  } else {
    this.getNode(index - 1).setNext(this.getNode(index + 1));
  }
  this.size--;
  return oldValue;
};


// SinglyLinkedList Tester

var singlyLinkedList = new SinglyLinkedList();
console.log("SinglyLinkedList: " + singlyLinkedList.toString());

singlyLinkedList.add(0);
singlyLinkedList.add(1);
singlyLinkedList.add(2);
singlyLinkedList.add(3);
singlyLinkedList.add(4);
console.log("SinglyLinkedList: " + singlyLinkedList.toString()); // [0, 1, 2, 3, 4]

console.log("Length of SinglyLinkedList: " + singlyLinkedList.length()); // 5
console.log("First element of SinglyLinkedList: " + singlyLinkedList.get(0)); // 0
console.log("Fourth element of SinglyLinkedList: " + singlyLinkedList.get(3)); // 3

singlyLinkedList.remove(0); 
console.log("SinglyLinkedList: " + singlyLinkedList.toString()); // [1, 2, 3, 4]
singlyLinkedList.remove(2);
console.log("SinglyLinkedList: " + singlyLinkedList.toString()); // [1, 2, 4]

console.log("Length of SinglyLinkedList: " + singlyLinkedList.length()); // 3
