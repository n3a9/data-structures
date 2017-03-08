import java.util.Iterator;

/**
 * Implementation of an ArrayList in Java. Contains an array, as well
 * as a size tracker.
 */
public class ArrayList<E>
{
    private int size;
    private Object[] values;  //(Java doesn't let us make an array of type E)

    /**
     * Constructor for the ArrayList. Initializes array, and sets size of list
     * to 0.
     */
    public ArrayList()
    {
        this.size=0;
        values = new Object[1];
    }

    /**
     * Returns a string representation of the DoublyLinkedList.
     *
     * @return: a string containing the values in the list.
     */
    public String toString()
    {
        if (size == 0)
            return "[]";

        String s = "[";
        for (int i = 0; i < size - 1; i++)
            s += values[i] + ", ";
        return s + values[size - 1] + "]";
    }

    /**
     * Will return the size of the list.
     *
     * @return: an integer, representing the current number of values the list holds.
     */
    public int size()
    {
        return size;
    }

    /**
     * Will return the capacity of the list.
     *
     * @return: an integer, representing the current number of values the list
     * can hold.
     */
    public int getCapacity()
    {
        return values.length;
    }

    /**
     * Helper function to double the capacity of the ArrayList. Creates
     * a new array double the current capacity, and copies all values
     * to it. Will then set the array to the new array.
     *
     * @postcondition: will replace the array with one twice as large, with
     * all elements in same position.
     */
    private void doubleCapacity()
    {
        Object[] newValues = new Object[size*2];
        for(int i = 0; i< size; i++)
        {
            newValues[i] = values[i];
        }
        values = newValues;
    }

    /**
     * Will return the value stored at the specified index of the list. Will
     * return null if no value is stored.
     *
     * @param index: the index of which the desired value is stored
     * @return: the value stored at the specified index in the list
     */
    public E get(int index)
    {
        return (E)values[index];
    }

    /**
     * Will set the value at the specified index to a provided value, and return the original
     * value stored in the list.
     *
     * @postcondition: replaces the element at position index with val
     * @param index: the index in which val will be put into the list
     * @param val: the value to replace the object at the specified index in the list
     * @return: the original value stored in the list
     */
    public E set(int index, E val)
    {
        E original = this.get(index);
        values[index] = val;
        return original;
    }

    /**
     * Will add a given value to the end of the list. Will check if the list is at
     * capacity, and if so, will double the capacity of the list.
     *
     * @postcondition: appends val to the end of the list
     * @param val: the value to be added to the end of the list
     * @return: true when added
     */
    public boolean add(E val)
    {
        if(size == getCapacity())
        {
            doubleCapacity();
        }
        values[size] = val;
        size++;
        return true;
    }

    /**
     * Will add a value to the specific index of the list, and shift all exiting values
     * at that index and higher to the right by one (increase their index by 1). Will check
     * if the list is at capacity, and if so, will double the capacity of the list.
     *
     * @precondition: 0 <= index <= size
     * @postcondition: the provided value is now at the specified index in the list, and all
     * following values in the list are shifted by one.
     * @param index: the specified index in which the element should be added to the list
     * @param val: the object to be added to the list.
     */
    public void add(int index, E val)
    {
        if(size == getCapacity())
        {
            doubleCapacity();
        }
        for (int i = size; i>index; i--)
        {
            values[i] = values[i-1];
        }
        values[index] = val;
        size++;
    }

    /**
     * Will remove the value from the desired index, and shift all following values
     * down in index (subtract 1).
     *
     * @postcondition: the desired element will be removed and all following elements
     * will be shifted
     * @param index: the  index of the desired value to be removed
     * @return: the value removed from the list
     */
    public E remove(int index)
    {
        E val = this.get(index);
        for (int i = index; i< this.size - 1; i++)
        {
            this.values[i] = (E)this.values[i+1];
        }
        this.size--;
        return val;
    }

    /**
     * Returns a new ArrayListIterator for the current list.
     *
     * @return: An instance of a ArrayListIterator to traverse the list
     */
    public Iterator<E> iterator()
    {
        return new ArrayListIterator();
    }

    /**
     * A private class to iterate through the ArrayList and access the values stored
     * in the list. Only able to traverse forwards (not backwards).
     */
    private class ArrayListIterator implements Iterator<E>
    {
        private int nextIndex;

        /**
         * Will create an instance of the iterator for the ArrayList. Sets nextIndex to
         * the first index in the array.
         */
        public ArrayListIterator()
        {
            nextIndex = 0;
        }

        /**
         * Will return whether or not the iterator has a next value to point to (there are more
         * values to traverse in the list).
         *
         * @return: true if there are more values, and false if there are no more.
         */
        public boolean hasNext()
        {
            if(nextIndex< ArrayList.this.size()-1)
            {
                return true;
            }
            return false;
        }

        /**
         * Will return the next value pointed to in the list. First confirms that there is another value
         * in the list by only continuing if hasNext() is true.
         *
         * @return: the next value of the list or null if hasNext() returns false.
         */
        public E next()
        {
            nextIndex++;
            if (hasNext()) {
                return (E) (values[nextIndex - 1]);
            }
            return null;
        }

        /**
         * Will remove the current value pointed to by the iterator, and updates the pointers.
         *
         * @postcondition: the value will be removed from the list and the size will decrease by one.
         */
        public void remove()
        {
            ArrayList.this.remove(nextIndex);
        }
    }
}
