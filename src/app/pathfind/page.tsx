"use client"

import { BoardGrid, CellValue, createNewGrid } from "@/algorithms/djikstra"



const getCellColor = (cellValue: CellValue) => {
  if (cellValue === 1) return "bg-green-400 hover:bg-green-600"
  if (cellValue === 2) return "bg-green-700 hover:bg-green-900"
  if (cellValue === 3) return "bg-amber-700 hover:bg-amber-900"
  else return "bg-slate-700 hover:bg-slate-900"
}

const rowClass = "flex flex-row"
const colClass = "flex flex-col"
const cellClass = "flex flex-col rounded p-6"

const DisplayGrid = ({ grid }: { grid: BoardGrid }) => {
  return (
    <div className={colClass}>
      {grid.map((rowArray, rowNum) => {
        return (
          <div className={rowClass}>
            {rowArray.map((cellValue, index) => {
              const cellColor = getCellColor(cellValue)
              return (
                <div className={cellClass + " " + cellColor}>
                </div>
              )
            })}
            <br />
          </div>
        )

      }

      )}
    </div>
  )
}

export default function PathFindPage() {

  const testGrid = createNewGrid(10, 12, 7)


  return (
    <div>
      <h2>This is the Pathfind page</h2>

      <DisplayGrid grid={testGrid} />

    </div>
  );
}
