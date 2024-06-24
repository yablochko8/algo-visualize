import { arraysAreEqual } from "./compareArrays";
import { mergeTwoSortedArrays } from "./sortIngredients";

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
      newArray = mergeTwoSortedArrays(newArray, subArrays[i]);
      const interstepArray = newArray.concat(subArrays.slice(i + 1).flat());
      console.log("remainingArrays:", interstepArray);
      if ((callback && callbackRef) || (callback && callbackRef === 0)) {
        callback(interstepArray, callbackRef);
      }
    }
  }
  return newArray;
};
