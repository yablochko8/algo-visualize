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

// ADD THIS IN
