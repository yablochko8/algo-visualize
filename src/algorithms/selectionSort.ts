// Selection Sort algorithm finds the lowest value in an array and moves it to the front of the array.

const selectionSortStep = (inputArray: number[], step: number): number[] => {
  let smallestIndex = step;
  let smallestValue = inputArray[step];
  const outputArray = [...inputArray];

  console.log("smallest value is", step);

  // find the next smallest
  for (let i = step; i < inputArray.length; i++) {
    if (inputArray[i] < smallestValue) {
      smallestIndex = i;
      smallestValue = inputArray[i];
    }
  }

  // move it to the front
  outputArray.splice(smallestIndex, 1);
  outputArray.unshift(smallestValue);
  console.log("step", step, "input", inputArray, "output", outputArray);
  return outputArray;
};

export const selectionSort = (
  inputArray: number[],
  callback?: (interstepArray: number[], callbackRef: number) => void,
  callbackRef?: number
): number[] => {
  let newArray = [...inputArray];

  for (let i = 0; i < inputArray.length; i++) {
    newArray = selectionSortStep(newArray, i);
    if ((callback && callbackRef) || (callback && callbackRef === 0)) {
      callback(newArray, callbackRef);
      console.log(newArray);
    }
  }
  return newArray;
};
