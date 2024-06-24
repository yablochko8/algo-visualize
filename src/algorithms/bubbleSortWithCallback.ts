const shouldSwapFn = (elem1: number, elem2: number): boolean => {
  return elem2 < elem1;
};

export const bubbleSortStep = (
  arr: number[]
): { array: number[]; hasChanged: boolean } => {
  const newArray = [...arr];
  let hasChanged = false;

  for (let i = 0; i < arr.length - 1; i++) {
    const element1 = newArray[i];
    const element2 = newArray[i + 1];

    const shouldSwap = shouldSwapFn(element1, element2);
    if (shouldSwap) {
      // we need to indicate thaere was a swap
      newArray[i] = element2;
      newArray[i + 1] = element1;

      hasChanged = true;
    }
  }
  return { array: newArray, hasChanged };
};

// export const bubbleSortWrapped = (
//   arr: number[],
//   callback: (returnArray: number[]) => void
// ): number[] => {
//   return arr;
// };
