
type ShowArrayProps = {
    array: number[],
    color?: string,
    prevArray?: number[]
}


const normalizedElement = (element: number, array: number[]) => {
    const realNum = element / Math.max(...array)
    const minOutput = 1
    const maxOutput = 9

    return Math.floor(realNum * (maxOutput - minOutput)) + minOutput
}


export const ShowArray = (props: ShowArrayProps) => {
    const thisArray = props.array
    const prevArray = props.prevArray
    const cellColor = props.color ? props.color : "slate"

    return (
        <>
            {thisArray.map((element, elementIndex) => {
                const normElement = normalizedElement(element, thisArray)

                const elementHasChanged = (prevArray && thisArray[elementIndex] != prevArray[elementIndex])

                return (
                    <>
                        <div className="flex flex-col">

                            <div className={`flex flex-row justify-center m-1 p-1 bg-${cellColor}-${normElement}00 rounded`}>
                                {element}
                            </div>
                            <div className={`flex flex-row h-1 ${elementHasChanged ? "bg-gray-400" : ""}`}>
                            </div>
                            <div className="flex flex-row h-5">

                            </div>
                        </div>

                    </>
                )
            })}
        </>

    )
}
