// Selection Sort algorithm finds the lowest value in an array and moves
// it to the front of the array.

// It has an O(n^2) time complexity, which makes it inefficient on large lists,
// and generally performs worse than the similar insertion sort. Selection
// sort is noted for its simplicity and has performance advantages over more
// complicated algorithms in certain situations, particularly where auxiliary
// memory is limited.

// The algorithm divides the input list into two parts: a sorted sublist of
// items which is built up from left to right at the front (left) of the list
// and a sublist of the remaining unsorted items that occupy the rest of the
// list. Initially, the sorted sublist is empty and the unsorted sublist is
// the entire input list. The algorithm proceeds by finding the smallest
// (or largest, depending on sorting order) element in the unsorted sublist,
// exchanging (swapping) it with the leftmost unsorted element (putting it
// in sorted order), and moving the sublist boundaries one element to the right.

import { arrayAlreadySorted } from "./arrayTools";

const selectionSortStep = (inputArray: number[], step: number): number[] => {
  let smallestIndex = step;
  let smallestValue = inputArray[step];
  const outputArray = [...inputArray];

  // find the next smallest value
  for (let i = step; i < inputArray.length; i++) {
    if (inputArray[i] < smallestValue) {
      smallestIndex = i;
      smallestValue = inputArray[i];
    }
  }

  // move it to the front
  outputArray.splice(smallestIndex, 1);
  outputArray.splice(step, 0, smallestValue);
  return outputArray;
};

export const selectionSort = (
  inputArray: number[],
  callback?: (interstepArray: number[], callbackRef: number) => void,
  callbackRef?: number
): number[] => {
  if (arrayAlreadySorted(inputArray)) return inputArray;

  // create a container for the answer
  let newArray = [...inputArray];

  // populate each cell one by one
  for (let i = 0; i < inputArray.length; i++) {
    newArray = selectionSortStep(newArray, i);
    if ((callback && callbackRef) || (callback && callbackRef === 0)) {
      callback(newArray, callbackRef);
    }
  }
  return newArray;
};
