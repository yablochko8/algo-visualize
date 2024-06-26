// Quicksort is an efficient, general-purpose sorting algorithm. Quicksort
// was developed by British computer scientist Tony Hoare in 1959[1] and
// published in 1961.[2] It is still a commonly used algorithm for sorting.
// Overall, it is slightly faster than merge sort and heapsort for randomized
// data, particularly on larger distributions.[3]

import { arrayAlreadySorted } from "./arrayTools";

// Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot'
// element from the array and partitioning the other elements into two
// sub-arrays, according to whether they are less than or greater than the
// pivot. For this reason, it is sometimes called partition-exchange sort.[4]
// The sub-arrays are then sorted recursively. This can be done in-place,
// requiring small additional amounts of memory to perform the sorting.

// This is a recursive sort, so has to be able to take in smaller ranges
export const quickSort = (
  inputArray: number[],
  callback?: (interstepArray: number[], callbackRef: number) => void,
  callbackRef?: number
): number[] => {
  if (inputArray.length < 2) return inputArray;

  if (arrayAlreadySorted(inputArray)) return inputArray;

  // Pick a pivot number in the index
  // This can be random
  // For simplicity I'll go with a mid-ish point number

  const pivotIndex = Math.floor(inputArray.length / 2);
  const pivotValue = inputArray[pivotIndex];

  // Make two partition arrays that will house all the other numbers

  const smallerValues: number[] = [];
  const largerValues: number[] = [];

  for (let i = 0; i < inputArray.length; i++) {
    const testValue = inputArray[i];
    if (i === pivotIndex) {
      // pass
    } else if (testValue < pivotValue) {
      smallerValues.push(testValue);
    } else largerValues.push(testValue);
  }

  // Tested: Seems to be ok with passing null as the callback
  const sortedSmallerArray =
    smallerValues.length > 0
      ? quickSort(smallerValues, callback, callbackRef)
      : [];
  const sortedLargerArray =
    largerValues.length > 0
      ? quickSort(largerValues, callback, callbackRef)
      : [];
  sortedSmallerArray.push(pivotValue);
  const newArray = sortedSmallerArray.concat(sortedLargerArray);

  if ((callback && callbackRef) || (callback && callbackRef === 0)) {
    callback(newArray, callbackRef);
  }
  return newArray;
};
