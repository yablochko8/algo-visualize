import { Node } from "@/algorithms/mergeSortTreeVis"
import { ShowArray } from "./ShowArray"




export const ShowGraph = ({ node }: { node: Node }) => {

    const rowClass = "flex flex-row justify-center py-1"
    const classWithinRowForArray = "flex justify-center p-1 rounded border" // This does not need to contain flex-row
    const columnClass = "flex flex-col bg-slate-100 px-0.5"

    if (!node.leftChild && !node.rightChild)
        return (
            <div className={columnClass}>
                <div className={rowClass}>
                    <div className={classWithinRowForArray}>
                        <ShowArray array={node.sortedArray} />
                    </div>

                </div>
            </div>

        )


    else
        return (
            <div className={columnClass}>
                <div className={rowClass}>
                    <div className={classWithinRowForArray}>
                        <ShowArray array={node.unsortedArray} color="red" />
                    </div>
                </div>
                <div className={rowClass}>
                    <div className={columnClass}>
                        {node.leftChild ? <ShowGraph node={node.leftChild} /> : <div />}
                    </div>
                    {node.middleChild ? <div className={columnClass}><ShowGraph node={node.middleChild} /></div> : null}
                    <div className={columnClass}>
                        {node.rightChild ? <ShowGraph node={node.rightChild} /> : <div />}
                    </div>
                </div>
                <div className={rowClass}>
                    <div className={classWithinRowForArray}>

                        <ShowArray array={node.sortedArray} color="green" />
                    </div>
                </div>
            </div>
        )
}