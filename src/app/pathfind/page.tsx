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

const addNewCell = (hazardLevel: number, ...knownNeighours: number[]) => {

  // Start with 8 x Field, 2 x Forest
  const selectionArray = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2]

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
 * @param {number} width - The width of the grid.
 * @param {number} height - The height of the grid.
 * @param {number} hazardLevel - Number between 0 and 10 to determine how hard the terrain should be to pass.
 * @returns {BoardGrid} - BoardGrid
 */
const createNewGrid = (width: number, height: number, hazardLevel: number): BoardGrid => {

  for (let i = 0; i < width; i++);

  return [[]]
}

export default function PathFindPage() {


  return (
    <div>
      <h2>This is the Pathfind page</h2>

    </div>
  );
}
