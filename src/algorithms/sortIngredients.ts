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
