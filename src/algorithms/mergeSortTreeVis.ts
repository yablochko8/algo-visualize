export type Node = {
  unsortedArray: number[];
  sortedArray: number[];
  leftChild?: Node;
  rightChild?: Node;
};

type MergeSortReturn = {};

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

export const mergeSortNodeVis = (
  inputArray: number[],
  node?: Node
): { sortedArray: number[]; graph: Node } => {
  // if passed an empty graph, we must start one
  let thisNode: Node = node
    ? node
    : { unsortedArray: inputArray, sortedArray: inputArray };

  // an array of only one element is already "sorted"
  if (inputArray.length === 1) {
    return { sortedArray: inputArray, graph: thisNode };
  }

  // split it into two items and feed those to merge
  const middle = Math.floor(inputArray.length / 2);
  const left = inputArray.slice(0, middle);
  const right = inputArray.slice(middle, inputArray.length);

  // each subarray is sorted individually
  const recursiveCallLeft = mergeSortNodeVis(left);
  const recursiveCallRight = mergeSortNodeVis(right);

  const sortedLeft = recursiveCallLeft.sortedArray;
  const sortedRight = recursiveCallRight.sortedArray;
  const outputArray = merge(sortedLeft, sortedRight);

  thisNode.leftChild = recursiveCallLeft.graph;
  thisNode.rightChild = recursiveCallRight.graph;
  thisNode.sortedArray = outputArray;

  // if (callback) {
  //   const thisNode: Node = {
  //     unsortedArray: inputArray,
  //     sortedArray: outputArray,
  //   };
  //   const localArray = merge(sortedLeft, sortedRight);
  //   callback(localArray);
  // }
  // sorted subarrays are merged back together
  return { sortedArray: outputArray, graph: thisNode };
};

const chaoticArray = [
  35, 2, -74, 85, 69, -6, -37, 33, 85, 18, -7, 79, 94, 75, -25, 20, -61, 2, 92,
  -16,
];

console.log(mergeSortNodeVis(chaoticArray));
