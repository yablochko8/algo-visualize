"use client"

type CellValue = 1 | 2 | 3 | -1

/**
 * Two-dimensional array populated by integers
 * Each integer represents a type of terrain:
 * 1 = field
 * 2 = forest
 * 3 = hills
 * -1 = mountain (impassable)
 */
type BoardGrid = CellValue[][]

// let's treat this being
// 1 = field
// 2 = forest
// 3 = hills
// -1 = impassable

const randomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const addNewCell = (hazardLevel: number, ...knownNeighours: CellValue[]): CellValue => {

  // Start with 8 x Field, 2 x Forest
  const selectionArray: CellValue[] = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, ...knownNeighours]

  // Add more Forest for every level above 0
  for (let i = 0; i < hazardLevel; i++) {
    selectionArray.push(2)
  }

  // Add Hills for every level above 3
  for (let i = 3; i < hazardLevel; i++) {
    selectionArray.push(3)
  }

  // Add Impassable tiles for every level above 6
  for (let i = 6; i < hazardLevel; i++) {
    selectionArray.push(-1)
  }

  const index = randomInteger(0, selectionArray.length - 1)

  return selectionArray[index]
}


/**
 * Creates a new grid with specified dimensions and obstacles.
 *
 * @param {number} rows - Height of the grid in rows.
 * @param {number} cols - Width of the grid in columns.
 * @param {number} hazardLevel - Number between 0 and 10 to determine how hard the terrain should be to pass.
 * @returns {BoardGrid} - BoardGrid
 */
const createNewGrid = (rows: number, cols: number, hazardLevel: number): BoardGrid => {

  const newGrid: BoardGrid = []

  for (let i = 0; i < rows; i++) {
    newGrid[i] = []
    for (let j = 0; j < cols; j++) {
      const newCell = addNewCell(hazardLevel)
      newGrid[i][j] = newCell
    }
  }

  return newGrid
}

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

  const testGrid = createNewGrid(15, 18, 10)


  return (
    <div>
      <h2>This is the Pathfind page</h2>

      <DisplayGrid grid={testGrid} />

    </div>
  );
}
