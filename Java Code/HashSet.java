import java.util.LinkedList;

/**
 * HashSet is a class taht uses an array of LinkedLists to represent a hash table. It stores
 * objects based on their hash code, into the corresponding index of the array. Because multiple
 * objects can be stored in the same position in the array, there are LinkedLists in each position
 * of the array which stores the objects at that index.
 * <p>
 * Two equal objects will have the same hashcode (defined by hashing) and thus be stored in the same
 * bucket of HashSet. Two different objects may also be placed in the same bucket.
 * </p><p>
 * NUM_BUCKETS is the number of buckets in the HashSet, which is the length of the table array.
 * Ideally, it would be a prime number as to help spread out the indices in which objects are
 * correlated and distribute the array as much as possible.
 * buckets is the array representation of the hash table. Each bucket represents a LinkedList
 * which handles collisions when two objects have the same bucket index.
 * </p>
 * All methods run in O(1) time except for toString.
 */
public class HashSet<E> {

  private static final int NUM_BUCKETS = 5;
  private LinkedList<E>[] buckets;
  private int size;

  /**
   * Constructor that instantiates the array "buckets" to hold an empty LinkedList in each bucket,
   * and the size is set to 0.
   */
  public HashSet() {
    buckets = new LinkedList[NUM_BUCKETS];
    size = 0;
    for (int i = 0; i < NUM_BUCKETS; i++) {
      buckets[i] = new LinkedList<E>();
    }
  }

  /**
   * Takes in an object, and returns the index of the bucket in which the object will be placed. The
   * index is the reaminder of the absolute value of the Object's hashcode, divided by the number of
   * buckets defined in the HashSet.
   *
   * @param obj the object whose bucket index will be found
   * @return the index of the object
   */
  private int toBucketIndex(Object obj) {
    return (Math.abs(obj.hashCode())) % NUM_BUCKETS;
  }

  /**
   * Returns the current size of the HashSet.
   *
   * @return the current number of eleemnts in the set
   */
  public int size() {
    return size;
  }

  /**
   * Determines whether or not the given obj is already in the set, by finding the index of the obj,
   * and searching the list in whcih it would be in.
   *
   * @param obj the object which will be checked if it is in the set or not
   * @return true if it contains the object, false otherwise
   */
  public boolean contains(Object obj) {
    LinkedList list = buckets[toBucketIndex(obj)];
    return list.contains(obj);
  }

  /**
   * Checks if the given object exists in the set already. If it doesn't, then it is added into the
   * corresponding bucket, and size increases by one. Otherwise, false is returned.
   *
   * @param obj the element to be added to the set
   * @return true if the object was added, false otherwise
   */
  public boolean add(E obj) {
    if (contains(obj)) {
      return false;
    }
    buckets[toBucketIndex(obj)].add(obj);
    size++;
    return true;
  }

  /**
   * Checks if the given object exists in the set already. If it does, then the LinkedList
   * containing the object will remove the object, and size is decreased by one, and the method
   * returns true. Otherwise, it returns false.
   *
   * @param obj the object to be removed from the set
   * @return true if the object was removed, false otherwise
   */
  public boolean remove(Object obj) {
    if (!contains(obj)) {
      return false;
    }
    buckets[toBucketIndex(obj)].remove(obj);
    size--;
    return true;
  }

  /**
   * A debugging helper method which converts the HashSet into a string representation of all the
   * elements in the array buckets.
   *
   * @return the string represenatation of this HashSet
   */
  public String toString() {
    String s = "";
    for (int i = 0; i < buckets.length; i++) {
      if (buckets[i].size() > 0) {
        s += i + ":" + buckets[i] + " ";
      }
    }
    return s;
  }

}
