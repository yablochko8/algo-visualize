"use client"

import { useEffect, useState } from "react";
import { bubbleSort } from "../algorithms/bubbleSortSimple"
import { bubbleSortStep } from "@/algorithms/bubbleSortWithCallback";

const INITIAL_ARRAY = [999, 2, 4, 6, 3, 88, 1, 94, 26, 15, 89, 618, 7, 5, 13, 9]

export default function Home() {
  const [arrays, setArrays] = useState<number[][]>([INITIAL_ARRAY])

  // const sortedArray = bubbleSort(startingArray)

  useEffect(() => {

    const result = bubbleSortStep(arrays[arrays.length - 1])

    console.log("result is", result)

    if (result.swapped) {
      setTimeout(() => { setArrays([...arrays, result.arr]) }, 2000)
    }

  }, [arrays])

  return (
    <div>
      <h2>Arrays</h2>
      <br />
      <div>Each array should have the same elements, but closer to the correct order:</div>
      {arrays.map((singleArray) => {
        return (
          <>
            <br />
            {singleArray.map((element) => {
              return (
                <span>
                  {element} {" -> "}
                </span>
              )
            })}
            <br />
          </>
        )
      }
      )
      }

    </div>
  );
}
