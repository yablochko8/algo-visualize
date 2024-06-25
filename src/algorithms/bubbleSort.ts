// Bubble sort, sometimes referred to as sinking sort, is a simple
// sorting algorithm that repeatedly steps through the input list element
// by element, comparing the current element with the one after it,
// swapping their values if needed. These passes through the list are
// repeated until no swaps have to be performed during a pass, meaning
// that the list has become fully sorted. The algorithm, which is a
// comparison sort, is named for the way the larger elements "bubble" up
// to the top of the list.

import { arraysAreEqual } from "./checkArrays";

const shouldSwapFn = (elem1: number, elem2: number): boolean => {
  return elem2 < elem1;
};

const bubbleSortStep = (arr: number[]): number[] => {
  const newArray = [...arr];
  let hasChanged = false;

  for (let i = 0; i < arr.length - 1; i++) {
    const element1 = newArray[i];
    const element2 = newArray[i + 1];

    const shouldSwap = shouldSwapFn(element1, element2);
    if (shouldSwap) {
      // we need to indicate there was a swap
      newArray[i] = element2;
      newArray[i + 1] = element1;

      hasChanged = true;
    }
  }
  return newArray;
};

export const bubbleSort = (
  inputArray: number[],
  callback?: (interstepArray: number[], callbackRef: number) => void,
  callbackRef?: number
): number[] => {
  const interstepArray = bubbleSortStep(inputArray);

  if (!arraysAreEqual(interstepArray, inputArray)) {
    if ((callback && callbackRef) || (callback && callbackRef === 0)) {
      callback(interstepArray, callbackRef);
    }
    const newArray = bubbleSort(interstepArray, callback, callbackRef);
    return newArray;
  }
  return interstepArray;
};
