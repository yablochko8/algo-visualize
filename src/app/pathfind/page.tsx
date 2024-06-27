"use client"

import { Node } from "../../algorithms/mergeSortTreeVis"

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


export default function PathFindPage() {


  return (
    <div>
      <h2>This is the Pathfind page</h2>

    </div>
  );
}
