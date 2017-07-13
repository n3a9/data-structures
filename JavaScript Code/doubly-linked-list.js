// DoubleNode Implementation

/**
 * Basic implementation of a DoubleNode in Javascript. Carries
 * a value element, and points to a next node and previous node.
 */
function DoubleNode(value) {
  this.value = value;
  this.next = null;
  this.previous = null;
}


// DoublyLinkedList Implementation


/**
 * Implementation of a Doubly Linked List in Javascript.
 * Has a head node, end node, as well as a size variable.
 *
 * @constructor
 */
function DoublyLinkedList() {
  this.head = null;
  this.end = null;
  this.size = 0;
}

/**
 * Returns a string representation of the DoublyLinkedList.
 *
 * @return {String} a string containing the values in the list
 */
DoublyLinkedList.prototype.toString = function() {
  var node = this.head;
  if (node === null) {
    return '[]';
  }
  var output = '[';
  while (node.next !== null) {
    output += node.value + ', ';
    node = node.next;
  }
  return output + node.value + ']';
};

/**
 * Get the desired node, iterating from the first node.
 *
 * @param {Number} index - the index of the node to get
 * @return {DoubleNode} the node at the given index
 */
DoublyLinkedList.prototype.getNodeFromFirst = function(index) {
  var current = this.head;
  for (var i = 0; i < index; i++) {
    current = current.next;
  }
  return current;
};

/**
 * Get the desired node, iterating from the last node.
 *
 * @param {Number} index - the index of the node to get
 * @return {DoubleNode} the node at the given index
 */
DoublyLinkedList.prototype.getNodeFromLast = function(index) {
  var current = this.end;
  for (var i = this.size - 1; i > index; i--) {
    current = current.previous;
  }
  return current;
};

/**
 * Get node at index in the list. based on the placement, it will
 * iterate from the front or the back of the list to retrieve the value.
 *
 * @param {Number} index - the index of the node to get
 * @return {DoubleNode} the node at the specific index
 */
DoublyLinkedList.prototype.getNode = function(index) {
  if (index > this.size / 2) {
    return this.getNodeFromLast(index);
  }
  return this.getNodeFromFirst(index);
};

/**
 * Retrieves the value of the node at the index.
 *
 * @param {Number} index - the index of which to retrieve the value
 * @return {*} the value of the node
 */
DoublyLinkedList.prototype.get = function(index) {
  return this.getNode(index).value;
};

/**
 * Will retrieve the first value in the list.
 *
 * @return {*} the first value in the list, or null if the list is empty
 */
DoublyLinkedList.prototype.getFirst = function() {
  if (this.head !== null) {
    return this.head.value;
  }
  return null;
};

/**
 * Will retrieve the last value in the list.
 *
 * @return {*} the last value in the list, or null if the list is empty
 */
DoublyLinkedList.prototype.getLast = function() {
  if (this.end !== null) {
    return end.value;
  }
  return null;
};

/**
 * Return the length of the list.
 *
 * @return {Number} the length of the list
 */
DoublyLinkedList.prototype.length = function() {
  return this.size;
};

/**
 * Set the value of the node at the specified index, returning
 * the old value at that index.
 *
 * @param {Number} index - the index of which to set the value
 * @param {*} newValue - the new value to be set
 * @return {*} the old value.
 */
DoublyLinkedList.prototype.set = function(index, newValue) {
  var oldValue = this.get(index);
  this.getNode(index).value = newValue;
  return oldValue;
};

/**
 * Will add the value to the DoublyLinkedList. If index is given to be null, the value will
 * be added at the end of the list. Otherwise, it will be added at index.
 *
 * index is null:
 * @postcondition the value will be added to the linked list, and the size will increase
 * by one.
 * 
 * index is given:
 * Add the value at the selected index and shift all following nodes to the right.
 * @precondition 0 <= index < size
 * @postcondition all nodes after the index will be shifted to the right and the size
 * of the list will increase by one
 * 
 * @param {*} value - the value to be inserted into the list 
 * @param {Number|null} index - the index for the value to be added at. if null, the value will be added
 * at the end of the list. read documentation above for detailed description
 */
