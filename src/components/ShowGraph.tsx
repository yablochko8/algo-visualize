import { Node } from "@/algorithms/mergeSortTreeVis"



const childClassName = "flex flex-col bg-blue-400 rounded m-2 justify-center"

export const ShowGraph = ({ node }: { node: Node }) => {
    return (
        <div>
            <div className="flex flex-col bg-blue-200 rounded m-2 justify-center">
                <div className="flex flex-row justify-center"> {node.unsortedArray} </div>
                <br />
                <div className="flex flex-row justify-center">
                    <div className={childClassName}>
                        {node.leftChild ? <ShowGraph node={node.leftChild} /> : <div />}
                    </div>
                    <div className={childClassName}>
                        {node.rightChild ? <ShowGraph node={node.rightChild} /> : <div />}
                    </div>
                </div>
                <div className="flex flex-row justify-center">
                    {node.sortedArray}

                </div>
            </div>





        </div>
    )
}