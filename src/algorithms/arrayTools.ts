export const arraysAreEqual = (arr1: number[], arr2: number[]): boolean => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

export const arrayAlreadySorted = (array: number[]) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
};
export const mergeTwoSortedArrays = (
  inputA: number[],
  inputB: number[]
): number[] => {
  const totalCells = inputA.length + inputB.length;
  let indexA = 0;
  let indexB = 0;
  const newArray: number[] = [];

  for (let i = 0; i < totalCells; i++) {
    if (indexA >= inputA.length) {
      newArray.push(inputB[indexB]);
      indexB++;
    } else if (indexB >= inputB.length) {
      newArray.push(inputA[indexA]);
      indexA++;
    } else if (inputA[indexA] <= inputB[indexB]) {
      newArray.push(inputA[indexA]);
      indexA++;
    } else {
      newArray.push(inputB[indexB]);
      indexB++;
    }
  }
  return newArray;
};

// ADD THIS IN
