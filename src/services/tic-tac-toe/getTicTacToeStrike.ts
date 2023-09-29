import type { TicTacToeGrid } from "./createTicTacToeGrid"

export default function getTicTacToeStrike(grid: TicTacToeGrid) {
  let strike = getMainDiagonalStrike(grid)
  if (strike) return strike
  strike = getOffDiagonalStrike(grid)
  if (strike) return strike
  for (let k = 0; k < grid.length; k++) {
    let strike = getRowStrike(grid, k)
    if (strike) return strike
    strike = getColStrike(grid, k)
    if (strike) return strike
  }
  return []
}

function getMainDiagonalStrike(grid: TicTacToeGrid) {
  const strike: Position[] = []
  for (let k = 0; k < grid.length; k++) {
    if (grid[k][k] !== grid[0][0]) {
      return []
    }
    strike.push([k, k])
  }
  return strike
}

function getOffDiagonalStrike(grid: TicTacToeGrid) {
  const strike: Position[] = []
  for (let k = 0; k < grid.length; k++) {
    if (grid[k][grid.length - 1 - k] !== grid[0][grid.length - 1]) {
      return []
    }
    strike.push([k, grid.length - 1 - k])
  }
  return strike
}

function getRowStrike(grid: TicTacToeGrid, row: number) {
  const strike: Position[] = []
  for (let k = 0; k < grid[row].length; k++) {
    if (grid[row][k] !== grid[row][0]) {
      return []
    }
    strike.push([row, k])
  }
  return strike
}

function getColStrike(grid: TicTacToeGrid, col: number) {
  const strike: Position[] = []
  for (let k = 0; k < grid.length; k++) {
    if (grid[k][col] !== grid[0][col]) {
      return []
    }
    strike.push([k, col])
  }
  return strike
}

type Position = [number, number]
