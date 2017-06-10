/*
 * Implementation of a TreeNode in JavaScript. Holds a value, and
 * points to left and right leaves.
 */
function TreeNode(val, newLeft, newRight) {
  this.value = val;
  this.left = newLeft;
  this.right = newRight;
}

/*
* Returns the value that is stored by the node.
*
* @return the value of the node
*/
TreeNode.prototype.getValue() {
  return this.value;
}

/*
 * Returns a the node pointed to on the left by the current node.
 *
 * @return a pointer to the left node
 */
TreeNode.prototype.getLeft() {
  return this.left;
}

/*
 * Returns a the node pointed to on the right by the current node.
 *
 * @return a pointer to the right node
 */
TreeNode.prototype.getRight() {
  return this.right;
}

/*
 * Sets the node's value, and returns the previous value.
 *
 * @param newValue the new value to be carried by the node
 */
TreeNode.prototype.setValue(newValue) {
  this.value = newValue;
}

/*
 * Sets the node being pointed to on the left.
 *
 * @param newLeft the new node to be pointed to
 */
TreeNode.prototype.setLeft(newLeft) {
  this.left = newLeft;
}

/*
 * Sets the node being pointed to on the right.
 *
 * @param newRight the new node to be pointed to
 */
TreeNode.prototype.setRight(newRight) {
  this.right = newRight;
}
