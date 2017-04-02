/**
 * MapEntrys are used in TreeMap to store kesy and corresponding values in a BST.
 */
public class MapEntry<K, V> implements Comparable {

  private K key;
  private V value;

  /**
   * Constructor for MapEntry that sets the given key and the given value.
   *
   * @param key the initial key
   * @param value the initial value
   */
  public MapEntry(K key, V value) {
    this.key = key;
    this.value = value;
  }

  /**
   * Because MapEntry implements Comparable, it must implement compareTo(Object x), which
   * will be other MapEntrys by comparison of their keys. In this method, values are not compared.
   * Will return an integer value:
   *      if < 0: this < x
   *      if = 0: this = x
   *      if > 0: this > x based on keys only.
   *
   * @param x the object of which this MapEntry will be compared (will be casted to MapEntry)
   * @return returns an integer corresponding to the relationship of this MapEntry's key versus the
   *         given MapEntry's key
   */
  public int compareTo(Object x) {
    MapEntry other = (MapEntry)x;
    return ((Comparable)key).compareTo(other.getKey());
  }

  /**
   * Returns this MapEntry's key.
   *
   * @return this MapEntry's key of type K
   */
  public K getKey() {
    return this.key;
  }

  /**
   * Returns this MapEntry's value.
   *
   * @return this MapEntry's value of type V
   */
  public V getValue() {
    return this.value;
  }

  /**
   * Will set a new value for this MapEntry's value.
   *
   * @postcondition this MapEntry's value is now the inputted value newVal
   * @param newValue the new value to be set as the value of this MapEntry
   */
  public void setValue(V newValue) {
    this.value = newValue;
  }

}
