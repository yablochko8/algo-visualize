// Selection Sort algorithm finds the lowest value in an array and moves it to the front of the array.

const selectionSortStep = (inputArray: number[], step: number): number[] => {
  let smallestIndex = step;
  let smallestValue = inputArray[step];
  const outputArray = [...inputArray];

  // find the next smallest
  for (let i = step; i < inputArray.length; i++) {
    if (inputArray[i] < smallestValue) {
      smallestIndex = i;
      smallestValue = inputArray[i];
    }

    // move it to the front
    outputArray.splice(smallestIndex, 1);
    outputArray.unshift(smallestValue);
  }
  return outputArray;
};

export const selectionSort = (
  inputArray: number[]
): { array: number[]; hasChanged: boolean } => {
  let newArray = [...inputArray];

  for (let i = 0; i < inputArray.length; i++) {
    newArray = selectionSortStep(newArray, i);
  }
  const hasChanged = inputArray === newArray;
  return { array: newArray, hasChanged };
};

// = (

// )

//   let swapped = false;

//   for (let i = 0; i < arr.length - 1; i++) {
//     const element1 = arr[i];
//     const element2 = arr[i + 1];

//     const shouldSwap = element2 <= element1;
//     if (shouldSwap) {
//       // we need to indicate thaere was a swap
//       newArray[i] = element2;
//       newArray[i + 1] = element1;

//       swapped = true;
//     }
//   }

//   if (swapped) {
//     const newNewArray = bubbleSort(newArray);
//     return newNewArray;
//   }

//   return newArray;
// };
