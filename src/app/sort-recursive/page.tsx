"use client"

import React, { useEffect, useState } from "react";
import { quickSort } from "@/algorithms/quickSort";
import { mergeSort } from "@/algorithms/mergeSort";
import { ShowGraph } from "../../components/ShowGraph"
import { mergeSortNodeVis } from "@/algorithms/mergeSortTreeVis"

// all classes of BG color I expect to call from Tailwind:
// bg-green-50 bg-green-100 bg-green-200 bg-green-300 bg-green-400 bg-green-500 
// bg-green-600 bg-green-700 bg-green-800 bg-green-900
// bg-red-50 bg-red-100 bg-red-200 bg-red-300 bg-red-400 bg-red-500 
// bg-red-600 bg-red-700 bg-red-800 bg-red-900
// bg-yellow-50 bg-yellow-100 bg-yellow-200 bg-yellow-300 bg-yellow-400 bg-yellow-500 
// bg-yellow-600 bg-yellow-700 bg-yellow-800 bg-yellow-900
// bg-blue-50 bg-blue-100 bg-blue-200 bg-blue-300 bg-blue-400 bg-blue-500 
// bg-blue-600 bg-blue-700 bg-blue-800 bg-blue-900
// text-green-700
// text-red-700
// text-yellow-700
// text-blue-700
// 
// Context: In Tailwind CSS, the JIT (Just-In-Time) mode needs to know all the classes
// that will be used in the project at build time. When you dynamically generate class
// names in JavaScript, Tailwind might not be able to see those classes and therefore
// doesn't generate the necessary CSS.

const algoColors = ["green", "red", "yellow", "blue"]

const INITIAL_ARRAY = [11, 99, 2, 4, 6, 3, 88, 1, 94, 26, 15, 89, 61, 7, 5, 13]

const initiateAlgoResults = (howManyAlgos: number): number[][][] => {
  const result: number[][][] = [];
  for (let i = 0; i < howManyAlgos; i++) {
    result.push([[...INITIAL_ARRAY]]);
  }
  return result;
}

const createBlankAlgoStats = (): algoStats => {
  return {
    stepsTaken: 0,
    timeTaken: 0
  };
}
const initiateAlgoStats = (howManyAlgos: number): algoStats[] => {
  const result: algoStats[] = [];
  for (let i = 0; i < howManyAlgos; i++) {
    result[i] = createBlankAlgoStats()
  }
  return result;
}

type algoStats = {
  stepsTaken: number;
  timeTaken: number;
}

const normalizedElement = (element: number, array: number[]) => {
  const realNum = element / Math.max(...array)
  const minOutput = 1
  const maxOutput = 9

  return Math.floor(realNum * (maxOutput - minOutput)) + minOutput







}



export default function Home() {
  const algos = [mergeSortNodeVis, mergeSortNodeVis]

  const [algoResults, setAlgoResults] = useState<number[][][]>(initiateAlgoResults(algos.length))
  const [algoStats, setAlgoStats] = useState<algoStats[]>(initiateAlgoStats(algos.length))

  const [globalStep, setGlobalStep] = useState<number>(0)

  const captureInterstepSnapsot = (interstepArray: number[], algoIndex: number) => {
    // Create container for new results, and add latest result in
    const newResults = [...algoResults]
    newResults[algoIndex].unshift(interstepArray)

    // Update global result set each time a single algo has new results
    const newAlgoStats = algoStats
    newAlgoStats[algoIndex].stepsTaken += 1
    setAlgoStats(newAlgoStats)
    setAlgoResults(newResults)
  }

  useEffect(() => {
    for (let i = 0; i < algos.length; i++) {
      const algoFunction = algos[i]
      const algoResults = algoFunction(INITIAL_ARRAY)
    }
  }, [])

  const testValues = mergeSortNodeVis(INITIAL_ARRAY)
  console.log(testValues.sortedArray)

  return (
    <div>
      <h2>On this page: Red = Unsorted, Green = Sorted</h2>

      <ShowGraph node={testValues.graph} />




    </div>
  );
}
