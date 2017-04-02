/**
 * Implementation of a Tree Map in Java. Has a root node, and a size
 * tracker. Uses MapEntry objects in a BST organized by keys to store
 * values. There cannot be duplicate keys in the tree.
 */
public class TreeMap<K,V> {

  private TreeNode root;
  private int size;

  /**
   * Constructor for TreeMap, that initializes the root to null and
   * the size to 0.
   */
  public TreeMap() {
    root = null;
    size = 0;
  }

  /**
   * Will return the number of nodes in the tree.
   *
   * @return the size of the treemap
   */
  public int size() {
    return this.size;
  }

}
