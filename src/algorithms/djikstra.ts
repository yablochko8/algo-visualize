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

type CellNode = {
  row: number;
  col: number;
  adjs: CellNode[];
};

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

const graphFromBoardGrid = (grid: BoardGrid) => {
  const rows = grid.length;
  const cols = grid[0].length;
  const graph: CellNode[][] = [];

  // Initialize nodes mimicking the original grid
  for (let i = 0; i < rows; i++) {
    const row: CellNode[] = [];
    for (let j = 0; j < cols; j++) {
      row.push({ row: i, col: j, adjs: [] });
    }
    graph.push(row);
  }

  // Add info on adjacent cells
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const node = graph[i][j];
      if (grid[i][j] < 0) {
        // do nothing
      } else {
        if (i > 0 && grid[i - 1][j] > 0) {
          node.adjs.push(graph[i - 1][j]); // North
        }
        if (i < rows - 1 && grid[i + 1][j] > 0) {
          node.adjs.push(graph[i + 1][j]); // South
        }
        if (j > 0 && grid[i][j - 1] > 0) {
          node.adjs.push(graph[i][j - 1]); // West
        }
        if (j < cols - 1 && grid[i][j + 1] > 0) {
          node.adjs.push(graph[i][j + 1]); // East
        }
      }
    }
  }
  return graph;
};

type Step = "N" | "S" | "W" | "E";

/**
 * Values for Step array are = "N" | "S" | "W" | "E"
 */
type Path = {
  startRow: number;
  startCol: number;
  row: number;
  col: number;
  steps: CellNode[];
  cost: number;
};

const checkNextStep = (
  grid: BoardGrid,
  path: Path,
  activePaths: Path[],
  abandonedPaths: Path[],
  graph: CellNode[][]
): Path[] => {
  const adjacents = graph[path.row][path.col].adjs;

  for (const adj of adjacents) {
    const abandonedPath = abandonedPaths.find(
      (path) => path.row === adj.row && path.col === adj.col
    );
    const activePath = activePaths.find(
      (path) => path.row === adj.row && path.col === adj.col
    );
    if (!abandonedPath && !activePath) {
      const newPath = { ...path };
      const row = adj.row;
      const col = adj.col;
      newPath.cost += grid[row][col];
      newPath.row = row;
      newPath.col = col;
      newPath.steps.push(graph[row][col]);
    }
  }
  const north = grid[path.row - 1][path.col];
  const south = grid[path.row + 1][path.col];
  const west = grid[path.row][path.col - 1];
  const east = grid[path.row][path.col + 1];
  const compass = [north, south, west, east];

  const passableRoutes = [];

  return [path];
};

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
    row: startRow,
    col: startCol,
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
    const topPath = activePaths.shift();

    // Take the top path from activePaths
    // Seek out options from the end of that path
    // Check if possible:
    //  - not impassable
    //  - not seen before for cheaper (ie not already in active or abandoned paths for cheaper)
    // Add new options to activePaths
    // Add old path to abandonedPaths
    // Sort allActivePaths so shortest routes are first
  }
  return nullPath;
};
