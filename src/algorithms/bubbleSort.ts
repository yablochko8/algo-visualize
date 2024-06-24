const bubbleSort = (arr: number[]) => {
  const newArray = [...arr];
  let swapped = false;

  for (let i = 0; i < arr.length - 1; i++) {
    const element1 = arr[i];
    const element2 = arr[i + 1];

    const shouldSwap = element2 <= element1;
    if (shouldSwap) {
      // we need to indicate thaere was a swap
      newArray[i] = element2;
      newArray[i + 1] = element1;

      swapped = true;
    }
  }

  if (!swapped) {
    console.log("sorted");
  }
};
