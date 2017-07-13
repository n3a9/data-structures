/**
 * An class that outlines functions to manipulate Binary Search Trees.
 * BST is defined to be a tree where all nodes on the left are smaller
 * than the value at the current node, and all nodes on the right are larger. This
 * way, when a BST is traversed in order, the values in the BST are returned in
 * increasing order. All values in the tree will be Comparable, without any duplicates.
 * The following functions are outlined:
 *   findNode: return the node with the inputted value
 *   contains: uses findNode to determine whether the node is in the tree
 *   insert: inserts the value in the correct space in the tree given that it is not a duplicate
 *   delete: deletes a value from the tree
 */
function BinarySearchTreeUtilities() {
}

/**
 * findNode recursively goes through the BST to find the tree node with the given value x.
 * The first thing that it checks is if the current node is null, in which case the given value
 * does not exist in the tree.
 * If it is not null, then it compares the given value to the value of the current node:
 *   if equal: target found, returns node
 *   if greater than 0: searches nodes on the right side
 *   if less than 0: searches nodes on the left side
 *
 * @param {TreeNode} t - the tree that will be searched for the value
 * @param {*} x - the value to be searched for in the tree
 * @return {TreeNode} the node containing x, or null if the value is not in the tree
 */
BinarySearchTreeUtilities.findNode = function(t, x) {
  if (t === null) {
    return null;
  }
  var compare = x.compareTo(t.getValue());
  if (compare === 0) {
    return t;
  } else if (compare > 0) {
    return findNode(t.getRight(), x);
  } else {
    return findNode(t.getLeft(), x);
  }
};

/**
 * Uses the findNode(t, x) method to determine whether x is in the tree by checking
 * if the return value is null.
 *
 * @param {TreeNode} t - the tree that will be searched for the value
 * @param {*} x - the value to be searched for in the tree
 * @return {Boolean} false if findNode returns null, otherwise true
 */
BinarySearchTreeUtilities.contains = function(t, x) {
  return (findNode(t, x) !== null);
};

/**
 * If x is not already present in the tree, then it adds it into the correct place to
 * maintain the properties of a BST. Then returns the tree.
 *
 * @param {TreeNode} t - the tree of which the given value will be added if not present already
 * @param {*} x - the value to be added to the tree
 * @return {TreeNode} the tree with the value x in the correct position if it not present already
 */
BinarySearchTreeUtilities.insert = function(t, x) {
  if (!contains(t, x)) {
    var newNode = new TreeNode(x);
    if (t === null) {
      t = newNode;
    } else {
      var compare = x.compareTo(t.getValue());
      // x is less than the current node value
      if (compare < 0) {
        if (t.getLeft() === null) {
          // Base case: no node to the left of current, so set the newNode as the new left one
          t.setLeft(newNode);
        } else {
          // Recursive case: node to the left of current, so call recursive function on left node
          this.insert(t.getLeft(), x);
        }
        // x is greater than the current node value
      } else if (compare > 0) {
        if (t.getRight() === null) {
          // Base case: no node to the right of current, so set the newNode as the new right one
          t.setRight(newNode);
        } else {
          // Recursive case: node to the right of current, so call recursive function on right node
          this.insert(t.getRight(), x);
        }
      }
    }
  }
  return t;
};

/**
 * A helper method for delete(t, x) that will delete the current node from the given tree
 * and reassembles the tree so that it maintains the properties of a BST and all nodes aside from
 * the root stay intact. There are three cases to consider:
 *   Case 1: t has no successor, so then the tree is just what was to the left
 *   Case 2: t's right node is its successor, in which case the right child's value is swapped
 *           with t's and the right child is cut out of the tree.
 *   Case 3: t's successor isn't the right child, so the successor will be found and its value will
 *           be swapped with t. Then, the successor will be cut of out the tree.
 *
 * @param {TreeNode} t - the node that will be deleted from the tree
 * @return {TreeNode} the resulting tree once the root has been removed, or null if t is null
 */
BinarySearchTreeUtilities.deleteNode = function(t) {
  if (t === null)
    return null;
  var successor = null;
  if (t.getRight() === null) {
    // Case 1: No successor
    successor = null;
    t = t.getLeft();
  } else if (t.getRight().getLeft() === null) {
    // Case 2: Successor is right child
    successor = t.getRight();
    t.setValue(successor.getValue());
    t.setRight(successor.getRight());
  } else {
    // Case 3: Successor is not right child
    successor = t.getRight();
    var previous = t;
    while (successor.getLeft() !== null) {
      previous = successor;
      successor = successor.getLeft();
    }
    t.setValue(successor.getValue());
    previous.setLeft(successor.getRight());
  }
  return t;
};

/**
 * A method to find the node in the tree that contains the value x, and calls deleteNode(t) to
 * delete the node from the tree and maintain the properties of a BST.
 *
 * @param {TreeNode} t - the BST in which the given value will be deleted
 * @param {*} x - the value to be deleted
 * @return {TreeNode}
 *         if the tree was already null: returns null
 *         if the tree did not contain x: returns the previous tree
 *         else returns the BST with the TreeNode at x removed
 */
BinarySearchTreeUtilities.delete = function(t, x) {
  if (t === null) {
    return null;
  }
  var compare = x.compareTo(t.getValue());
  if (compare === 0) {
    // Base case
    return deleteNode(t);
  } else if (compare < 0) {
    // Recursive case
    t.setLeft(delete(t.getLeft(), x));
  } else {
    // Recursive case
    t.setRight(delete(t.getRight(), x));
  }
  return t;
};
