// // iterate through an array
// // compare each element to the next element
// // if the next elemetn is smaller, then we're going to swap the elements
// // when we're done with the array, we check if the array is sorted
// // if it's not sorted, we do it again
// //
// //

// export const bubbleSort = (arr: number[]): number[] => {
//   const newArray = [...arr];
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
