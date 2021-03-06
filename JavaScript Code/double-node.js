/**
 * Complete implementation of a double node in Javascript. Carries
 * a value element, and points to two other nodes.
 *
 * @constructor
 * @param {*} value - the value element to be stored
 */
function DoubleNode(value) {
  this.value = value;
  this.next = null;
  this.previous = null;
}

/**
 * Will return the value of the node.
 *
 * @return {*} the value the node carries
 */
DoubleNode.prototype.getValue = function() {
  return this.value;
};

/**
 * Will change the value of the node and return the
 * old value.
 *
 * @param {*} newValue - the new value to be carried by the node
 * @return {*} the old value of the node
 */
DoubleNode.prototype.setValue = function(newValue) {
  var oldValue = this.value;
  this.value = newValue;
  return oldValue;
};

/**
 * Will return if the node points to a next node.
 *
 * @return {Boolean} true if it points to a next node, false otherwise
 */
DoubleNode.prototype.hasNext = function() {
  return (this.next !== null);
};

/**
 * Will return if the node points to a previous node.
 *
 * @return {Boolean} true if it points to a previous node, otherwise false
 */
DoubleNode.prototype.hasPrevious = function() {
  return (this.previous !== null);
};

/**
 * Will return the node being pointed to if its not empty.
 *
 * @return {DoubleNode} the node that this node points to if not empty,
 * otherwise null
 */
DoubleNode.prototype.getNext = function() {
  var n = null;
  if (this.hasNext()) {
    n = this.next;
  }
  return n;
};

/**
 * Will return the previous node being pointed to if its not empty.
 *
 * @return {DoubleNode} the previous node that this node points to if not empty,
 * otherwise null
 */
DoubleNode.prototype.getPrevious = function() {
  var n = null;
  if (this.hasPrevious()) {
    n = this.previous;
  }
  return n;
};

/**
 * Will update the node being pointed to and return the old one.
 *
 * @param {DoubleNode} node - the new node to point to
 * @return {DoubleNode} the old node that was previously pointed to
 */
DoubleNode.prototype.setNext = function(newNext) {
  var oldNext = this.next;
  this.next = newNext;
  return oldNext;
};

/**
 * Will update the previous node being pointed to and return
 * the old one.
 *
 * @param {DoubleNode} node - the new previous node to point to
 * @return {DoubleNode} the old node that was previously pointed to as previous
 */
DoubleNode.prototype.setPrevious = function(newPrevious) {
  var oldPrevious = this.previous;
  this.previous = newPrevious;
  return oldPrevious;
};
