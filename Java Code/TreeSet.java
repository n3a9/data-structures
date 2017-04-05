/**
 * An implementation of a TreeSet in Java.
 */
public class TreeSet<E> {

  private TreeNode root;
  private int size;

  /**
   * Constructor for TreeSet. Sets root to null and size to 0.
   */
  public TreeSet() {
    this.root = null;
    this.size = 0;
  }

  /**
   * Will return a string representation of the Tree Set. Calls the helper
   * method toString(TreeNode t) to convert the tree set into a string.
   *
   * @return a string version of the tree set
   */
  public String toString() {
    return toString(root);
  }

  /**
   * Will convert all values from v=given node to strings in an inOrder walk
   * order. When performed on a BST, it will return the values in order.
   *
   * @param t the treenode from where to start the operation
   * @return the string version of the tree set
   */
  private String toString(TreeNode t) {
    if (t == null) {
      return " ";
    }
    return toString(t.getLeft()) + t.getValue() + "," + toString(t.getRight());
  }

  /**
   * Returns the size of the TreeSet.
   *
   * @return an int which is the size of the TreeSet
   */
  public int size() {
    return size;
  }

  /**
   * Checks if the given object is held in the set. Calls the BSTUtilities contains() method.
   *
   * @param obj the object to be checked if it exists in the TreeSet, and will be cast to a Comparable
   *            object
   * @return true if it is in the set, or false otherwise
   */
  public boolean contains(Object obj) {
    return BinarySearchTreeUtilities.contains(this.root, (Comparable) obj);
  }

  /**
   * Adds the given object into the TreeSet if it does not already exist in the set.
   *
   * @param obj the object that will be added to the set after being casted into a Comparable
   * @return true if the item was added, false otherwise
   */
  public boolean add(E obj) {
    if (contains(obj)) {
      return false;
    } else {
      this.root = BinarySearchTreeUtilities.insert(root, (Comparable) obj);
      this.size++;
      return true;
    }
  }

  /**
   * Removes the given object from the set.
   *
   * @param obj the given object to be removed from the set, which will be casted to a Comparable
   * @return true if the object was removed, false otherwise
   */
  public boolean remove(Object obj) {
    if (!contains(obj)) {
      return false;
    } else {
      this.root = BinarySearchTreeUtilities.delete(root, (Comparable) obj);
      this.size--;
      return true;
    }
  }

}
