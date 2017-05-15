# Data Structures - Nodes

## What is a Node?

Imagine a Node as a packet of information. It only carries the value of data given to it, as well as a reference to another node. This functionality alone (with minor extensions) is enough to build larger data structures such as linked lists and trees. A node is the building block for larger data structures, which are widely implemented in the industry.

## Node Manipulation

As stated above, a node only has two attributes – the data value and the node it points to. When a node is initialized, it must carry a data value, but not the node pointer. Thus we must have a `getValue()` function to check the node value. We don’t need this for the data value, since we know that a node cannot be created without the data. Otherwise, it’s the basic functions of retrieving and setting the values for the node. Although we could directly access the variables of the node class, this is noted as bad practice and thus we will create accessor methods in order to manipulate the data of the node.

## Node Implementation

To begin, lets define the node constructor. It only has the data, and the node that it points to. Remember that a node must be initialized with the data it will carry.

### Java
```java
public class Node {

  private Object value;
  private Node next;

  public Node(Object val) {
    this.value = val;
    next = null;
  }
```

### Javascript
```javascript
function Node(value) {
	this.value = value;
	this.next = null;
}
```

Now, to retrieve the value, we will create a `getValue()` method that returns the method of the variable.

### Java
```java
public Object getValue() {
  return this.value;
}
```

### JavaScript
```javascript
Node.prototype.getValue(){
	return this.value;
}
```

Next, we have to manipulate the node. We will check if there is a node pointed to with `hasNext()`. If there is a node stored, then `getNext()` will return the node. Otherwise, it will return null.

### Java
```java
public boolean hasNext() {
  return (next != null);
}

public Node getNext() {
  return this.next;
}
```

### Javascript
```javascript
Node.prototype.hasNext() {
  return (!this.next==null);
}

Node.prototype.getNext() {
  var n = null;
  if (this.hasNext()) {
    n = this.next;
  }
  return n;
}  
```

To change the stored value, we will create a `setValue()` method to change the value of the data. This, however, will also return the old value of the node. We are returning the old values for better usability.

### Java
```java
public Object setValue(Object newValue) {
  Object oldValue = this.value;
  this.value = newValue;
  return oldValue;
}
```

### Javascript
```javascript
Node.prototype.setValue(newValue){
	var oldValue = this.value;
	this.value = newValue;
	return oldValue;
}
```

To change the node being stored, we used `setNext()`, which will return the old node being stored.

### Java
```java
public Node setNext(Node newNext) {
  Node oldNext = this.next;
  this.next = newNext;
  return oldNext;
}
```

### Javascript
```javascript
Node.prototype.setNext(newNext) {
  var oldNext = this.next;
  this.next = newNext();
  return oldNext;
}
```

For the full implementation, check out the Java or Javascript code folder.
