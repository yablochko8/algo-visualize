import { arraysAreEqual } from "./compareArrays";

const mergeSortedArrays = (inputA: number[], inputB: number[]): number[] => {
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

export const mergeSortVariant = (
  inputArray: number[],
  callback?: (interstepArray: number[], callbackRef: number) => void,
  callbackRef?: number
): number[] => {
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
  let newArray: number[] = [];

  for (let i = 0; i < subArrays.length; i++) {
    if (i === 0) {
      newArray = subArrays[0];
    } else {
      newArray = mergeSortedArrays(newArray, subArrays[i]);
      const interstepArray = newArray.concat(subArrays.slice(i + 1).flat());
      console.log("remainingArrays:", interstepArray);
      if ((callback && callbackRef) || (callback && callbackRef === 0)) {
        callback(interstepArray, callbackRef);
      }
    }
  }

  return newArray;
};

// export const blurgeSort = (
//   inputArray: number[],
//   callback?: (interstepArray: number[], callbackRef: number) => void,
//   callbackRef?: number
// ): number[] => {
//   const interstepArray = blurgeSortStep(inputArray);

//   if (!arraysAreEqual(inputArray, interstepArray)) {
//     if ((callback && callbackRef) || (callback && callbackRef === 0)) {
//       callback(interstepArray, callbackRef);
//     }
//     const newArray = blurgeSort(interstepArray, callback, callbackRef);
//     return newArray;
//   }
//   return interstepArray;
// };
