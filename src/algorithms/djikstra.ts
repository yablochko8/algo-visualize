const field = 1;
const forest = 2;
const hill = 3;
const mountain = -1;

export type CellValue =
  | typeof field
  | typeof forest
  | typeof hill
  | typeof mountain;

/**
 * Two-dimensional array populated by integers
 * Each integer represents a type of terrain:
 * 1 = field
 * 2 = forest
 * 3 = hills
 * -1 = mountain (impassable)
 */
export type BoardGrid = CellValue[][];

const randomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const addNewCell = (
  hazardLevel: number,
  ...knownNeighours: CellValue[]
): CellValue => {
  // Start with 8 x Field, 2 x Forest
  const selectionArray: CellValue[] = [
    field,
    field,
    field,
    field,
    field,
    field,
    field,
    field,
    forest,
    forest,
    ...knownNeighours,
  ];

  // Add more Forest for every level above 0
  for (let i = 0; i < hazardLevel; i++) {
    selectionArray.push(forest);
  }

  // Add Hills for every level above 3
  for (let i = 3; i < hazardLevel; i++) {
    selectionArray.push(hill);
  }

  // Add Impassable tiles for every level above 6
  for (let i = 6; i < hazardLevel; i++) {
    selectionArray.push(mountain);
  }

  const index = randomInteger(0, selectionArray.length - 1);

  return selectionArray[index];
};

/**
 * Creates a new grid with specified dimensions and obstacles.
 *
 * @param {number} rows - Height of the grid in rows.
 * @param {number} cols - Width of the grid in columns.
 * @param {number} hazardLevel - Number between 0 and 10 to determine how hard the terrain should be to pass.
 * @returns {BoardGrid} - BoardGrid
 */
export const createNewGrid = (
  rows: number,
  cols: number,
  hazardLevel: number
): BoardGrid => {
  const newGrid: BoardGrid = [];

  for (let i = 0; i < rows; i++) {
    newGrid[i] = [];
    for (let j = 0; j < cols; j++) {
      const newCell = addNewCell(hazardLevel);
      newGrid[i][j] = newCell;
    }
  }

  return newGrid;
};

type Step = "N" | "S" | "W" | "E";

/**
 * Values for Step array are = "N" | "S" | "W" | "E"
 */
export type Path = {
  startRow: number;
  startCol: number;
  endRow: number;
  endCol: number;
  steps: Step[];
  cost: number;
};

// const incrementPath:

const findPath = (
  grid: BoardGrid,
  targetRow: number,
  targetCol: number,
  startRow: number = 0,
  startCol: number = 0,
  callback?: Function
) => {
  const nullPath = {
    startRow: startRow,
    startCol: startCol,
    endRow: startRow,
    endCol: startCol,
    steps: [],
    cost: 0,
  };

  // Send null response if starting or finishing cells are impassable
  if (grid[startRow][startCol] === -1 || grid[targetRow][targetCol] === -1) {
    return nullPath;
  }

  let solutionFound = false;

  // Initiate activePaths with a null "Path" to the current square
  const activePaths: Path[] = [nullPath];
  const abandonedPaths: Path[] = [];

  while (!solutionFound) {
    // Take the top path from activePaths
    // Seek out options from the end of that path
    // Check if possible:
    //  - not impassable
    //  - not seen before for cheaper (ie not already in active or abandoned paths for cheaper)
    // Add new options to activePaths
    // Add old path to abandonedPaths
    // Sort allActivePaths so shortest routes are first
  }
};
