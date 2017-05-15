/**
 * Rectangle uses length and width instance variables to store integer measurements for a specific
 * Rectangle. It is used to test the HashSet class, which properly stores and organizes Rectangles
 * in an array representation of a hash table.
 */
public class Rectangle {

  private int length;
  private int width;

  /**
   * Constructor class for Rectangle, which takes in values for the length and width of this
   * rectangle.
   *
   * @param len the length of the Rectangle
   * @param wid the width of the Rectangle
   */
  public Rectangle(int len, int wid) {
    this.length = len;
    this.width = wid;
  }

  /**
   * Returns the integer length of this Rectangle.
   *
   * @return the length of this Rectangle
   */
  public int getLength() {
    return this.length;
  }

  /**
   * Returns the integer width of this Rectangle.
   *
   * @return the width of this Rectangle
   */
  public int getWidth() {
    return this.width;
  }

  /**
   * Converts the Rectangle to a sprint representation in the form: length x width.
   * Ex: 4 x 5
   *
   * @return a string representation of the Rectangle
   */
  public String toString() {
    return this.length + "x" + this.width;
  }

  /**
   * This method represents the Rectangle using an integer. Because the integer reprsenting this
   * size rectangle must be unique, we multiply length by 10 then add the width. That way, a 5x4
   * and 4x5 rectangle will not have the hashCode, but equivalent rectangles will have the same
   * hashcode. However, it is still possible for two different rectangles to have the same hashcode.
   *
   * @return the integer hashCode of the Rectangle
   */
  public int hashCode() {
    return (this.length * 10) + this.width;
  }

  /**
   * Determines whether this Rectangle is equivalent to the given rectangle "rect." They are
   * considered to be equivilant if they have the same length and width.
   *
   * @param rect the given Rectangle to determine if it is equivalent to this
   * @return true if they have the same dimensions, false otherwise
   */
  public boolean equals(Rectangle rect) {
    return this.length == rect.length && this.width == rect.width;
  }

}
