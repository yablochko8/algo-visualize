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

// not sure if we're using these elsewhere - purely for seeking matches of numbers

const linearSearch = (inputArray: number[], targetNum: number) => {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === targetNum) return i;
  }
  return -1;
};

console.log(linearSearch([2, 3, 55, 2, 42, 99], 42));

const binarySearch = (
  sortedArray: number[],
  targetNum: number,
  leftLimit?: number,
  rightLimit?: number
): number => {
  const startingPoint = leftLimit ?? 0;
  const endPoint = rightLimit ?? sortedArray.length;

  if (startingPoint > endPoint) return -1;
  // returns index number
  const pivotIndex = Math.floor((startingPoint + endPoint + 2) / 2) - 1;
  const pivotValue = sortedArray[pivotIndex];

  if (pivotValue === targetNum) return pivotIndex;

  if (sortedArray.length === 1) return -1;

  if (pivotValue > targetNum)
    return binarySearch(sortedArray, targetNum, startingPoint, pivotIndex - 1);

  if (pivotValue < targetNum)
    return binarySearch(sortedArray, targetNum, pivotIndex + 1, endPoint);

  console.log("you should never end up here...");
  return -1;
};

console.log(
  binarySearch(
    [1, 3, 4, 6, 7, 8, 19, 23, 34, 43, 47, 59, 69, 71, 88, 93, 101],
    93
  )
);

console.log(
  binarySearch(
    [1, 3, 4, 6, 7, 8, 19, 23, 34, 43, 47, 59, 69, 71, 88, 93, 101],
    1
  )
);

console.log(
  binarySearch(
    [1, 3, 4, 6, 7, 8, 19, 23, 34, 43, 47, 59, 69, 71, 88, 93, 101],
    9
  )
);
