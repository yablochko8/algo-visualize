"use client"

import { useEffect, useState } from "react";
import { bubbleSortStep } from "@/algorithms/bubbleSortWithCallback";



// all classes of BG color I expect to call from Tailwind:
// bg-green-50 bg-green-100 bg-green-200 bg-green-300 bg-green-400 bg-green-500 
// bg-green-600 bg-green-700 bg-green-800 bg-green-900
// 
// Context: In Tailwind CSS, the JIT (Just-In-Time) mode needs to know all the classes
// that will be used in the project at build time. When you dynamically generate class
// names in JavaScript, Tailwind might not be able to see those classes and therefore
// doesn't generate the necessary CSS.


const INITIAL_ARRAY = [99, 2, 4, 6, 3, 88, 1, 94, 26, 15, 89, 61, 7, 5, 13, 9]

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


const normalizedElement = (element: number, array: number[]) => {
  const realNum = element / Math.max(...array)
  const minOutput = 1
  const maxOutput = 9

  return Math.floor(realNum * (maxOutput - minOutput)) + minOutput
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
            <div className="flex flex-row">

              {singleArray.map((element) => {
                const normElement = normalizedElement(element, singleArray)
                return (
                  <span className={`flex flex-col justify-center m-1 p-1 bg-green-${normElement}00 rounded`}>
                    {element}
                  </span>
                )
              })}
            </div>
            <br />
          </>
        )
      }
      )
      }

    </div>
  );
}
