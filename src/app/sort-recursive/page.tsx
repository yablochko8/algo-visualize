"use client"

import React, { useEffect, useState } from "react";
import { ShowGraph } from "../../components/ShowGraph"
import { RecursiveSortResults, mergeSort } from "@/algorithms/mergeSort"
import { quickSort } from "@/algorithms/quickSort";

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

const INITIAL_ARRAY = [11, 99, 2, 3, 0, 6, 3, 88, 1, 94, 26, 15, 89, 61, 7, -5, 13, 108, 5, 77, 9]

export default function Home() {
  const algos = [mergeSort, quickSort]

  const [algoResults, setAlgoResults] = useState<RecursiveSortResults[]>([])

  useEffect(() => {
    const newAlgoResults = algos.map(algoFunction => {
      return algoFunction(INITIAL_ARRAY)
    })
    setAlgoResults(newAlgoResults)
  }, [])

  return (
    <div>
      <h2>On this page: Red = Unsorted, Green = Sorted</h2>

      {algoResults.map((results, algoNum) => {
        console.log("algoResults called with", results)
        return (
          <>
            <div className={`flex flex-row justify-center text-black-700 m-5 mt-20`}>
              Algo {algoNum + 1}: {algos[algoNum].name}
            </div>
            <ShowGraph node={results.graph} />
          </>
        )
      })}



    </div>
  );
}
