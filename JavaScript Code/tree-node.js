/**
 * Implementation of a TreeNode in JavaScript. Holds a value, and
 * points to left and right leaves.
 */
function TreeNode(val, newLeft, newRight) {
  this.value = val;
  this.left = newLeft;
  this.right = newRight;
}

/**
 * Returns the value that is stored by the node.
 *
 * @return {*} the value of the node
 */
TreeNode.prototype.getValue = function() {
  return this.value;
};

/**
 * Returns a the node pointed to on the left by the current node.
 *
 * @return {TreeNode} the left node
 */
TreeNode.prototype.getLeft = function() {
  return this.left;
};

/**
 * Returns a the node pointed to on the right by the current node.
 *
 * @return {TreeNode} the right node
 */
TreeNode.prototype.getRight = function() {
  return this.right;
};

/**
 * Sets the node's value, and returns the previous value.
 *
 * @param {*} newValue - the new value to be carried by the node
 */
TreeNode.prototype.setValue = function(newValue) {
  this.value = newValue;
};

/**
 * Sets the node being pointed to on the left.
 *
 * @param {TreeNode} newLeft - the new node to be pointed to
 */
TreeNode.prototype.setLeft = function(newLeft) {
  this.left = newLeft;
};

/**
 * Sets the node being pointed to on the right.
 *
 * @param {TreeNode} newRight - the new node to be pointed to
 */
TreeNode.prototype.setRight = function(newRight) {
  this.right = newRight;
};
