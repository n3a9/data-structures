/*
 * This class is a Map Entry implementation in Javascript.
 * @constructor
 * @param {Object} k: the key for the map entry
 * @param {Object} v: the value for the map entry
 */
function MapEntry(k, v) {
  this.key = key;
  this.value = v;
}

/*
 * Will return the key of the MapEntry object
 *
 * @return: the key of the MapEntry
 */
MapEntry.prototype.getKey = function() {
  return this.key;
};

/*
 * Will return the value of the MapEntry object
 *
 * @return: the value of the MapEntry
 */
MapEntry.prototype.getValue = function() {
  return this.value;
};

/*
 * Will set the key of the MapEntry object
 */
MapEntry.prototype.setValue = function(newValue) {
  this.value = newValue;
};
