export type Node = {
  unsortedArray: number[];
  sortedArray: number[];
  leftChild?: Node;
  middleChild?: Node;
  rightChild?: Node;
};

export type RecursiveSortResults = { sortedArray: number[]; graph: Node };

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

export const mergeSort = (inputArray: number[]): RecursiveSortResults => {
  // we create a Node object to capture all the activity of this iteration
  let thisNode: Node = { unsortedArray: inputArray, sortedArray: inputArray };

  // an array of only one element is already "sorted"
  if (inputArray.length === 1) {
    return { sortedArray: inputArray, graph: thisNode };
  }

  // split it into two items and feed those to merge
  const middle = Math.floor(inputArray.length / 2);
  const left = inputArray.slice(0, middle);
  const right = inputArray.slice(middle, inputArray.length);

  // each subarray is sorted individually
  const recursiveCallLeft = mergeSort(left);
  const recursiveCallRight = mergeSort(right);

  const sortedLeft = recursiveCallLeft.sortedArray;
  const sortedRight = recursiveCallRight.sortedArray;
  const outputArray = merge(sortedLeft, sortedRight);

  thisNode.leftChild = recursiveCallLeft.graph;
  thisNode.rightChild = recursiveCallRight.graph;
  thisNode.sortedArray = outputArray;

  return { sortedArray: outputArray, graph: thisNode };
};

const chaoticArray = [
  35, 2, -74, 85, 69, -6, -37, 33, 85, 18, -7, 79, 94, 75, -25, 20, -61, 2, 92,
  -16,
];

console.log(mergeSort(chaoticArray));
