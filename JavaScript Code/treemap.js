/*
* This class is a TreeMap implementation in Javascript.
* @constructor
*/
function TreeMap() {
  this.root = null;
  this.size = 0;
}

/*
* Will return the size of the TreeMap object
*
* @return the size of the TreeMap
*/
TreeMap.prototype.size() {
  return this.size;
}

/*
 * Returns if the tree map has the given key. It uses BinarySearchTreeUtilities's
 * contain method and the comparison of the key values (because the values are not
 * needed to find if the key is present).
 * Will create a temporary MapEntry with the given key and search for it in the tree.
 *
 * @param key the key that this tree will be searched for
 * @return true if the key is present, otherwise false
 */
TreeMap.prototype.containsKey(key) {
  var temp = new MapEntry(key, null);
  return BinarySearchTreeUtilities.contains(root, temp);
}

/*
 * Puts the given key and value in the tree map. If the key does not exist, then a new
 * MapEntry is created and added. Otherwise, the value is replaced and the old value will
 * be returned
 *
 * @param key the key to be added
 * @param value the value with the corresponding key
 * @return the old value if the key existed beforehand, or null otherwise
 */
TreeMap.prototype.put(key, value) {
  var foundEntry = findEntry(key);
  var oldValue;
  if (foundEntry == null) {
    oldValue = null;
    var entry = new MapEntry(key, value);
    this.root = BinarySearchTreeUtilities.insert(root, entry);
    this.size++;
  } else {
    oldValue = foundEntry.getValue();
    foundEntry.setValue(value);
  }
  return oldValue;
}

/*
 * Finds the MapEntry in the tree map with the given key and returns the corresponding value,
 * or null if the key isn't present.
 *
 * @param key the key to be found in the tree
 * @return the corresponding value to the key, or null if the key doesn't exist in the tree
 */
TreeMap.prototype.get(key) {
  var entry = findEntry(key);
  if (entry == null) {
    return null;
  }
  return entry.getValue();
}

/*
 * Removes the MapEntry associated with the key and returns the value that was associated.
 *
 * @param key the key to be removed
 * @return the value previously associated with the key, or null if there was no value
 */
TreeMap.prototype.remove(key) {
  var foundEntry = findEntry(key);
  var oldValue;
  if (foundEntry == null) {
    return null;
  } else {
    oldValue = foundEntry.getValue();
    this.root = BinarySearchTreeUtilities.delete(root, foundEntry);
    this.size--;
  }
  return oldValue;
}

/*
 * Will find the MapEntry in the tree map that contains the given key and returns the MapEntry.
 *
 * @param key the given key whose MapEntry will be found
 * @return a pointer to the MapEntry in the tree that has the inputted key, or null if the key
 *         doesn't exist in the tree
 */
TreeMap.prototype.findEntry(key) {
  var temp = new MapEntry(key, null);
  var node = BinarySearchTreeUtilities.findNode(root, temp);
  if (node != null) {
    return node.getValue();
  }
  return null;
}
