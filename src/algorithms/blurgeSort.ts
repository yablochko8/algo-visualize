import { arraysAreEqual } from "./checkArrays";

const blurgeSortStep = (inputArray: number[]): number[] => {
  const subArrays: number[][] = [[]];

  // Split them all out into sub-arrays
  let whichSubArray = 0;
  for (let i = 0; i < inputArray.length; i++) {
    console.log(subArrays, whichSubArray);
    if (i === 0) {
      subArrays[whichSubArray][0] = inputArray[i];
    } else if (inputArray[i] < inputArray[i - 1]) {
      whichSubArray += 1;
      subArrays[whichSubArray] = [];
      subArrays[whichSubArray][0] = inputArray[i];
    } else {
      subArrays[whichSubArray].push(inputArray[i]);
    }
  }

  // and then re-merge them back into a single array
  const newArray: number[] = [];

  let subArrayIndex = 0;
  let cellIndex = 0;
  for (let i = 0; i < inputArray.length; i++) {
    const maybeNumber = subArrays[subArrayIndex][cellIndex];
    if (maybeNumber || maybeNumber === 0) {
      newArray[i] = maybeNumber;
    } else {
      subArrayIndex++;
      cellIndex = 0;
      newArray[i] = subArrays[subArrayIndex][cellIndex];
    }
    cellIndex++;
  }
  return newArray;
};

export const blurgeSort = (
  inputArray: number[],
  callback?: (interstepArray: number[], callbackRef: number) => void,
  callbackRef?: number
): number[] => {
  const interstepArray = blurgeSortStep(inputArray);

  if (!arraysAreEqual(inputArray, interstepArray)) {
    if ((callback && callbackRef) || (callback && callbackRef === 0)) {
      callback(interstepArray, callbackRef);
    }
    const newArray = blurgeSort(interstepArray, callback, callbackRef);
    return newArray;
  }
  return interstepArray;
};
