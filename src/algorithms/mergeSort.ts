// Textbook solution that is cleaner, recursive

// Step 1
// Divide: the list or array recursively into two halves until it can no more be divided.
// Insight - a single item array is sorted [1]

// Step 2
// Sort (Recursion): Each subarray is sorted individually using the merge sort algorithm

// Step 3
// Merge: The sorted subarrays are merged back together in sorted order. Called last but
// write this part first!

const merge = (left: number[], right: number[]): number[] => {
  const newLeft = [...left];
  const newRight = [...right];
  const sorted = [];

  while (newLeft.length && newRight.length) {
    const movingValue =
      newLeft[0] < newRight[0] ? newLeft.shift() : newRight.shift();

    if (movingValue) {
      sorted.push(movingValue);
    } else console.log("Warning: movingValue should never be undefined.");
  }

  // We just spread out the remainder of whatever remains
  // in one of the arrays and add it to the end
  return [...sorted, ...newLeft, ...newRight];
};

export const mergeSort = (
  array: number[],
  callback?: (interstepArray: number[], callbackRef: number) => void,
  callbackRef?: number
): number[] => {
  // an array of only one element is already "sorted"
  if (array.length === 1) {
    return array;
  }

  // split it into two items and feed those to merge
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);

  // each subarray is sorted individually
  const sortedLeft = mergeSort(left, callback, callbackRef);
  const sortedRight = mergeSort(right, callback, callbackRef);

  if ((callback && callbackRef) || (callback && callbackRef === 0)) {
    const localArray = merge(sortedLeft, sortedRight);
    callback(localArray, callbackRef);
  }
  // sorted subarrays are merged back together
  return merge(sortedLeft, sortedRight);
};

const chaoticArray = [
  35, 2, -74, 85, 69, -6, -37, 33, 85, 18, -7, 79, 94, 75, -25, 20, -61, 2, 92,
  -16,
];

console.log(mergeSort(chaoticArray));
