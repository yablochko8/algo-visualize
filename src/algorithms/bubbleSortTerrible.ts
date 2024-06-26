// const shouldSwapFn = (elem1: number, elem2: number): boolean => {
//   return elem2 < elem1;
// };

// const bubbleSortTerribleStep = (
//   arr: number[]
// ): { array: number[]; hasChanged: boolean } => {
//   const newArray = [...arr];
//   let hasChanged = false;

//   for (let i = 0; i < arr.length - 2; i = i + 2) {
//     const element1 = newArray[i];
//     const element2 = newArray[i + 1];

//     const shouldSwap = shouldSwapFn(element1, element2);
//     if (shouldSwap) {
//       // we need to indicate there was a swap
//       newArray[i] = element2;
//       newArray[i + 1] = element1;

//       hasChanged = true;
//     }
//   }

//   for (let i = 1; i < arr.length - 2; i = i + 2) {
//     const element1 = newArray[i];
//     const element2 = newArray[i + 1];

//     const shouldSwap = shouldSwapFn(element1, element2);
//     if (shouldSwap) {
//       // we need to indicate there was a swap
//       newArray[i] = element2;
//       newArray[i + 1] = element1;

//       hasChanged = true;
//     }
//   }

//   for (let i = 0; i <= arr.length - 3; i = i + 3) {
//     const element1 = newArray[i];
//     const element2 = newArray[i + 1];

//     const shouldSwap = shouldSwapFn(element1, element2);
//     if (shouldSwap) {
//       // we need to indicate there was a swap
//       newArray[i] = element2;
//       newArray[i + 1] = element1;

//       hasChanged = true;
//     }
//   }

//   return { array: newArray, hasChanged };
// };

// // export const bubbleSortWrapped = (
// //   arr: number[],
// //   callback: (returnArray: number[]) => void
// // ): number[] => {
// //   return arr;
// // };
