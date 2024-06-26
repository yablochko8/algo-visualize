// Quicksort is an efficient, general-purpose sorting algorithm. Quicksort
// was developed by British computer scientist Tony Hoare in 1959[1] and
// published in 1961.[2] It is still a commonly used algorithm for sorting.
// Overall, it is slightly faster than merge sort and heapsort for randomized
// data, particularly on larger distributions.[3]

// Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot'
// element from the array and partitioning the other elements into two
// sub-arrays, according to whether they are less than or greater than the
// pivot. For this reason, it is sometimes called partition-exchange sort.[4]
// The sub-arrays are then sorted recursively. This can be done in-place,
// requiring small additional amounts of memory to perform the sorting.

// This is a recursive sort, so has to be able to take in smaller ranges

import { Node, RecursiveSortResults } from "./mergeSort";

export const quickSort = (inputArray: number[]): RecursiveSortResults => {
  // we create a Node object to capture all the activity of this iteration
  let thisNode: Node = { unsortedArray: inputArray, sortedArray: inputArray };

  // an array of only one element is already "sorted"
  if (inputArray.length < 2)
    return { sortedArray: inputArray, graph: thisNode };

  // Pick a pivot number in the index
  // This can be random
  // For simplicity I'll go with a mid-ish point number

  const pivotIndex = Math.floor(inputArray.length / 2);
  const pivotValue = inputArray[pivotIndex];

  thisNode.middleChild = {
    unsortedArray: [pivotValue],
    sortedArray: [pivotValue],
  };
  // Make two partition arrays that will house all the other numbers

  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < inputArray.length; i++) {
    const testValue = inputArray[i];
    if (i === pivotIndex) {
      // pass
    } else if (testValue < pivotValue) {
      left.push(testValue);
    } else right.push(testValue);
  }

  const recursiveCallLeft = left.length > 0 ? quickSort(left) : null;
  const recursiveCallRight = right.length > 0 ? quickSort(right) : null;

  const sortedLeft = recursiveCallLeft ? recursiveCallLeft.sortedArray : [];
  const sortedRight = recursiveCallRight ? recursiveCallRight.sortedArray : [];
  const outputArray = [...sortedLeft, pivotValue, ...sortedRight];

  thisNode.leftChild = recursiveCallLeft?.graph;
  thisNode.rightChild = recursiveCallRight?.graph;
  thisNode.sortedArray = outputArray;

  return { sortedArray: outputArray, graph: thisNode };
};
