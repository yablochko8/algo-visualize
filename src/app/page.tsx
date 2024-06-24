"use client"

import { useEffect, useState } from "react";
import { bubbleSortStep } from "@/algorithms/bubbleSortWithCallback";

const INITIAL_ARRAY = [999, 2, 4, 6, 3, 88, 1, 94, 26, 15, 89, 618, 7, 5, 13, 9]

const altSortAlgo1 = bubbleSortStep

const altSortAlgo2 = bubbleSortStep

type algoStats = {
  stepsTaken: number;
  timeTaken: number;
}

const createBlankAlgoStats = (): algoStats => {
  return {
    stepsTaken: 0,
    timeTaken: 0
  };
}


export default function Home() {
  const [arrays, setArrays] = useState<number[][][]>([[INITIAL_ARRAY], [INITIAL_ARRAY], [INITIAL_ARRAY]])

  const [algoStats, setAlgoStats] = useState<algoStats[]>([createBlankAlgoStats(), createBlankAlgoStats(), createBlankAlgoStats()])

  const algos = [bubbleSortStep, altSortAlgo1, altSortAlgo2]

  // arrays[0] - bubbleSortStep
  // arrays[1] - altSortAlgo1
  // arrays[2] - altSortAlgo2


  // const sortedArray = bubbleSort(startingArray)

  useEffect(() => {

    const result = bubbleSortStep(arrays[0][0])

    const newArrays = [...arrays]

    newArrays[0].unshift(result.array)

    if (result.hasChanged) {
      setTimeout(() => { setArrays(newArrays) }, 2000)
    }

  }, [arrays])

  return (
    <div>
      <h2>Arrays</h2>
      <br />
      <div>Each array should have the same elements, but closer to the correct order:</div>
      {arrays[0].map((singleArray) => {
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
