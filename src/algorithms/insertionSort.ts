import { arrayAlreadySorted } from "./arrayTools";

const shouldMoveLeft = (array: number[], index: number): boolean => {
  if (index === 0) return false;

  if (array[index] >= array[index - 1]) return false;
  else return true;
};

const moveLeft = (array: number[], index: number): number[] => {
  const newArray = [...array];
  newArray[index - 1] = array[index];
  newArray[index] = array[index - 1];
  return newArray;
};

export const insertionSort = (
  inputArray: number[],
  callback?: (interstepArray: number[], callbackRef: number) => void,
  callbackRef?: number
): number[] => {
  if (arrayAlreadySorted(inputArray)) return inputArray;

  let newArray = [...inputArray];

  for (let i = 0; i < inputArray.length; i++) {
    for (let j = i; j > 0; j--) {
      if (shouldMoveLeft(newArray, j)) {
        newArray = moveLeft(newArray, j);
      }
    }
    if ((callback && callbackRef) || (callback && callbackRef === 0)) {
      callback(newArray, callbackRef);
    }
  }
  return newArray;
};
