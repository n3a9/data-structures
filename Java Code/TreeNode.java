/**
 * Implementation of a TreeNode in Java. Holds a value, and
 * points to left and right leaves.
 */
public class TreeNode {

  private Object value;
  private TreeNode left;
  private TreeNode right;

  /**
   * Constructor for TreeNode, which has one parameter: the initial value.
   * Takes in a value to be stored, and sets left and right pointers to null
   * using the second constructor.s
   *
   * @param val the value to be stored
   */
  public TreeNode(Object val) {
    this(val, null, null);
  }

  /**
   * Constructor for TreeNode, which has three parameters: the initial value, the
   * left node, and the right node. Takes in a value to be stored, and sets left
   * and right pointers to null using the second constructor.s
   *
   * @param val the value to be stored
   * @param newLeft the value to be stored
   * @param newRight the value to be stored
   */
  public TreeNode(Object val, TreeNode newLeft, TreeNode newRight) {
    this.value = val;
    this.left = newLeft;
    this.right = newRight;
  }

  /**
   * Returns the value that is stored by the node.
   *
   * @return the value of the node
   */
  public Object getValue() {
    return this.value;
  }

  /**
   * Returns a the node pointed to on the left by the current node.
   *
   * @return a pointer to the left node
   */
  public TreeNode getLeft() {
    return this.left;
  }

  /**
   * Returns a the node pointed to on the right by the current node.
   *
   * @return a pointer to the right node
   */
  public TreeNode getRight() {
    return this.right;
  }

  /**
   * Sets the node's value, and returns the previous value.
   *
   * @param newValue the new value to be carried by the node
   */
  public void setValue(Object newValue) {
    this.value = newValue;
  }

  /**
   * Sets the node being pointed to on the left.
   *
   * @param newLeft the new node to be pointed to
   */
  public void setLeft(TreeNode newLeft) {
    this.left = newLeft;
  }

  /**
   * Sets the node being pointed to on the right.
   *
   * @param newRight the new node to be pointed to
   */
  public void setRight(TreeNode newRight) {
    this.right = newRight;
  }

}