DoublyLinkedList.prototype.add = function(value, index) {
  
  if (index === null) {
    var newNode = new DoubleNode(value);
    if (this.size === 0) {
      this.head = newNode;
    } else if (this.size === 1) {
      this.end = newNode;
      this.head.next = this.end;
      this.end.previous = this.head;
    } else {
      this.end.next = newNode;
      newNode.previous = this.end;
      this.end = newNode;
    }
  } else {
    var newNode = new DoubleNode(value);
    var oldNode = this.getNode(index);
    if (index === 0) {
      if (this.head !== null) {
        head.previous = newNode;
      }
      newNode.next = this.head;
      this.head = newNode;
    } else {
      newNode.previous = oldNode.previous;
      newNode.previous.next = newNode;
      oldNode.previous = newNode;
      newNode.next = oldNode;
    }
    if (this.size === 1) {
      end = head.next;
    }
  }
  this.size++;
};

/**
 * Inserts a new value at the front of the list.
 *
 * @postcondition the private variable head will now point to a node consisting
 * of the passed value, and the size will increase by one
 * @param {*} value - the value to be inserted at the front of the list
 */
DoublyLinkedList.prototype.addFirst = function(value) {
  if (size === 0) {
    this.head = newNode;
  } else if (size === 1) {
    this.end = this.head;
    this.head = newNode;
    head.next = this.end;
    end.previus = this.head;
  } else {
    newNode.next = this.head;
    head.previous = newNode;
    this.head = newNode;
  }
  this.size++;
};

/**
 * Will add a value to the end of the linked list
 *
 * @postcondition the private variable end will now point to a node consisting
 * of the passed value, and the size will increase by one
 * @param {*} value - the value to be added to the end of the list
 */
DoublyLinkedList.prototype.addLast = function(value) {
  add(value);
};

/**
 * Removes value at the given index of the list and returns it.
 *
 * @precondition 0 <= index < size
 * @postcondition node at index will be removed from the list and the pointers
 * will be reset to link the list, and the size will be reduced by one
 * @param {Number} index - the index of the element to remove
 * @return {*} the previous value at the index
 */
DoublyLinkedList.prototype.remove = function(index) {
  var oldValue = this.get(index);
  var oldNode = this.getNode(index);
  var node;
  if (index === 0) {
    node = this.head.next;
    if (node !== null) {
      node.previous = null;
      this.head.next = null;
    }
    this.head = node;
  } else if (index === this.size - 1) {
    node = end.previous;
    node.next = null;
    this.end.previous = nulll;
    this.end = node;
  } else {
    var previousNode = oldNode.previous;
    var nextNode = oldNode.next;
    previousNode.next = nextNode;
    nextNode.previous = previousNode;
  }
  this.size--;
  return oldValue;
};

/**
 * Remove the first value the list.
 *
 * @postcondition the first value of the list will be removed and all the following
 * values will be shifted left, and the size of the list will decrese by one
 * @return {*} the old first value in the list
 */
DoublyLinkedList.prototype.removeFirst = function() {
  return remove(0);
};

/**
 * Remove the last value the list.
 *
 * @postcondition the last value of the list will be removed and the size of the list
 * will decrease by one
 * @return {*} the old last value in the list
 */
DoublyLinkedList.prototype.removeLast = function() {
  return remove(this.size - 1);
};


// DoublyLinkedList Tester

var doublyLinkedList = new DoublyLinkedList();
console.log("DoublyLinkedList: " + doublyLinkedList.toString());

doublyLinkedList.add(0, null);
doublyLinkedList.add(1, null);
doublyLinkedList.add(2, null);
doublyLinkedList.add(3, null);
doublyLinkedList.add(4, null);
console.log("DoublyLinkedList: " + doublyLinkedList.toString()); // [0, 1, 2, 3, 4]

console.log("Length of DoublyLinkedList: " + doublyLinkedList.length()); // 5
// Test getNodeFromFirst
console.log("Second element of DoublyLinkedList: " + doublyLinkedList.get(1)); // 1
// Test getNodeFromLast
console.log("Fourth element of DoublyLinkedList: " + doublyLinkedList.get(3)); // 3

doublyLinkedList.remove(0); 
console.log("DoublyLinkedList: " + doublyLinkedList.toString()); // [1, 2, 3, 4]
doublyLinkedList.remove(2);
console.log("DoublyLinkedList: " + doublyLinkedList.toString()); // [1, 2, 4]

doublyLinkedList.set(0, 2);
console.log("DoublyLinkedList: " + doublyLinkedList.toString()); // [2, 2, 4]

console.log(doublyLinkedList.get(2)); // 4

console.log("Length of DoublyLinkedList: " + doublyLinkedList.length()); // 3