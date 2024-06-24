import { arraysAreEqual } from "./compareArrays";

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

// export const bubbleSortWrapped = (
//   arr: number[],
//   callback: (returnArray: number[]) => void
// ): number[] => {
//   return arr;
// };
