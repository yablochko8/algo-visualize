
// all classes of BG color I expect to call from Tailwind:
// bg-green-50 bg-green-100 bg-green-200 bg-green-300 bg-green-400 bg-green-500 
// bg-green-600 bg-green-700 bg-green-800 bg-green-900
// 
// bg-red-50 bg-red-100 bg-red-200 bg-red-300 bg-red-400 bg-red-500 
// bg-red-600 bg-red-700 bg-red-800 bg-red-900
// 
// bg-yellow-50 bg-yellow-100 bg-yellow-200 bg-yellow-300 bg-yellow-400 bg-yellow-500 
// bg-yellow-600 bg-yellow-700 bg-yellow-800 bg-yellow-900
// 
// bg-blue-50 bg-blue-100 bg-blue-200 bg-blue-300 bg-blue-400 bg-blue-500 
// bg-blue-600 bg-blue-700 bg-blue-800 bg-blue-900
// 
// bg-slate-50 bg-slate-100 bg-slate-200 bg-slate-300 bg-slate-400 bg-slate-500 
// bg-slate-600 bg-slate-700 bg-slate-800 bg-slate-900
// 
// text-green-700
// text-red-700
// text-yellow-700
// text-blue-700
// text-slate-700
// 
// Context: In Tailwind CSS, the JIT (Just-In-Time) mode needs to know all the classes
// that will be used in the project at build time. When you dynamically generate class
// names in JavaScript, Tailwind might not be able to see those classes and therefore
// doesn't generate the necessary CSS.


type ShowArrayProps = {
    array: number[],
    color?: string,
    prevArray?: number[]
}


const normalizedElement = (element: number, arrayMin: number = 0, arrayMax: number = 100) => {
    const realNum = (element - arrayMin) / arrayMax
    const minOutput = 1
    const maxOutput = 8

    return Math.floor(realNum * (maxOutput - minOutput)) + minOutput
}


export const ShowArray = (props: ShowArrayProps) => {
    const thisArray = props.array
    const prevArray = props.prevArray
    const cellColor = props.color ? props.color : "yellow"
    const arrayMax = Math.max(...props.array)
    const arrayMin = Math.min(...props.array)


    return (
        <>
            {thisArray.map((element, elementIndex) => {
                const normElement = normalizedElement(element)

                const elementHasChanged = (prevArray && thisArray[elementIndex] != prevArray[elementIndex])

                const prevArrayPassed = !!prevArray

                const textColor = (normElement > 4) ? "text-gray-100" : "text-black"

                return (
                    <>
                        <div className="flex flex-col">

                            <div className={`flex flex-row justify-center mx-1 p-1 bg-${cellColor}-${normElement}00 rounded ${textColor}`}>
                                {element}
                            </div>
                            <div>
                                {prevArrayPassed ? (
                                    <>
                                        <div className={`flex flex-row h-1 ${elementHasChanged ? "bg-gray-400" : ""}`}>
                                        </div>
                                        <div className="flex flex-row h-3">
                                        </div>
                                    </>
                                ) : null}


                            </div>
                        </div>

                    </>
                )
            })}
        </>

    )
}
