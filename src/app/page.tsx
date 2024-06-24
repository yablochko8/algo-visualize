// iterate through an array
// compare each element to the next element
// if the next elemetn is smaller, then we're going to swap the elements
// when we're done with the array, we check if the array is sorted
// if it's not sorted, we do it again
// 
// 

import { bubbleSort } from "../algorithms/bubbleSort"

export default function Home() {
  const startingArray = [2, 4, 6, 3, 88, 1, 94, 26]

  const sortedArray = bubbleSort(startingArray)
  return (
    <div>
      <h1> Hello world</h1>
      <h2>Unsorted Array</h2>
      {startingArray.map((num) => {
        return <span key={num}> {num} <br /> </span>
      })}
      <br />

      <h2>Sorted Array</h2>
      {sortedArray.map((num) => {
        return <span key={num}>{num} <br /></span>
      })}

    </div>
  );
}
