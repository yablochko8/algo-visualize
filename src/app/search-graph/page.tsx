"use client"

import { Node } from "../../algorithms/mergeSort"
const NodeComponent = ({ node }: { node: Node }) => {
  return (
    <div>
      <div> {node.unsortedArray} </div>
      <div> {node.sortedArray} </div>
      {node.leftChild ? <NodeComponent node={node.leftChild} /> : <div />}
      {node.rightChild ? <NodeComponent node={node.rightChild} /> : <div />}


    </div>
  )
}

export default function Home() {

  const chaoticArray = [35, 2, -74, 85, 69, -6, -37, 33, 85, 18, -7, 79, 94, 75, -25, 20, -61, 2, 92, -16]

  const sortedArray = [1, 3, 4, 6, 7, 8, 19, 23, 34, 43, 47, 59, 69, 71, 88, 93, 101]


  // const algos = [quickSort, insertionSort, bubbleSort, selectionSort, mergeSortVariant]

  // const [algoResults, setAlgoResults] = useState<number[][][]>(initiateAlgoResults(algos.length))
  // const [algoStats, setAlgoStats] = useState<algoStats[]>(initiateAlgoStats(algos.length))

  // const [globalStep, setGlobalStep] = useState<number>(0)

  // const captureInterstepSnapsot = (interstepArray: number[], algoIndex: number) => {
  //   // Create container for new results, and add latest result in
  //   const newResults = [...algoResults]
  //   newResults[algoIndex].unshift(interstepArray)

  //   // Update global result set each time a single algo has new results
  //   const newAlgoStats = algoStats
  //   newAlgoStats[algoIndex].stepsTaken += 1
  //   setAlgoStats(newAlgoStats)
  //   setAlgoResults(newResults)
  // }

  // useEffect(() => {
  //   for (let i = 0; i < algos.length; i++) {
  //     const algoFunction = algos[i]
  //     algoFunction(algoResults[i][0], captureInterstepSnapsot, i)
  //   }
  // }, [])

  // console.log(
  //   binarySearch(
  //     [1, 3, 4, 6, 7, 8, 19, 23, 34, 43, 47, 59, 69, 71, 88, 93, 101],
  //     93
  //   )
  // );

  // console.log(
  //   binarySearch(
  //     [1, 3, 4, 6, 7, 8, 19, 23, 34, 43, 47, 59, 69, 71, 88, 93, 101],
  //     1
  //   )
  // );

  // console.log(
  //   binarySearch(
  //     [1, 3, 4, 6, 7, 8, 19, 23, 34, 43, 47, 59, 69, 71, 88, 93, 101],
  //     9
  //   )
  // );





  return (
    <div>

      <h2>This is the Search page</h2>

      <h3>It should display:
        Depth-First Search
        Breadth-First Search
      </h3>




    </div>
  );
}
